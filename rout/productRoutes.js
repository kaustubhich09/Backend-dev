const express = require("express");
const Product = require("../mod/Product");
const auth = require("../middlewar/auth");

const router = express.Router();

// Add product (admin only)
router.post("/add", auth, async (req, res) => {
  if (req.session.role !== "admin") {
    return res.status(403).send("Forbidden");
  }

  const product = new Product(req.body);
  await product.save();

  res.send("Product added");
});

// Search (safe from injection)
router.get("/search", async (req, res) => {
  const query = req.query.q;

  if (typeof query !== "string") {
    return res.status(400).send("Invalid search");
  }

  const products = await Product.find({
    name: { $regex: query, $options: "i" }
  });

  res.json(products);
});

module.exports = router;