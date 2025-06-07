import React from "react";

const MenuDetail = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="menu-detail-title"
      aria-describedby="menu-detail-description"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] px-6 pt-6 relative overflow-y-auto transform transition-transform duration-300 ease-in-out hover:scale-[1.02] scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-yellow-600 hover:text-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 rounded-full text-3xl font-bold leading-none transition-colors shadow-lg bg-white p-2"
          aria-label="Close menu detail"
        >
          &times;
        </button>

       <img
  src={item.image}
  alt={item.name}
  className="w-full h-72 object-cover rounded-2xl mb-6 shadow-lg mt-12"
  loading="lazy"
/>

        <h3
          id="menu-detail-title"
          className="text-4xl font-extrabold text-yellow-600 mb-2 tracking-wide"
        >
          {item.name}
        </h3>

        <p className="text-sm uppercase text-yellow-400 font-semibold mb-4 tracking-wide">
          Category: {item.category}
        </p>

        <p
          id="menu-detail-description"
          className="mb-6 text-gray-700 text-lg leading-relaxed"
        >
          {item.description}
        </p>

        <p className="italic text-gray-500 mb-6 text-sm leading-relaxed">
          {item.details}
        </p>

        <hr className="my-4 border-yellow-300" />

        <div className="mb-6">
          <h4 className="text-yellow-600 font-semibold mb-2">Nutritional Info</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Calories: 350 kcal</li>
            <li>Protein: 20g</li>
            <li>Carbs: 25g</li>
            <li>Fat: 15g</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-yellow-600 font-semibold mb-2">Allergens</h4>
          <p className="text-red-600 italic text-sm">
            {item.details.includes("Contains") ? item.details : "No known allergens."}
          </p>
        </div>

        <div className="flex justify-between items-center sticky bottom-0 bg-white py-4">
          <p className="text-yellow-700 font-extrabold text-2xl tracking-wider">
            {item.price}
          </p>
          <button
            onClick={() => alert(`Added ${item.name} to cart!`)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label={`Add ${item.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MenuDetail;
