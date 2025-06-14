// Menu.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MenuDetail from "../MenuDetail";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import {allMenuItems, categories} from "../../constants/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const filteredMenuItems =
    activeCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden overflow-y-auto min-h-screen flex flex-col scrollbar-hide">
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
          data-aos-delay="200"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredMenuItems.map(({ id, name, description, price, image }, index) => (
            <article
              key={id}
              className="bg-yellow-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-yellow-400 flex flex-col"
              tabIndex={0}
              aria-label={`${name} - ${description} - Price ${price}`}
              onClick={() => setSelectedItem(allMenuItems.find((item) => item.id === id))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(allMenuItems.find((item) => item.id === id));
                }
              }}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex-grow"></div>

                {/* Footer with Price, Heart, and Cart */}
                <div className="flex justify-between items-center">
                  <p className="text-yellow-700 font-bold text-xl">{price}</p>
                  <div className="flex items-center">
                    <FaHeart
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(id);
                      }}
                      className={`text-xl cursor-pointer mx-3 hover:scale-110 transition-transform ${
                        wishlist.includes(id) ? "text-red-500" : "text-gray-300"
                      }`}
                      title={wishlist.includes(id) ? "Remove from wishlist" : "Add to wishlist"}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Added ${name} to cart!`);
                      }}
                      className="px-4 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white font-semibold transition flex flex-row items-center"
                      aria-label={`Add ${name} to cart`}
                    >
                      <FaShoppingCart className="mr-2" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedItem && <MenuDetail item={selectedItem} onClose={() => setSelectedItem(null)} />}

      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;