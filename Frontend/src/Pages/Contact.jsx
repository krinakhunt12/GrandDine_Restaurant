import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart'
    });
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
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
        <div className="text-center relative z-10 px-4" data-aos="zoom-in">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-600 tracking-tight mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, our team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex-grow grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start mb-20">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-yellow-100 transform transition-all hover:shadow-2xl"
          noValidate
          data-aos="fade-right"
          aria-label="Contact form"
        >
          {submitted && (
            <div 
              className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl text-center font-semibold animate-fade-in"
              data-aos="fade-down"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Thanks for reaching out! We'll get back to you soon.</span>
              </div>
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-left text-gray-700 font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className={`w-full border-2 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                errors.name ? "border-red-400" : "border-gray-200 hover:border-yellow-300"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-left text-gray-700 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border-2 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                errors.email ? "border-red-400" : "border-gray-200 hover:border-yellow-300"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-left text-gray-700 font-medium">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className={`w-full border-2 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all ${
                errors.message ? "border-red-400" : "border-gray-200 hover:border-yellow-300"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${
              isLoading ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <RiSendPlaneFill size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Contact Details */}
        <section className="space-y-10" data-aos="fade-left" aria-label="Contact details">
          {/* Google Maps */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white transform transition-all hover:shadow-2xl">
            <iframe
              title="Our Location"
              className="w-full h-72 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2430469070427!2d-122.41941508468333!3d37.77492927975821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d4567f09f%3A0xabcdef1234567890!2sYour+Restaurant+Name!5e0!3m2!1sen!2sus!4v1618881234567!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-yellow-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-yellow-200">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Location</h3>
                  <p className="text-gray-600">123 Main Street, San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <FaPhone size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-600 text-sm mt-1">Mon-Fri, 9am-5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-600">contact@restaurant.com</p>
                  <p className="text-gray-600">support@restaurant.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <FaClock size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Opening Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 11am – 10pm</p>
                  <p className="text-gray-600">Saturday - Sunday: 9am – 11pm</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-yellow-200">
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-400 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;