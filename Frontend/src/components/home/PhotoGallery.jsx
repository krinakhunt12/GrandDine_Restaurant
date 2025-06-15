import React from "react";

const images = [
  "/home/gallery/img1.jpg",
  "/home/gallery/img2.jpg",
  "/home/gallery/img3.jpg",
  "/home/gallery/img4.jpg",
  "/home/gallery/img5.jpg",
  "/home/gallery/img6.jpg",
];

const PhotoGallery = () => {
  return (
    <section className="py-16 px-6 bg-dark-navy" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-white uppercase tracking-widest text-sm mb-1">Follow Along</p>
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
  );
};

export default PhotoGallery;
