import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const validate = () => {
    const errs = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!formData.name.trim()) errs.name = "Name is required";

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      errs.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errs.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }

    if (!formData.confirmPassword.trim()) {
      errs.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }

    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrors({ api: result.message || "Signup failed." });
      }
    } catch (err) {
      setErrors({ api: "Server error. Try again later." });
    }

    setLoading(false);
  };

  return (
    <div
      className="flex w-full shadow-lg rounded-lg overflow-hidden h-screen"
      data-aos="fade-up"
    >
      <div className="w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
          alt="Restaurant view"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-screen flex justify-center items-center p-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full space-y-6"
          noValidate
        >
          <h2 className="text-4xl font-extrabold text-yellow-600 mb-8 text-center">
            Sign Up
          </h2>

          {submitted && (
            <p className="text-green-600 text-center font-semibold">
              Account created! Redirecting...
            </p>
          )}
          {errors.api && (
            <p className="text-red-600 text-center font-semibold">
              {errors.api}
            </p>
          )}

          {/* Name */}
          <div className="flex flex-col items-start">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <label className="mb-1 font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col items-start relative">
            <label
              className="mb-1 font-semibold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-yellow-600 font-semibold hover:text-yellow-700 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col items-start relative">
            <label
              className="mb-1 font-semibold text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Re-enter Password"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-[38px] text-yellow-600 font-semibold hover:text-yellow-700 focus:outline-none"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 font-medium text-gray-700 cursor-pointer"
            >
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 text-white px-6 py-3 rounded w-full hover:bg-yellow-600 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-600 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
