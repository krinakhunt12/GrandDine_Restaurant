import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-16 flex-grow">
        <h2
          className="text-5xl font-extrabold my-8 text-yellow-600 text-center"
          data-aos="fade-down"
        >
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map(({ id, src, alt }) => (
            <div
              key={id}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
              data-aos="fade-up"
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
