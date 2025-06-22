import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-dark-navy"
      data-aos="fade-right"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/home/restaurant-about.jpg"
            alt="Elegant restaurant seating area"
            className="w-80 h-80 object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 heading-secondary tracking-widest uppercase drop-shadow-md text-white">
            Your Special Occasion Destination
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed italic border-l-4 border-[#D4A857] pl-4">
            “Grand Dine is where taste meets tradition, and every flavor is a celebration.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
