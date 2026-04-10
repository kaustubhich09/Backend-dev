const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const helmet = require("helmet");

const connectDB = require("./confi/db");

// Routes
const authRoutes = require("./rout/authRoutes");
const productRoutes = require("./rout/productRoutes");
const reviewRoutes = require("./rout/reviewRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// 🔐 Security Headers (Helmet)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://cdn.example.com"],
        scriptSrc: ["'self'", "https://www.youtube.com"],
        frameSrc: ["https://www.youtube.com"]
      }
    }
  })
);

// 🍪 Session Management (MongoStore)
app.use(
  session({
    secret: "superSecretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/shopeasy"
    }),
    cookie: {
      httpOnly: true,
      secure: false, // ⚠️ true in production (HTTPS)
      maxAge: 1000 * 60 * 30 // 30 minutes
    }
  })
);

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 ShopEasy API is running...");
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});