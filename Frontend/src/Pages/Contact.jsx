import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-quart" });
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

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setErrors({});
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    } else setErrors(errs);
  };

  return (
    <div className="font-sans bg-dark-navy text-gray-100 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <header
        className="relative pt-24 pb-20 text-center px-4"
        data-aos="zoom-in"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-gold mb-4 my-10">
            Let’s Connect
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            We'd love to hear from you! Questions, feedback, or just a hello —
            reach out and we'll be there.
          </p>
        </div>
      </header>

      {/* Form & Info */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-16 grid lg:grid-cols-[3fr_2fr] gap-16">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          className="bg-black/70 p-10 rounded-2xl backdrop-blur-md  shadow-lg"
          data-aos="fade-right"
        >
          {submitted && (
            <div
              className="mb-6 bg-green-800 text-green-200 p-4 rounded-lg text-center animate-fade-in"
              data-aos="fade-down"
            >
              👍 Thanks! We'll get right back to you.
            </div>
          )}

          {["name", "email", "message"].map((field) => (
            <div className="mb-6" key={field}>
              <label
                htmlFor={field}
                className="block text-left font-medium mb-2"
              >
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Email Address"
                  : "Your Message"}{" "}
                <span className="text-red-500">*</span>
              </label>
              {field !== "message" ? (
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name" ? "Jane Doe" : "you@example.com"
                  }
                  className={`w-full p-4 rounded-xl bg-dark-navy border ${
                    errors[field] ? "border-red-500" : "border-gray-700"
                  } placeholder-gray-500 focus:outline-none focus:ring-gold`}
                />
              ) : (
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`w-full p-4 rounded-xl bg-dark-navy border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } placeholder-gray-500 focus:outline-none focus:ring-gold resize-none`}
                ></textarea>
              )}
              {errors[field] && (
                <p className="mt-2 text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
          <div className="flex items-center justify-center mx-auto">
                     <button
            type="submit"
            className={`px-4 flex items-center justify-center gap-2 bg-gradient-to-r border border-gray-300 py-4 rounded-xl font-semibold transition transform hover:-translate-y-1 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            <span className="flex items-center gap-2">
              {isLoading ? "Sending..." : "Send Message"}
              {!isLoading && <RiSendPlaneFill size={20} />}
            </span>
          </button>
          </div>
 
        </form>

        {/* Contact Info */}
        <aside
          className="space-y-10"
          data-aos="fade-left"
          aria-label="Contact details"
        >
       
       {/* Map */}
<div className="relative overflow-hidden rounded-2xl shadow-lg h-64">
  <iframe
    title="Location"
    className="w-full h-full rounded-2xl border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.4100204986644!2d72.53176421535308!3d23.116644618371073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fc58f2cb4f%3A0x92d1ff96b87520f6!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1718603342486!5m2!1sen!2sus"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
</div>


          {/* Info Card */}
          <div className="bg-black/70 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-gold mb-6">
              Contact Info
            </h2>
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                lines: ["123 Main Street", "Ahmedabad, Gujarat"],
              },
              {
                icon: FaPhone,
                title: "Phone",
                lines: ["(+91) 12345 67890", "Mon–Fri, 9 am–6 pm"],
              },
              {
                icon: FaEnvelope,
                title: "Email",
                lines: ["contact@wilma.com", "support@wilma.com"],
              },
              {
                icon: FaClock,
                title: "Hours",
                lines: ["Mon–Fri: 11 am–10 pm", "Sat–Sun: 9 am–11 pm"],
              },
            ].map(({ icon: Icon, title, lines }, i) => (
              <div className="flex items-start space-x-4 mb-6" key={i}>
                <div className="bg-gold/30 p-3 rounded-full text-gold">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-left">{title}</h3>
                  {lines.map((l, j) => (
                    <p className="text-gray-300 text-left" key={j}>
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-gold/30">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, url: "#", color: "blue" },
                  { icon: FaInstagram, url: "#", color: "pink" },
                  { icon: FaTwitter, url: "#", color: "cyan" },
                ].map(({ icon: Icon, url, color }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-${color}-800 p-3 rounded-full text-${color}-400 hover:shadow-lg transform hover:-translate-y-1 transition`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
