import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const data = await book.find();
        res.status(200).json("Data: ", data);
    } catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

app.post("/", async (req, res) => {
    try {
        const {title, author, price} = req.body
        if (!title || !author || !price) {
            return res.status(400).json({ message: "Missing fields" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", errormessage: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})