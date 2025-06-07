const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// @route   POST /api/auth/signup
// @desc    Register new user
// @access  Public
router.post("/signup", async(req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already registered" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;