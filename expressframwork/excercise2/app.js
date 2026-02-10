const express = require("express");
const responseTimeLogger = require("./middleware/responseTimeLogger");

const app = express();


app.use(responseTimeLogger);


app.get("/", (req, res) => {
  res.send("Hello Home Page");
});


app.get("/about", (req, res) => {
  setTimeout(() => {
    res.send("About Page");
  }, 500);
});


app.post("/about", (req, res) => {
  res.send("About Page (POST)");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});