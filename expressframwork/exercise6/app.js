const express = require("express");
const path = require("path");

const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
  { id: 1, title: "First Post", content: "This is my first blog post" },
  { id: 2, title: "Second Post", content: "Learning Express is fun!" }
];

app.get("/", (req, res) => {
  res.render("index", { posts });
});


app.get("/post/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("post", { post });
});


app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect("/");
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});