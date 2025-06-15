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
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden">
      <Navbar />

      <div className="relative bg-dark-navy text-white py-24 overflow-hidden">
  {/* Left leaf image */}
  <img
    src="/About/about-leaf-left.png" // adjust path if needed
    alt="Leaf left"
    className="absolute left-0 top-0 w-64 md:w-80 lg:w-96 opacity-60 pointer-events-none"
    style={{ transform: 'translateY(-20%)' }}
  />

  {/* Right leaf image */}
  <img
    src="/About/about-leaf-right.png" // reuse same image or another
    alt="Leaf right"
    className="absolute right-0 top-0 w-64 md:w-80 lg:w-96 opacity-60 rotate-180 pointer-events-none"
    style={{ transform: 'translateY(-20%)' }}
  />

  <div className="relative z-10 text-center px-4">
    <p className="uppercase tracking-widest text-sm text-gray-300 mb-2">
      More flavor for less
    </p>
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Good food and <br /> Great vibes
    </h1>
  </div>
</div>


      <section
        id="about"
        className="max-w-6xl mx-auto p-8 md:p-16 space-y-12"
        aria-label="About Grand Dine"
      >
        <h2
          className="text-5xl font-extrabold my-8 text-yellow-600 text-center"
          data-aos="fade-down"
        >
          About Grand Dine
        </h2>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-right"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Elegant dining setup"
              className="rounded-2xl shadow-lg w-full object-cover h-96"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              At <strong>Grand Dine</strong>, we believe dining is an experience,
              not just a meal. Nestled in the heart of the city, our restaurant
              offers a luxurious ambiance paired with a commitment to exceptional
              culinary craftsmanship.
            </p>
            <p>
              Our chefs expertly blend traditional techniques with modern flair,
              sourcing the freshest local and international ingredients to create
              seasonal menus that delight every palate.
            </p>
            <p>
              Whether you're celebrating a special occasion or seeking an intimate
              dinner, our dedicated staff ensures every moment is memorable.
            </p>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-left"
        >
          <div className="space-y-6 text-lg text-gray-700">
            <h3 className="text-3xl font-semibold text-yellow-500">
              Our Story & Philosophy
            </h3>
            <p>
              Grand Dine was born from a passion to combine fine dining with an
              inviting atmosphere. Our philosophy is simple: elegance, quality,
              and hospitality are the pillars of every dish and service we offer.
            </p>
            <p>
              We pride ourselves on sustainable practices, supporting local farmers
              and producers to deliver freshness from farm to table.
            </p>
            <p>
              Each visit is curated to be unique — we invite you to explore new
              tastes, enjoy timeless classics, and create lasting memories.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
              alt="Chef cooking gourmet dish"
              className="rounded-2xl shadow-lg w-full object-cover h-96"
            />
          </div>
        </div>

        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-semibold text-yellow-500">
            Meet Our Team
          </h3>
          <p className="text-lg text-gray-700">
            Our talented chefs and attentive staff bring years of experience and passion
            to every plate and interaction. Dedicated to excellence, they make your
            experience truly exceptional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
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
                className="bg-yellow-50 rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
                tabIndex={0}
                role="group"
                aria-label={`${person.name}, ${person.role}`}
                data-aos="zoom-in"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4 shadow-lg"
                />
                <h4 className="text-xl font-semibold text-yellow-600 text-center">
                  {person.name}
                </h4>
                <p className="text-center font-medium text-yellow-500">{person.role}</p>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">{person.bio}</p>
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
