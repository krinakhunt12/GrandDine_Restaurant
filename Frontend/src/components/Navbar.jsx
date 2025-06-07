import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    // Only apply scroll listener on Home page
    if (location.pathname === "/") {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // For other pages, reset scrolled state (optional)
      setScrolled(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        location.pathname === "/"
          ? scrolled
            ? "bg-black bg-opacity-50 backdrop-blur-sm"
            : "bg-opacity-70"
          : "bg-black bg-opacity-80" // default style on other pages
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white md:text-yellow-400">GRAND DINE</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-white">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-yellow-400 transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          {/* Buttons */}
          <Link
            to="/login"
            className="ml-4 px-4 py-1 border border-white rounded text-white font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="ml-2 px-4 py-1 bg-white rounded text-black font-medium hover:bg-gray-200 transition"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transition duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-[64px] left-0 right-0 bg-yellow-400 text-black shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-semibold">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-600 transition"
              >
                {name}
              </Link>
            </li>
          ))}

          {/* Mobile Buttons */}
          <li>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-4 py-2 border border-black rounded text-black font-medium hover:bg-gray-200 transition block text-center"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-4 py-2 bg-black rounded text-white font-medium hover:bg-gray-800 transition block text-center"
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
