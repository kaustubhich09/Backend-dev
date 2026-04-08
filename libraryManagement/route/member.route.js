import express from 'express';
import member from '../model/member.model.js';
import memberMid from '../middleware/member.mid.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await member.find();
        res.status(200).json({message: "Data fetched successfully", data });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

router.post("/", memberMid, async (req, res) => {
    try {
        const newMember = await member.create(req.body);

        res.status(201).json({ message: "Member created successfully", member: newMember });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

export default router;