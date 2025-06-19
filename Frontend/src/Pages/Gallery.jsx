import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

            {/* Hero Banner */}
      <div className="relative bg-dark-navy text-white py-32 overflow-hidden">
        {/* Leaf Images */}
        <img
          src="/About/about-leaf-left.png"
          alt="Leaf left"
          className="absolute left-0 top-0 w-64 md:w-80 lg:w-96 opacity-40 pointer-events-none"
          style={{ transform: "translateY(-10%)" }}
        />
        <img
          src="/About/about-leaf-right.png"
          alt="Leaf right"
          className="absolute right-[-50px] top-0 w-64 md:w-130 lg:w-130 opacity-40 rotate-180 pointer-events-none"
          style={{ transform: "translateY(-10%)" }}
        />

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-widest text-sm text-secondary mb-3">
            More flavor for less
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Good food and <br /> Great vibes
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-8 md:p-16 flex-grow">
        <h2
          className="text-5xl font-extrabold my-8 text-yellow-600 text-center"
          data-aos="fade-down"
        >
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map(({ id, src, alt }, index) => (
            <div
              key={id}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
