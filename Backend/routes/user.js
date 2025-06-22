const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// GET /api/user/profile
router.get("/profile", auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// PUT /api/user/profile
router.put("/profile", auth, async(req, res) => {
    const { name, email, phone } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id, { name, email, phone }, { new: true }
        ).select("-password");
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;