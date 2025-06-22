import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchProfile();
  }, []);

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    const res = await axios.get("http://localhost:5000/api/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setProfile({
      name: res.data.name || "",
      email: res.data.email || "",
      phone: res.data.phone || "",
    });
    setLoading(false);
  } catch (err) {
    console.error("Failed to load profile", err);
    setLoading(false);
  }
};


  const validate = () => {
    const errs = {};
    if (!profile.name.trim()) errs.name = "Name is required";
    if (!profile.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      errs.email = "Email is invalid";
    }
    if (!profile.phone.trim()) errs.phone = "Phone number is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found during profile update");
      return;
    }

    await axios.put(
      "http://localhost:5000/api/user/profile",
      {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  } catch (err) {
    console.error("Error updating profile", err);
    setErrors({ api: "Something went wrong. Please try again." });
  }
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-navy text-white px-4 py-16 flex items-center justify-center">
      <div
        className="w-full max-w-2xl bg-black/70 p-10 rounded-2xl shadow-lg backdrop-blur-md"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gold mb-6 text-center font-serif">
          Edit Profile
        </h2>

        {success && (
          <div className="mb-6 text-green-200 bg-green-800 p-4 rounded text-center">
            ✅ Profile updated successfully! Redirecting...
          </div>
        )}

        {errors.api && (
          <div className="mb-4 text-red-400 bg-red-800 p-3 rounded text-center">
            {errors.api}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {[
            {
              name: "name",
              label: "Full Name",
              icon: FaUser,
              placeholder: "John Doe",
              type: "text",
            },
            {
              name: "email",
              label: "Email Address",
              icon: FaEnvelope,
              placeholder: "john@example.com",
              type: "email",
            },
            {
              name: "phone",
              label: "Phone Number",
              icon: FaPhone,
              placeholder: "+91 9876543210",
              type: "tel",
            },
          ].map(({ name, label, icon: Icon, ...rest }) => (
            <div className="mb-6" key={name}>
              <label htmlFor={name} className="block mb-2 font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gold">
                  <Icon />
                </span>
                <input
                  id={name}
                  name={name}
                  value={profile[name]}
                  onChange={handleChange}
                  className={`w-full pl-10 p-4 rounded-xl bg-dark-navy border ${
                    errors[name] ? "border-red-500" : "border-gray-700"
                  } placeholder-gray-500 focus:outline-none focus:ring-gold`}
                  {...rest}
                />
              </div>
              {errors[name] && (
                <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gold text-black py-4 rounded-xl font-bold hover:bg-yellow-500 transition transform hover:-translate-y-1"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
