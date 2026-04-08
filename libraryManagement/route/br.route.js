import express from 'express';
import BorrowRecord from '../model/br.model.js';
import brMid from '../middleware/br.mid.js';
import book from '../model/book.model.js';
import member from '../model/member.model.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const records = await BorrowRecord.find()
        .populate("member_id")
        .populate("books");

        res.status(200).json({ message: "Data fetched successfully", data: records });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

router.post("/", brMid, async (req, res) => {
    try {
        const newBorrowRecord = await BorrowRecord.create(req.body);

        res.status(201).json({ message: "Borrow record created successfully", borrowRecord: newBorrowRecord });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

export default router;