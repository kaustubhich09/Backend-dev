const express = require("express");
const app = express();


app.use(express.json());


let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Game of Thrones", author: "George R.R. Martin" },
];


app.get("/books/search", (req, res) => {

  const titleQuery = req.query.title;  

  if (!titleQuery) {
    return res.status(400).json({
      message: "Please provide a title to search"
    });
  }

 
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(titleQuery.toLowerCase())
  );

  res.json(filteredBooks);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});