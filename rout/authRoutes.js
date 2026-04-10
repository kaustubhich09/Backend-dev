const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../mod/User");
const { loginLimiter } = require("../middlewar/rateLimiter");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.send("User registered");
});

// Login
router.post("/login", loginLimiter, async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("Wrong password");

  req.session.userId = user._id;
  req.session.role = user.role;

  res.send("Login successful");
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

module.exports = router;