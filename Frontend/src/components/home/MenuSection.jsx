import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Paneer Butter Masala",
    desc: "Soft paneer cubes in rich tomato-butter gravy",
    price: "₹320",
    img: "/home/Smenu/PBM.jpg",
  },
  {
    title: "Vegetable Biryani",
    desc: "Basmati rice cooked with spiced vegetables",
    price: "₹280",
    img: "/home/Smenu/VegB.jpg",
  },
  {
    title: "Chole Bhature",
    desc: "Spiced chickpeas served with fluffy bhature",
    price: "₹250",
    img: "/home/Smenu/CB.jpg",
  },
];

const MenuSection = ({ setShowReservation }) => {
  return (
    <section
      id="our-menus"
      className="relative py-20 px-4 sm:px-6 md:px-8 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-wide uppercase text-gray-400 mb-2 sm:mb-3">
          Taste the finest
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-8 sm:mb-10">
          Our Signature Menus
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition flex flex-col h-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
              <div className="p-4 sm:p-5 flex flex-col h-full">
                <h4 className="text-lg sm:text-xl font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base mb-2">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <p className="text-secondary font-semibold text-base sm:text-lg">
                    {item.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={() => setShowReservation(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-10 sm:mt-12 inline-block px-8 sm:px-10 py-3 border border-secondary text-secondary font-medium rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          View Full Menu
        </motion.button>
      </div>
    </section>
  );
};

export default MenuSection;
