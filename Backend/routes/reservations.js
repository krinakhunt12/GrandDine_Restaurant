// routes/reservations.js

const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// POST: Create a new reservation
router.post("/", async(req, res) => {
    try {
        const {
            name,
            email,
            mobile,
            date,
            time,
            persons,
            priceRange,
            specialRequests,
        } = req.body;

        // Validate required fields
        if (!name || !email || !mobile || !date || !time || !persons) {
            return res
                .status(400)
                .json({ message: "All required fields must be provided." });
        }

        // Create and save new reservation
        const newReservation = new Reservation({
            name,
            email,
            mobile,
            date,
            time,
            persons,
            priceRange: priceRange || "₹0-₹500",
            specialRequests: "",
        });

        await newReservation.save();

        res.status(201).json({ message: "Reservation saved successfully!" });
    } catch (error) {
        console.error("Error saving reservation:", error);
        res.status(500).json({ message: "Error saving reservation", error });
    }
});

module.exports = router;