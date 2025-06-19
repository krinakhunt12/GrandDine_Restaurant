import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    // { name: "Events", path: "/events" },
    { name: "Reservation", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled true if user scrolls down 100px
      setScrolled(window.scrollY > 100);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Always apply blur for non-home pages
      setScrolled(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-transparent bg-opacity-30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <img src="/LOGO11.png" alt="Logo" className="h-12" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:heading-secondary transition"
              >
                {name}
              </Link>
            ))}

            {/* Cart Button */}
            <Link
              to="/cart"
              className="ml-4 text-white hover:heading-secondary transition"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-2xl" />
            </Link>

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="ml-4 px-5 py-2 border heading-secondary border-secondary rounded-full hover:button-secondary hover:text-black transition duration-300 shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="ml-3 px-5 py-2 button-secondary text-black rounded-full hover:bg-yellow-300 transition duration-300 shadow-md font-semibold"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="ml-4 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-md font-semibold"
              >
                Logout
              </button>
            )}
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
                  className="hover:heading-secondary transition"
                >
                  {name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:heading-secondary transition"
              >
                <FaShoppingCart className="text-2xl" />
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-40 px-5 py-2 border heading-secondary heading-secondary rounded-full hover:button-secondary hover:text-black transition duration-300 text-center shadow-sm"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-40 px-5 py-2 button-secondary text-black rounded-full hover:bg-yellow-300 transition duration-300 text-center shadow-md font-semibold"
                  >
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="w-40 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 text-center shadow-md font-semibold"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
