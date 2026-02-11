const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg"
  ];
  res.render("gallery", { images });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});