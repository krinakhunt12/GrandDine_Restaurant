import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"; // Tailwind + globals
import Footer from "./Footer";
import ReserveTable from "./ReserveTable";
import Navbar from "./Navbar";
const Home = () => {
  const [showReservation, setShowReservation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Smooth scroll for anchor links (optional)
    const smoothScroll = (event) => {
      if (event.target.hash) {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center relative bg-gray-900"
        aria-label="Hero Section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="z-10 text-center px-6 max-w-3xl" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Experience Fine Dining
          </h2>
          <p className="mt-4 text-xl text-gray-200 font-medium tracking-wide">
            Luxury. Taste. Elegance.
          </p>
          <button
            onClick={() => setShowReservation(true)}
            className="mt-8 inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
          >
            Reserve Now
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 animate-bounce text-gray-200">
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p className="text-sm mt-1">Scroll down</p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-24 px-6 bg-gray-100"
        data-aos="fade-right"
        aria-label="About Us"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold mb-8 text-yellow-500 tracking-wide">
                About Us
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to Grand Dine, where luxury meets flavor. From exquisite
                banquets to romantic dinners, we craft unforgettable culinary
                moments in a space that radiates elegance and warmth.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Our expert chefs combine traditional techniques with modern
                innovation to create dishes that tell a story with every bite.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Elegant restaurant interior"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        className="py-24 px-6 bg-white text-gray-800"
        data-aos="fade-up"
        aria-label="Menu"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-14 text-yellow-500 tracking-wide">
            Our Signature Menu
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Grilled Salmon",
                desc: "Fresh salmon grilled to perfection with a lemon butter sauce.",
                image:
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
              },

              {
                name: "Butter Chicken",
                desc: "Rich, tender and deeply spiced.",
                image:
                  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Chocolate Lava Cake",
                desc: "Warm, gooey, and irresistible.",
                image:
                  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer overflow-hidden"
                role="article"
                tabIndex={0}
                aria-label={`${item.name} - ${item.desc}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-2xl font-semibold">{item.name}</h4>
                  <p className="text-gray-600 mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Special Section */}
      <section
        className="py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        data-aos="fade-up"
        aria-label="Chef's Special"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing gourmet dish"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-8 text-yellow-400 tracking-wide">
                Chef's Special
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Experience the artistry of our master chef with our seasonal
                tasting menu. Each dish is carefully crafted using the finest
                ingredients sourced from local farms and international markets.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our signature creation changes with the seasons, ensuring a
                unique and fresh experience with every visit.
              </p>
              <button
                onClick={() => setShowReservation(true)}
                className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
              >
                Book Chef's Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-16 px-6 bg-yellow-50"
        data-aos="fade-left"
        aria-label="Testimonials"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-yellow-600 tracking-wide">
            What Our Guests Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="italic text-gray-700 text-lg">
                "The ambiance and food at Grand Dine are absolutely incredible.
                A perfect place for special occasions and intimate dinners."
              </blockquote>
              <cite className="block mt-4 font-semibold text-yellow-500">
                — Sarah L.
              </cite>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
                alt="Happy diners at restaurant"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section
        id="reserve"
        className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 text-center relative"
        data-aos="fade-in"
        aria-label="Reservation"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-10 bg-white bg-opacity-90 rounded-2xl p-12 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-yellow-600 tracking-wide">
            Book Your Table
          </h3>
          <p className="mb-8 text-lg text-gray-700">
            Plan your next luxury experience with us. Reserve your table for an
            unforgettable dining journey.
          </p>
          <button
            onClick={() => setShowReservation(true)}
            className="px-10 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition shadow-lg"
          >
            Make a Reservation
          </button>
        </div>
      </section>

      <Footer />

      {showReservation && (
        <ReserveTable onClose={() => setShowReservation(false)} />
      )}
    </div>
  );
};

export default Home;
