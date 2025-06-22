import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchProfile();
  }, []);

  // Simulated API call (replace with real API call)
  const fetchProfile = async () => {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              name: "John Doe",
              email: "john@example.com",
              phone: "+91 9876543210",
            }),
          1000
        )
      );
      setProfile(response);
    } catch (error) {
      console.error("Error fetching profile", error);
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const errs = {};
    if (!profile.name.trim()) errs.name = "Name is required";
    if (!profile.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      errs.email = "Invalid email";
    }
    if (!profile.phone.trim()) errs.phone = "Phone is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSaving(true);
    try {
      // Simulate save API
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/dashboard"); // 👈 Redirect here
      }, 2000); // Delay to show message
    } catch (error) {
      console.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-navy text-white px-4 py-16 flex items-center justify-center">
      <div
        className="w-full max-w-2xl bg-black/70 p-10 rounded-2xl shadow-lg backdrop-blur-md"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gold mb-6 text-center font-serif">
          Edit Profile
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading profile...</p>
        ) : (
          <form onSubmit={handleSave} noValidate>
            {success && (
              <div className="mb-6 bg-green-800 text-green-200 p-4 rounded text-center">
                ✅ Profile updated! Redirecting to dashboard...
              </div>
            )}

            {/* Fields */}
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
              disabled={saving}
              className={`w-full bg-gold text-black py-4 rounded-xl font-bold transition hover:bg-yellow-500 transform hover:-translate-y-1 ${
                saving && "opacity-60 cursor-not-allowed"
              }`}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
