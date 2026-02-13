const express = require("express");
const router = express.Router();

router.use(express.json());

let books = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
    { id: 4, title: "Book 4" },
    { id: 5, title: "Book 5" }
];



router.get("/", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedBooks = books.slice(startIndex, endIndex);

    res.json({
        page,
        limit,
        totalBooks: books.length,
        totalPages: Math.ceil(books.length / limit),
        data: paginatedBooks
    });
});



router.post("/", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const newBook = {
        id: books.length + 1,
        title: title
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

module.exports = router;