const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    persons: { type: String, required: true },
    priceRange: { type: String, required: true },
    specialRequests: { type: String }, // optional
});

module.exports = mongoose.model("Reservation", reservationSchema);