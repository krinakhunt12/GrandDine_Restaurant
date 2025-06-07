import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Column 1: Logo & Name */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-yellow-500 tracking-wider">
            GRAND DINE
          </h2>
          <p className="text-sm text-gray-600">Luxury Dining & Banquets</p>

          <div className="flex justify-center md:justify-start space-x-5 mt-4 text-yellow-500">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-yellow-600 transition transform hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-yellow-600 transition transform hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-yellow-600 transition transform hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Menu",
              "Events",
              "Gallery",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative inline-block group text-gray-700 hover:text-yellow-500 transition"
                >
                  {item}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <p className="text-sm mb-1">123 Luxury Ave, Food City</p>
          <p className="text-sm mb-1">Phone: (123) 456-7890</p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />{" "}
            info@granddine.com
          </p>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest offers & updates.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center md:justify-start"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 transition outline-none w-full sm:w-auto"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-md"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-3 text-green-600 font-medium">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12 select-none">
        © {new Date().getFullYear()} Grand Dine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
