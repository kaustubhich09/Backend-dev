import express from 'express';
import book from '../model/book.model.js';
import bookMid from '../middleware/book.mid.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await book.find();
        res.status(200).json({ message: "Data fetched successfully", data });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

router.post("/", bookMid, async (req, res) => {
    try {
        const newBook = await book.create(req.body);

        res.status(201).json({ message: "Book created successfully", book: newBook });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

export default router;