import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      errs.password = "Password is required";
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setShake(false);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setLoading(true);

      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

       if (!response.ok) {
  setServerError(data.message || "Login failed");
  setShake(true);
  setTimeout(() => setShake(false), 500);
} else {
  // ✅ Save token
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  setIsLoggedIn(true);
  setSubmitted(true);
  setFormData({ email: "", password: "" });

  setTimeout(() => {
    navigate("/");
  }, 1500);
}

      } catch (error) {
        setServerError("Server error. Please try again later.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-screen transition-all ${
        shake ? "animate-shake" : ""
      }`}
    >
      <div className="hidden md:flex md:w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full space-y-6 bg-white shadow-xl rounded-2xl p-8"
          noValidate
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-secondary mb-4">Welcome Back</h2>

          {submitted && (
            <p className="text-green-600 font-semibold text-center">
              Login successful! Redirecting...
            </p>
          )}

          {serverError && (
            <p className="text-red-600 font-medium text-center">{serverError}</p>
          )}

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full border px-4 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-secondary"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded text-secondary focus:ring-yellow-400"
              />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-secondary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-secondary hover:bg-secondary text-white font-semibold py-2.5 rounded-lg transition shadow-md ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-secondary font-medium hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
