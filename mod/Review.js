// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  comment: String,
  rating: Number
});

module.exports = mongoose.model("Review", reviewSchema);