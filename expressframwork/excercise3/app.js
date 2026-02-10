const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send("Form successfully submitted ");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});