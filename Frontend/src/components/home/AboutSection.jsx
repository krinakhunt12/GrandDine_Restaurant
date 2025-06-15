const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-dark-navy" data-aos="fade-right">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex items-center justify-center">
          <img
            src="/home/restaurant-about.jpg"
            alt="Elegant restaurant seating area"
            className="w-80 h-80 object-cover rounded-xl shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 heading-secondary tracking-widest uppercase drop-shadow-md">
            Your Special Occasion Destination
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic border-l-4 border-[#D4A857] pl-4">
            “Grand Dine is where taste meets tradition, and every flavor is a celebration.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
