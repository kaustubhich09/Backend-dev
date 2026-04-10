// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    min: 0   
  },
  description: String,
  image: String
});

module.exports = mongoose.model("Product", productSchema);