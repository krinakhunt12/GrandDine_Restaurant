import React, { useState } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const peopleOptions = [
  "1 person",
  "2 people",
  "3 people",
  "4 people",
  "5+ people",
];

const priceOptions = ["₹0-₹500", "₹500-₹1000", "₹1000+"];

const ReserveTable = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seats: peopleOptions[0],
    requests: "",
    priceRange: priceOptions[1],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: form.name,
        email: form.email,
        mobile: form.phone,
        date: form.date,
        time: form.time,
        persons: form.seats,
        priceRange: form.priceRange,
        specialRequests: form.requests,
      };
      await axios.post("http://localhost:5000/api/reservations", payload);
      alert("Reservation submitted!");
      onClose();
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Failed to submit reservation.");
    }
  };

  return (
    <div className="fixed inset-0 bg-transperant bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-transperant bg-opacity-50 border border-gray-300 p-6 rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-secondary hover:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center z-50"
        >
          ✕
        </button>

        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold tracking-wide">
            <span className="text-white italic font-serif">Table</span>{" "}
            <span className="block text-white">BOOKING</span>
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl grid md:grid-cols-2 gap-6 text-white"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1">Name*</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-white outline-none py-2"
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
              required
              className="bg-transparent border-b border-white outline-none py-2"
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
              required
              className="bg-transparent border-b border-white outline-none py-2"
            />
          </div>

          {/* Seats - Custom Dropdown */}
       <div className="flex flex-col">
  <label className="mb-1">Seats*</label>
  <Listbox
    value={form.seats}
    onChange={(val) => setForm({ ...form, seats: val })}
  >
    <div className="relative">
      <Listbox.Button className="relative w-full cursor-pointer bg-transparent border-b border-white py-2 pl-3 pr-10 text-left text-white shadow-md outline-none focus:outline-none">
        <span className="block truncate">{form.seats}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-white"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-black bg-opacity-90 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
        {peopleOptions.map((option, idx) => (
          <Listbox.Option
            key={idx}
            value={option}
            className={({ active }) =>
              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                active ? "bg-secondary text-black" : "text-white"
              }`
            }
          >
            {({ selected }) => (
              <>
                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                  {option}
                </span>
                {selected && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                )}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
</div>

          {/* Price Range - Custom Dropdown */}
     <div className="flex flex-col">
  <label className="mb-1">Price Range*</label>
  <Listbox
    value={form.priceRange}
    onChange={(val) => setForm({ ...form, priceRange: val })}
  >
    <div className="relative">
      <Listbox.Button className="relative w-full cursor-pointer bg-transparent border-b border-white py-2 pl-3 pr-10 text-left text-white shadow-md outline-none focus:outline-none">
        <span className="block truncate">{form.priceRange}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-white"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-black bg-opacity-90 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
        {priceOptions.map((option, idx) => (
          <Listbox.Option
            key={idx}
            value={option}
            className={({ active }) =>
              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                active ? "bg-secondary text-black" : "text-white"
              }`
            }
          >
            {({ selected }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {option}
                </span>
                {selected && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                )}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
</div>


          {/* Date */}
          <div className="flex flex-col">
            <label className="mb-1">Date*</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-white outline-none py-2 text-white"
              style={{ colorScheme: "dark" }}
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
              required
              className="bg-transparent border-b border-white outline-none py-2 text-white"
              style={{ colorScheme: "dark" }}
            />
          </div>

          {/* Special Requests */}
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
  );
};

export default ReserveTable;
