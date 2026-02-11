const express = require("express");
const app = express();
const path = require("path");


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.send("Home Page");
});


app.use((req, res) => {
  res.status(404).render("404");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});