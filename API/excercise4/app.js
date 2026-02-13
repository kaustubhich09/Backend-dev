const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));


let authors = [
  { id: 1, name: "Chetan Bhagat" },
  { id: 2, name: "J.K. Rowling" }
];



app.get("/authors", (req, res) => {
  res.render("authors/index", { authors });
});


app.get("/authors/new", (req, res) => {
  res.render("authors/new");
});


app.post("/authors", (req, res) => {
  const { name } = req.body;

  const newAuthor = {
    id: authors.length + 1,
    name
  };

  authors.push(newAuthor);
  res.redirect("/authors");
});



app.get("/authors/:id/edit", (req, res) => {
  const { id } = req.params;
  const author = authors.find(a => a.id == id);

  res.render("authors/edit", { author });
});



app.post("/authors/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const author = authors.find(a => a.id == id);
  author.name = name;

  res.redirect("/authors");
});



app.post("/authors/:id/delete", (req, res) => {
  const { id } = req.params;

  authors = authors.filter(a => a.id != id);

  res.redirect("/authors");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});