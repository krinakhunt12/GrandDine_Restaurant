import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MenuDetail from "../MenuDetail";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { allMenuItems, categories } from "../../constants/menuData";

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
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden overflow-y-auto min-h-screen flex flex-col scrollbar-hide">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-dark-navy text-white py-40 md:py-52 px-4 text-center overflow-hidden min-h-[90vh] mt-20"
        data-aos="fade-in"
      >
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

        {/* Decorative Images */}
        <img
          src="/About/about-leaf-left.png"
          alt="Leaf Left"
          className="absolute top-0 left-0 w-48 md:w-64 rotate-[-12deg] -z-10"
        />
        <img
          src="/About/about-leaf-right.png"
          alt="Leaf Right"
          className="absolute top-0 right-0 w-52 md:w-130 rotate-[40deg] opacity-70 -z-20"
          style={{ transform: "translate(30%, -10%)" }}
        />
        <img
          src="/About/bowl2.png"
          alt="Tomatoes"
          className="absolute top-0 right-0 w-48 md:w-64 rotate-[15deg] z-10"
        />
        <img
          src="/About/bowl1.png"
          alt="Ice Cream"
          className="absolute bottom-10 left-0 w-40 md:w-56 z-10"
        />
        <img
          src="/About/bowl3.png"
          alt="Dish"
          className="absolute bottom-10 right-0 w-40 md:w-56 z-20"
        />
        <img
          src="/About/about-leaf-left.png"
          alt="Side Leaf Left"
          className="absolute top-[35%] left-[-40px] w-36 md:w-48 rotate-[8deg] opacity-70 -z-10"
        />
      </section>

      {/* Section 2 - The Perfect Patty */}
      <section className="bg-dark-navy text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src="/About/Mphoto2.jpg"
              alt="Main Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover"
            />
            <img
              src="/About/Mphoto1.jpg"
              alt="Overlay Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-[40%] md:-translate-y-[60%]"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">The Perfect Patty</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Effortless comfortable full leather lining. Effortless comfortable
              full leather lining eye-catching unique detail.
            </p>
            <ul className="space-y-6 text-yellow-100">
              {[
                {
                  name: "Double Cheeseburger",
                  desc: "Two beef patties, cheddar cheese, lettuce, tomato",
                  price: "$12.99",
                },
                {
                  name: "Chicken Deluxe",
                  desc: "Grilled chicken, pickles, spicy mayo",
                  price: "$10.99",
                },
                {
                  name: "Veggie Burger",
                  desc: "Grilled mushroom, veggie patty, avocado, tomato",
                  price: "$9.49",
                },
                {
                  name: "Bacon Beast",
                  desc: "Triple bacon, smoky BBQ sauce, cheddar cheese",
                  price: "$13.99",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start gap-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-secondary">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <p className="text-secondary font-semibold text-lg">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 - Meet Your Meat */}
      <section className="bg-dark-navy text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Meet your meat</h2>
            <p className="text-gray-300 max-w-md mb-8">
              Effortless comfortable full leather lining. Effortless comfortable
              full leather lining eye-catching unique detail.
            </p>
            <ul className="space-y-4 text-secondary">
              {[
                {
                  name: "BBQ Ribs",
                  desc: "Smoked ribs, BBQ sauce, herbs",
                  price: "$14.99",
                  best: true,
                },
                {
                  name: "Classic Steak",
                  desc: "Grilled sirloin, rosemary butter",
                  price: "$18.99",
                },
                {
                  name: "Lamb Chops",
                  desc: "Charred lamb with garlic glaze",
                  price: "$17.49",
                },
                {
                  name: "Spicy Sausage Platter",
                  desc: "Hot links, mustard sauce, caramelized onions",
                  price: "$12.49",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-md ${
                    item.best ? "bg-secondary/10 border border-secondary" : ""
                  }`}
                >
                  {item.best && (
                    <p className="text-sm font-semibold mb-1 text-white">
                      Best Seller
                    </p>
                  )}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-semibold text-lg">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src="/About/Mphoto2.jpg"
              alt="Main Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover"
            />
            <img
              src="/About/Mphoto1.jpg"
              alt="Overlay Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-[40%] md:-translate-y-[60%]"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - The Perfect Patty */}
      <section className="bg-dark-navy text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src="/About/Mphoto2.jpg"
              alt="Main Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover"
            />
            <img
              src="/About/Mphoto1.jpg"
              alt="Overlay Dish"
              className="w-80 md:w-84 h-60 md:h-120 object-cover absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-[40%] md:-translate-y-[60%]"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-4">Delight in every bite</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Effortless comfortable full leather lining. Effortless comfortable
              full leather lining eye-catching unique detail
            </p>
            <ul className="space-y-6 text-yellow-100">
              {[
                {
                  name: "Roast Pork (4 Sticks)",
                  desc: "Pork / Veggies / Shoyu",
                  price: "$15.5",
                },
                {
                  name: "Salted Fried Chicken",
                  desc: "Chicken / Olive Oil / Salt",
                  price: "$20.0",
                },
                {
                  name: "Crab With Curry Sources",
                  desc: "Crab / Potatoes / Rice",
                  price: "$24.5",
                },
                {
                  name: "Imported Salmon Steak",
                  desc: "Salmon / Veggies / Oil",
                  price: "$13.99",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start gap-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-secondary">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <p className="text-secondary font-semibold text-lg">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
                  ? "bg-secondary text-white shadow-lg"
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
          {filteredMenuItems.map(
            ({ id, name, description, price, image }, index) => (
              <article
                key={id}
                className="bg-yellow-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-secondary flex flex-col"
                tabIndex={0}
                aria-label={`${name} - ${description} - Price ${price}`}
                onClick={() =>
                  setSelectedItem(allMenuItems.find((item) => item.id === id))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(
                      allMenuItems.find((item) => item.id === id)
                    );
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
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
                    {name}
                  </h3>
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
                          wishlist.includes(id)
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                        title={
                          wishlist.includes(id)
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Added ${name} to cart!`);
                        }}
                        className="px-4 py-1 bg-secondary rounded hover:bg-secondary text-white font-semibold transition flex flex-row items-center"
                        aria-label={`Add ${name} to cart`}
                      >
                        <FaShoppingCart className="mr-2" />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {selectedItem && (
        <MenuDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <div data-aos="fade-up">
        <Footer />
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
