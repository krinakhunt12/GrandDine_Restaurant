// src/components/Home/TestimonialSection.jsx
const TestimonialSection = () => {
  return (
    <section className="py-10 px-6 dark-navy" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-serif font-bold mb-12 text-secondary tracking-wider">
          What Our Guests Say
        </h3>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Testimonial Text */}
          <div data-aos="fade-right" data-aos-delay="100">
            <blockquote className="italic text-white text-xl leading-relaxed mb-4">
              "The ambiance and food at{" "}
              <span className="text-secondary font-semibold">Grand Dine</span>{" "}
              are absolutely incredible. A perfect place for special occasions
              and intimate dinners."
            </blockquote>
            <cite className="block mt-6 font-semibold text-secondary text-lg">
              — Sarah L.
            </cite>
          </div>

          {/* Right - Beautiful Image */}
          <div
            className="relative group"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Happy diners"
              className="w-full h-72 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-3 right-3 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
              Verified Guest
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
