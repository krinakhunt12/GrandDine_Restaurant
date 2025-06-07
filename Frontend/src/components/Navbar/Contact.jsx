import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Example image URLs, you can replace these with your own images or import local ones
const heroImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";
const contactIllustration =
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      // Form submission logic here
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div
        className="w-full h-20 bg-cover bg-center relative pt-30 md:pt-20"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto p-8 md:p-16 flex-grow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
          data-aos="fade-up"
        >
          {submitted && (
            <p className="text-green-600 font-semibold">
              Thanks for reaching out! We'll get back to you soon.
            </p>
          )}

          <div className="relative">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full border rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {/* User icon inside input */}
            <svg
              className="w-5 h-5 absolute left-3 top-9 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A4 4 0 0112 14a4 4 0 016.879 3.804M12 14a4 4 0 100-8 4 4 0 000 8z"
              ></path>
            </svg>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {/* Email icon */}
            <svg
              className="w-5 h-5 absolute left-3 top-9 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8 0l-4 4m0-8l4 4"
              ></path>
            </svg>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition"
          >
            Send Message
          </button>
        </form>

        {/* Right: Illustration */}
        <div data-aos="fade-left" className="hidden md:block">
          <img
            src={contactIllustration}
            alt="Contact illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
