import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-dark-navy text-gray-100 overflow-x-hidden">
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

      <div className="py-48">
        <div className="relative w-full flex justify-center z-10">
          <img
            src="/home/menu-leaf.png"
            alt="Leaf"
            className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] z-0 opacity-70"
          />
          <img
            src="/home/bowl.jpg"
            alt="Chef Recommended Dish"
            className="w-100 h-100 object-cover rounded-full shadow-2xl relative z-10 transition-transform duration-200"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.05, 10)}px)`,
            }}
          />
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 space-y-24 text-gray-300"
        aria-label="About Grand Dine"
      >
        {/* Section Title */}
        <h2
          className="text-5xl md:text-6xl font-extrabold text-secondary text-center tracking-widest uppercase"
          data-aos="fade-down"
        >
          About Grand Dine
        </h2>

        {/* First Row */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Elegant dining setup"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
          <div className="space-y-6 text-base md:text-lg leading-relaxed tracking-normal">
            <p>
              At{" "}
              <strong className="text-secondary font-semibold">
                Grand Dine
              </strong>
              , we believe dining is an experience, not just a meal. Nestled in
              the heart of the city, our restaurant offers a luxurious ambiance
              paired with exceptional culinary craftsmanship.
            </p>
            <p>
              Our chefs blend traditional techniques with modern flair, sourcing
              fresh local and international ingredients to craft seasonal menus
              that delight every palate.
            </p>
            <p>
              Whether you're celebrating or simply enjoying a night out, our
              team ensures every moment is unforgettable.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-left"
        >
          <div className="space-y-6 text-base md:text-lg leading-relaxed tracking-normal">
            <h3 className="text-3xl font-bold text-secondary tracking-wide uppercase">
              Our Story & Philosophy
            </h3>
            <p>
              Grand Dine was born from a passion to fuse fine dining with warmth
              and hospitality. Our philosophy is rooted in elegance, quality,
              and creating lasting memories.
            </p>
            <p>
              We champion sustainability by supporting local farmers and
              sourcing responsibly. From farm to table, we ensure authenticity
              in every bite.
            </p>
            <p>
              We invite you to explore new tastes, enjoy timeless classics, and
              become part of our story.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Chef cooking gourmet dish"
            className="rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
        </div>

        {/* Team Section */}
        <div
          data-aos="fade-up"
          className="text-center max-w-4xl mx-auto space-y-12"
        >
          <h3 className="text-3xl font-bold text-secondary tracking-wide uppercase">
            Meet Our Team
          </h3>
          <p className="text-base md:text-lg text-gray-400 tracking-normal">
            Our talented chefs and attentive staff bring passion and years of
            experience to every dish and service. Here's the team behind the
            magic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: "Chef Maria Lopez",
                role: "Executive Chef",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Maria leads our kitchen with creativity and precision, specializing in Mediterranean and fusion cuisine.",
              },
              {
                name: "James Carter",
                role: "Head Sommelier",
                img: "https://randomuser.me/api/portraits/men/46.jpg",
                bio: "James curates our extensive wine list and pairs each dish with the perfect glass.",
              },
              {
                name: "Lila Chen",
                role: "Restaurant Manager",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
                bio: "Lila ensures every guest feels welcomed and valued, delivering impeccable service.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                tabIndex={0}
                role="group"
                aria-label={`${person.name}, ${person.role}`}
                data-aos="zoom-in"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover mb-4 shadow-md"
                />
                <h4 className="text-lg font-semibold text-secondary text-center tracking-widest uppercase">
                  {person.name}
                </h4>
                <p className="text-sm font-medium text-secondary tracking-wide uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 tracking-normal">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
