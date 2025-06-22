import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReserveTable from "../components/ReserveTable";
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant dining setup",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Gourmet dish close-up",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    alt: "Wine glasses on table",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant interior with candles",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555992336-cbf8a32e3a94?auto=format&fit=crop&w=800&q=80",
    alt: "Chef preparing food",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Plated gourmet dessert",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    alt: "Modern restaurant interior",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=format&fit=crop&w=800&q=80",
    alt: "Open-view restaurant seating",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy lounge area inside restaurant",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1619563/pexels-photo-1619563.jpeg?auto=format&fit=crop&w=800&q=80",
    alt: "Industrial style restaurant interior",
  },
];

const images = [
  "/home/gallery/img1.jpg",
  "/home/gallery/img2.jpg",
  "/home/gallery/img3.jpg",
  "/home/gallery/img4.jpg",
  "/home/gallery/img5.jpg",
  "/home/gallery/img6.jpg",
];

const Reservation = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleReservationClick = () => {
    setShowForm(true);
  };

  return (
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}

      <section className="relative bg-dark-navy text-white py-40 md:py-52 px-4 text-center overflow-visible min-h-[90vh] mt-20">
        <h4 className="text-sm tracking-widest text-secondary uppercase mb-4">
          More flavor for less
        </h4>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Reservation
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-300 leading-relaxed">
          When the going gets tough, the tough get grilling. Bringing heat to
          your meat. No one can compete with our meat.
        </p>

        {/* Decorative Images (animated on scroll) */}
        <img
          src="/About/about-leaf-left.png"
          alt="Leaf Left"
          className="absolute top-0 left-0 w-48 md:w-64 rotate-[-12deg] z-0 pointer-events-none"
        />

        <img
          src="/About/about-leaf-right.png"
          alt="Leaf Right"
          className="absolute top-0 right-0 w-52 md:w-130 rotate-[40deg] opacity-70 z-0 pointer-events-none"
          style={{ transform: "translate(30%, -10%)" }}
        />

        <img
          src="/About/about-leaf-left.png"
          alt="Side Leaf Left"
          className="absolute top-[35%] left-[-40px] w-36 md:w-48 rotate-[8deg] opacity-70 z-0 pointer-events-none"
        />
      </section>

      {/* Reservation Info Section */}
      <section className="bg-dark-navy text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6 text-left">
              "Cooking is an art, but all art requires knowing something about
              the techniques and materials."
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white text-left text-lg mb-1">
                  Reserve by Phone
                </h4>
                <p className="mb-2 text-left">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </p>
                <p className="text-left">
                  Please call us at{" "}
                  <span className="text-secondary font-medium">
                    1.800.456.6756
                  </span>{" "}
                  between 10am–6pm, Monday to Friday.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-left text-lg mb-1">
                  Event & Group Booking
                </h4>
                <p className="text-left">
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi. Sed ut perspiciatis unde
                  omnis iste natus error sit.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-secondary p-8 rounded-lg bg-dark-navy">
            <div className="space-y-8">
              {/* Lunch & Dinner Time Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lunch Time */}
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Lunch Time
                  </h4>
                  <p className="text-gray-300">Monday to Sunday</p>
                  <p className="text-gray-300">10:30am - 3:00pm</p>
                </div>

                {/* Dinner Time */}
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Dinner Time
                  </h4>
                  <p className="text-gray-300">Monday to Sunday</p>
                  <p className="text-gray-300">5:30pm - 11:00pm</p>
                </div>
              </div>

              {/* Location (Own Row) */}
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  Location
                </h4>
                <p className="text-gray-300">
                  732/21 Second Street, Manchester Kingston <br />
                  United Kingdom
                </p>
              </div>

              {/* Button */}
              <div>
                <button
                  className="bg-secondary hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded transition duration-300"
                  onClick={handleReservationClick}
                >
                  Make an Online Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Showcase Photo */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1950&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover object-center"
          data-aos="zoom-in-up"
        />
      </section>

      <section className="py-24 px-6 bg-dark-navy" data-aos="fade-right">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex items-center justify-center">
            <img
              src="/R1.jpg"
              alt="Elegant restaurant seating area"
              className="w-100 h-120 object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 heading-secondary tracking-widest uppercase drop-shadow-md">
              Your special occasion destination
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic border-l-4 border-[#D4A857] pl-4">
              "Savor the elegance of Grand Dine — a premium blend of taste and
              texture, made for those who crave the extraordinary."
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-dark-navy text-white overflow-hidden">
        {/* Background Image and Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-cover bg-right">
          <div className="max-w-xl text-left mx-48 z-10">
            <p className="text-sm tracking-widest uppercase text-secondary mb-4">
              We saved you a seat
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Discover
              <br />
              About Us
            </h2>
            <p className="text-lg text-white/90 max-w-md mb-8">
              When the going gets tough, the tough get grilling. Bringing heat
              to your meat. No one can compete with our meat.
            </p>
            <button className="border border-secondary rounded-lg text-secondary px-6 py-2 uppercase tracking-wide hover:bg-secondary hover:text-dark-navy transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Left Leaf */}
        <img
          src="/About/about-leaf-left.png"
          alt="Leaf Left"
          className="absolute bottom-[-20px] left-[-20px] w-40 md:w-56 rotate-[0deg] z-0 pointer-events-none"
        />

        {/* Right Leaf */}
        <img
          src="/About/about-leaf-right.png"
          alt="Leaf Right"
          className="absolute bottom-[-10px] right-[-120px] w-56 md:w-120 rotate-[-20deg] z-0 pointer-events-none"
        />
      </section>

      <section
        className="py-16 px-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-white uppercase tracking-widest text-sm mb-1">
            Follow Along
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
            @Grand Dine
          </h2>
          <div className="mt-2 w-20 h-[2px] bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />

      {showForm && <ReserveTable onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Reservation;
