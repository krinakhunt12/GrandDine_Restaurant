const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Route files
const reservationRoutes = require("./routes/reservations");
const authRoutes = require("./routes/auth"); // Optional, if you're using auth

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// API Routes
app.use("/api/reservations", reservationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", require("./routes/user"));

// Root Route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});