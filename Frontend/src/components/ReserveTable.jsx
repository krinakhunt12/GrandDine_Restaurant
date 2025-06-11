import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed

const ReserveTable = ({ onClose }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    persons: "1",
    priceRange: "Moderate",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Redirect if not logged in
    if (!isLoggedIn) {
      alert("Please login to make a reservation.");
      navigate("/login");
      return;
    }

    const { name, email, mobile, date, time, persons, priceRange } = formData;

    if (!name || !email || !mobile || !date || !time || !persons || !priceRange) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            mobile: "",
            date: "",
            time: "",
            persons: "1",
            priceRange: "Moderate",
            specialRequests: "",
          });
          setSubmitted(false);
          onClose();
        }, 2500);
      } else {
        alert("Failed to submit reservation.");
      }
    } catch (err) {
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-3xl relative overflow-y-auto max-h-[95vh] animate-fadeIn scrollbar-hide">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Close reservation form"
        >
          ✕
        </button>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
          {/* Left/Form Side */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-600 mb-2 text-left">
              {submitted ? "Thank You!" : "Reserve Your Table"}
            </h2>
            <p className="text-gray-500 text-left mb-6">
              {submitted
                ? "Your reservation was submitted successfully."
                : "We’ll make sure your table is ready when you arrive."}
            </p>

            {submitted ? (
              <div className="flex justify-center items-center py-10">
                <CheckCircle className="text-green-500 w-16 h-16 animate-pulse" />
              </div>
            ) : (
              <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    placeholder="123-456-7890"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Date
                    </label>
                    <input
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date"
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Time
                    </label>
                    <input
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      type="time"
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Number of Persons
                    </label>
                    <select
                      name="persons"
                      value={formData.persons}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i + 1 === 1 ? "person" : "persons"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                      Price Range
                    </label>
                    <select
                      name="priceRange"
                      value={formData.priceRange}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    >
                      <option value="Budget">Budget</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={2}
                    placeholder="E.g. Please seat us near the window."
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-full hover:bg-yellow-600 transition duration-200"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Table"
              className="rounded-xl shadow-lg object-cover w-full h-60 sm:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
