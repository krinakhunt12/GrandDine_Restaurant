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
    if (location.pathname === "/") {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        location.pathname === "/"
          ? scrolled
            ? "bg-black bg-opacity-70 backdrop-blur-md"
            : "bg-transparent"
          : "bg-black bg-opacity-90"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          GRAND DINE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-yellow-400 transition"
            >
              {name}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-4 px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="ml-2 px-4 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none z-50"
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
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 text-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-8 text-lg font-semibold">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition text-center"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition text-center"
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
