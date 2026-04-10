const express = require("express");
const Review = require("../mod/Review");
const auth = require("../middlewar/auth");
const xss = require("xss");

const router = express.Router();

// Add review
router.post("/add", auth, async (req, res) => {
  const cleanComment = xss(req.body.comment);

  const review = new Review({
    user: req.session.userId,
    product: req.body.productId,
    comment: cleanComment,
    rating: req.body.rating
  });

  await review.save();
  res.send("Review added safely");
});

module.exports = router;