import React, { useState } from "react";

const ReserveTable = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seats: "1 person",
    requests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Submitted!");
  };

  return (
    <div className="fixed inset-0 bg-transperant bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-transperant bg-opacity-50 border border-gray-300 p-6 rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto scrollbar-hide">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-secondary hover:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center z-50"
          title="Close"
        >
          ✕
        </button>

        {/* Main Content */}
        <div className="relative min-h-screen md:min-h-[unset] flex flex-col justify-center items-center bg-transparent text-white px-6 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold tracking-wide">
              <span className="text-gold italic font-serif">Table</span>{" "}
              <span className="block text-white">BOOKING</span>
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl grid md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1">Name*</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">Email*</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1">Phone*</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2"
                required
              />
            </div>

            {/* Seats */}
            <div className="flex flex-col">
              <label className="mb-1">Seats*</label>
              <select
                name="seats"
                value={form.seats}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2 appearance-none"
                required
              >
                {[
                  "1 person",
                  "2 people",
                  "3 people",
                  "4 people",
                  "5+ people",
                ].map((s, i) => (
                  <option key={i} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="mb-1">Date*</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2"
                style={{
                  colorScheme: "dark",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
                required
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="mb-1">Time*</label>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                className="bg-transparent border-b border-white outline-none py-2"
                style={{
                  colorScheme: "dark",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
                required
              />
            </div>

            {/* Special Requests (full width) */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-1">Special Requests</label>
              <textarea
                name="requests"
                value={form.requests}
                onChange={handleChange}
                rows="3"
                className="bg-transparent border-b border-white outline-none py-2 resize-none"
              ></textarea>
            </div>

            {/* Button (centered) */}
            <div className="md:col-span-2 flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gold text-white border border-white font-bold py-3 px-8 rounded-full transition hover:opacity-90"
              >
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
