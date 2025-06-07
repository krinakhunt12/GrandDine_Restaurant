import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const allMenuItems = [
  {
    id: 1,
    category: "Starters",
    name: "Bruschetta",
    description:
      "Grilled bread rubbed with garlic, topped with diced tomatoes, basil, and olive oil.",
    price: "$8",
    details: "Contains gluten and garlic. Perfect light starter for your meal.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Mains",
    name: "Grilled Salmon",
    description:
      "Fresh salmon grilled to perfection with a lemon butter sauce.",
    price: "$22",
    details:
      "Sustainably sourced Atlantic salmon, served with seasonal vegetables.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", // New salmon image
  },
  {
    id: 3,
    category: "Mains",
    name: "Ribeye Steak",
    description:
      "Juicy ribeye steak cooked medium-rare with garlic mashed potatoes.",
    price: "$35",
    details:
      "Grass-fed beef, cooked to your liking, served with creamy mashed potatoes.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Salads",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with creamy Caesar dressing, croutons, and parmesan.",
    price: "$12",
    details:
      "Contains dairy and gluten. Option to add grilled chicken or shrimp.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Pizza",
    name: "Margherita Pizza",
    description:
      "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil.",
    price: "$18",
    details:
      "Thin crust pizza baked in a wood-fired oven. Vegetarian-friendly.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Desserts",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: "$10",
    details: "Contains dairy, eggs, and gluten. Not suitable for vegans.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    category: "Drinks",
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade with a hint of mint.",
    price: "$6",
    details: "Non-alcoholic, vegan-friendly.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", // New lemonade image
  },
];

const categories = [
  "All",
  "Starters",
  "Mains",
  "Salads",
  "Pizza",
  "Desserts",
  "Drinks",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredMenuItems =
    activeCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <section
        id="menu"
        className="max-w-6xl mx-auto p-8 md:p-16 space-y-8 flex-grow"
        aria-label="Menu"
      >
        <h2
          className="text-5xl font-extrabold my-8 text-yellow-600 text-center"
          data-aos="fade-down"
        >
          Our Menu
        </h2>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-300"
              }`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          data-aos="fade-up"
        >
          {filteredMenuItems.map(
            ({ id, name, description, price, image, details }) => (
              <article
                key={id}
                className="bg-yellow-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-yellow-400"
                tabIndex={0}
                aria-label={`${name} - ${description} - Price ${price}`}
                onClick={() => toggleExpand(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(id);
                  }
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
                    {name}
                  </h3>
                  <p className="text-gray-700 mb-2">{description}</p>

                  {/* Show details only if expanded */}
                  {expandedItems.includes(id) && (
                    <p className="text-gray-600 italic mb-4">{details}</p>
                  )}

                  <div className="flex justify-between items-center">
                    <p className="text-yellow-700 font-bold text-xl">{price}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Added ${name} to favorites!`);
                      }}
                      className="px-4 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white font-semibold transition"
                      aria-label={`Add ${name} to favorites`}
                    >
                      ★ Favorite
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
