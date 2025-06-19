import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuDetail from "../components/MenuDetail"
import { allMenuItems, categories } from "../constants/menuData"

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const overlayRefs = useRef([]);
  const heroBowlRefs = useRef([]);

  // Scroll-based parallax animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerWidth < 768 ? scrollY * 0.01 : scrollY * 0.03;

      // Menu overlay animations
      overlayRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.transform = `translateY(${offset}px) translateX(-50%)`;
        }
      });

      // Hero bowl image animations
      heroBowlRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "The Perfect Patty",
      description:
        "Dive into our handpicked selection of vegetarian Indian delights, crafted with traditional spices and modern flair.",
      menu: [
        {
          name: "Paneer Tikka Burger",
          desc: "Grilled paneer, tandoori spices, mint mayo, lettuce",
          price: "₹199",
        },
        {
          name: "Aloo Tikki Burger",
          desc: "Crispy potato patty, tamarind chutney, onions",
          price: "₹149",
        },
        {
          name: "Masala Veggie Wrap",
          desc: "Mixed vegetables in spicy masala, rolled in paratha",
          price: "₹179",
        },
        {
          name: "Cheese Corn Delight",
          desc: "Cheesy corn patty, creamy sauce, fresh lettuce",
          price: "₹169",
        },
      ],
      imageLeft: true,
    },
    {
      title: "Indian Veg Delights",
      description:
        "Dive into the rich flavors of Indian vegetarian cuisine, crafted with love and traditional spices.",
      menu: [
        {
          name: "Chole Bhature",
          desc: "Spicy chickpeas served with fluffy fried bread",
          price: "₹120",
          best: true,
        },
        {
          name: "Pav Bhaji",
          desc: "Buttery mashed vegetables with soft buns",
          price: "₹110",
        },
        {
          name: "Veg Biryani",
          desc: "Aromatic rice with mixed vegetables and spices",
          price: "₹150",
        },
        {
          name: "Dhokla Platter",
          desc: "Steamed gram flour cakes with mustard seasoning",
          price: "₹90",
        },
      ],
      imageLeft: false,
    },
    {
      title: "Delight in Every Bite",
      description:
        "Taste the richness of Indian vegetarian cuisine, crafted with love and tradition.",
      menu: [
        {
          name: "Rajma Chawal",
          desc: "Red kidney beans in rich gravy with basmati rice",
          price: "₹130",
        },
        {
          name: "Kadai Paneer",
          desc: "Paneer cubes with bell peppers in spicy tomato masala",
          price: "₹180",
        },
        {
          name: "Baingan Bharta",
          desc: "Roasted eggplant mash cooked with spices",
          price: "₹120",
        },
        {
          name: "Mix Veg Curry",
          desc: "Assorted vegetables in aromatic Indian gravy",
          price: "₹140",
        },
      ],
      imageLeft: true,
    },
    {
      title: "Authentic North Flavors",
      description:
        "Experience the warmth of traditional spices and recipes passed through generations.",
      menu: [
        {
          name: "Chole Bhature",
          desc: "Spiced chickpeas served with deep-fried bread",
          price: "₹150",
        },
        {
          name: "Palak Paneer",
          desc: "Creamy spinach with soft paneer cubes",
          price: "₹170",
        },
        {
          name: "Dal Makhani",
          desc: "Slow-cooked black lentils with butter & cream",
          price: "₹160",
        },
        {
          name: "Aloo Gobi",
          desc: "Potato and cauliflower sautéed with spices",
          price: "₹130",
        },
      ],
      imageLeft: false,
    },
  ];

  return (
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden overflow-y-auto min-h-screen flex flex-col scrollbar-hide">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-dark-navy text-white py-40 md:py-52 px-4 text-center overflow-visible min-h-[90vh] mt-20">
        <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-4">
          Delicious and Nutritious
        </h4>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Refill Your Tank
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
          src="/About/bowl2.png"
          alt="Tomatoes"
          ref={(el) => (heroBowlRefs.current[0] = el)}
          className="absolute top-0 right-0 w-48 md:w-64 rotate-[15deg] z-10 pointer-events-none transition-transform duration-200 ease-out"
        />

        <img
          src="/About/bowl1.png"
          alt="Ice Cream"
          ref={(el) => (heroBowlRefs.current[1] = el)}
          className="absolute bottom-10 left-0 w-40 md:w-56 z-10 pointer-events-none transition-transform duration-200 ease-out"
        />

        <img
          src="/About/bowl3.png"
          alt="Dish"
          ref={(el) => (heroBowlRefs.current[2] = el)}
          className="absolute bottom-10 right-0 w-40 md:w-56 z-20 pointer-events-none transition-transform duration-200 ease-out"
        />

        <img
          src="/About/about-leaf-left.png"
          alt="Side Leaf Left"
          className="absolute top-[35%] left-[-40px] w-36 md:w-48 rotate-[8deg] opacity-70 z-0 pointer-events-none"
        />
      </section>

      {/* Menu Sections */}
      {sections.map((section, index) => (
        <section key={index} className="bg-dark-navy text-white py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
            {section.imageLeft && (
              <div className="w-full md:w-1/2 relative flex justify-center">
                <img
                  src="/About/Mphoto2.jpg"
                  alt="Main Dish"
                  className="w-80 md:w-84 h-60 md:h-120 object-cover"
                />
                <img
                  src="/About/Mphoto1.jpg"
                  alt="Overlay Dish"
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="w-80 md:w-84 h-60 md:h-120 object-cover absolute top-1/3 left-3/5 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-[40%] md:-translate-y-[60%]"
                  style={{
                    transition: "transform 0.2s ease-out",
                    willChange: "transform",
                  }}
                />
              </div>
            )}

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-left">
                {section.title}
              </h2>
              <p className="text-gray-300 mb-8 max-w-md text-left">
                {section.description}
              </p>
              <ul className="space-y-6 text-yellow-100">
                {section.menu.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex justify-between items-start gap-4 text-left ${
                      item.best
                        ? "bg-secondary/10 border border-secondary p-4 rounded-md"
                        : ""
                    }`}
                  >
                    <div className="flex-1">
                      {item.best && (
                        <p className="text-sm font-semibold mb-1 text-white">
                          Best Seller
                        </p>
                      )}
                      <h4 className="text-lg font-semibold text-secondary">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-semibold text-lg whitespace-nowrap">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {!section.imageLeft && (
              <div className="w-full md:w-1/2 relative flex justify-center">
                <img
                  src="/About/Mphoto2.jpg"
                  alt="Main Dish"
                  className="w-80 md:w-84 h-60 md:h-120 object-cover"
                />
                <img
                  src="/About/Mphoto1.jpg"
                  alt="Overlay Dish"
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="w-80 md:w-84 h-60 md:h-120 object-cover absolute top-1/2 left-3/5 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-[40%] md:-translate-y-[60%]"
                  style={{
                    transition: "transform 0.2s ease-out",
                    willChange: "transform",
                  }}
                />
              </div>
            )}
          </div>
        </section>
      ))}

      {selectedItem && (
        <MenuDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <Footer />
    </div>
  );
};

export default Menu;
