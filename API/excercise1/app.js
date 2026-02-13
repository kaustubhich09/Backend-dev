const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;


let books = [
  { id: 1, title: "Book A", author: "kaustubhi", year: 2023 },
  { id: 2, title: "Book B", author: "Rahul", year: 2022 },
  { id: 3, title: "Book C", author: "Preeti", year: 2021 },
  { id: 4, title: "Book D", author: "Aman", year: 2023 }
];



app.get("/books", (req, res) => {

  let filteredBooks = books;

  const { author, year } = req.query;

  if (author) {
    filteredBooks = filteredBooks.filter(book =>
      book.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    filteredBooks = filteredBooks.filter(book =>
      book.year == year
    );
  }

  res.json(filteredBooks);
});



app.post("/books", (req, res) => {

  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({
      message: "Title, author and year are required"
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});