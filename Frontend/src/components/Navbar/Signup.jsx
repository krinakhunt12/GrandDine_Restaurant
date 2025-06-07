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
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email";
    }
    if (!formData.password.trim()) errs.password = "Password is required";
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

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setLoading(true);
      setShake(false);

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
          setFormData({ name: "", email: "", password: "", confirmPassword: "" });
          setTimeout(() => navigate("/login"), 2000);
        } else {
          setErrors({ api: result.message || "Signup failed." });
        }
      } catch (err) {
        setErrors({ api: "Server error. Try again later." });
      }

      setLoading(false);
    } else {
      setErrors(validationErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className={`flex w-full shadow-lg rounded-lg overflow-hidden h-screen ${
        shake ? "animate-shake" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-screen flex justify-center items-center p-12">
        <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-6" noValidate>
          <h2 className="text-4xl font-extrabold text-yellow-600 mb-8 text-center">Sign Up</h2>

          {submitted && (
            <p className="text-green-600 text-center font-semibold">
              Account created! Redirecting...
            </p>
          )}
          {errors.api && (
            <p className="text-red-600 text-center font-semibold">{errors.api}</p>
          )}

          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded px-4 py-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label>Confirm Password</label>
            <input
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="ml-2">Remember Me</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={() => navigate("/")}
            className="bg-yellow-500 text-white px-6 py-3 rounded w-full"
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
