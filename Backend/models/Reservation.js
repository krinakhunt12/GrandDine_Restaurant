// models/Reservation.js

const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "is invalid"],
    },

    mobile: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, "must be a valid 10-digit phone number"],
    },

    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    persons: {
        type: String,
        required: true,
        enum: ["1 person", "2 people", "3 people", "4 people", "5+ people"],
    },

    priceRange: {
        type: String,
        required: true,
        enum: ["₹0-₹500", "₹500-₹1000", "₹1000+"],
    },

    specialRequests: {
        type: String,
        trim: true,
        default: "",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Reservation", reservationSchema);