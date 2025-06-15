import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "../Navbar";

const Cart = () => {
  const handleNavigateBack = () => {
    console.log("Navigate back");
    // In real app, this would use router navigation
  };

  const handleNavigateToMenu = () => {
    console.log("Navigate to menu");
    // In real app, this would use router navigation
  };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Truffle Risotto",
      price: 480,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
      description: "Creamy arborio rice with black truffle shavings and parmesan",
      category: "Signature Dishes"
    },
    {
      id: 2,
      name: "Wagyu Beef Tenderloin",
      price: 1200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      description: "Premium wagyu beef with red wine reduction and seasonal vegetables",
      category: "Premium Cuts"
    },
    {
      id: 3,
      name: "Lobster Bisque",
      price: 380,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      description: "Rich and creamy soup with fresh lobster meat and cognac",
      category: "Soups & Appetizers"
    },
    {
      id: 4,
      name: "Pan-Seared Scallops",
      price: 650,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1559847844-d050292db2d4?w=400&h=300&fit=crop",
      description: "Perfectly seared scallops with cauliflower purée and pancetta",
      category: "Seafood Specialties"
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      price: 280,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      description: "Light and airy chocolate soufflé with vanilla bean ice cream",
      category: "Desserts"
    },
    {
      id: 6,
      name: "Dom Pérignon 2012",
      price: 2500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      description: "Vintage champagne with complex flavors and fine bubbles",
      category: "Premium Wines"
    }
  ]);

  const [removingItems, setRemovingItems] = useState(new Set());

  const handleRemoveItem = (id) => {
    setRemovingItems(prev => new Set([...prev, id]));
    setTimeout(() => {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      setRemovingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Header Section */}
        <div className="pt-28 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <ShoppingBag className="w-10 h-10 text-yellow-400" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Your Cart
                  </h1>
                  <p className="text-gray-400 mt-1">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
              </div>
              <button
                onClick={handleNavigateBack}
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-yellow-400 font-medium transition-colors">Back</span>
              </button>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="max-w-2xl mx-auto px-6 text-center py-16">
            <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
              <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">Discover our exquisite culinary creations!</p>
              <button
                onClick={handleNavigateToMenu}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Menu
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:border-yellow-400/50 transition-all duration-300 overflow-hidden transform ${
                      removingItems.has(item.id) ? 'scale-95 opacity-50' : 'hover:scale-102'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-6">
                        {/* Item Image */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                          <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-semibold">
                            {item.category}
                          </div>
                        </div>

                        {/* Item Details */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <span className="text-2xl font-bold text-yellow-400">₹{item.price}</span>
                              <span className="text-gray-500 text-sm">per item</span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center bg-gray-700 rounded-full border border-gray-600">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="p-2 hover:bg-gray-600 rounded-full transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4 text-gray-300" />
                            </button>
                            <span className="px-4 py-2 font-semibold text-white min-w-12 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="p-2 hover:bg-gray-600 rounded-full transition-colors"
                            >
                              <Plus className="w-4 h-4 text-gray-300" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total & Remove */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white mb-2">
                            ₹{item.price * item.quantity}
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="group p-2 hover:bg-red-900/30 rounded-full transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-5 h-5 text-gray-500 group-hover:text-red-400 transition-colors" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4">
                      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-4 mb-6">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-sm border-b border-gray-700 pb-2">
                            <span className="text-gray-400">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="font-semibold text-white">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-700 pt-4 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">Subtotal</span>
                          <span className="font-semibold text-white">₹{totalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">Service Charge</span>
                          <span className="font-semibold text-white">₹{Math.round(totalPrice * 0.1)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">Taxes (18%)</span>
                          <span className="font-semibold text-white">₹{Math.round(totalPrice * 0.18)}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold border-t border-gray-700 pt-4">
                          <span className="text-white">Total</span>
                          <span className="text-yellow-400">₹{Math.round(totalPrice * 1.28)}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                        <div className="flex items-center justify-center space-x-2">
                          <span>Reserve & Pay</span>
                          <ArrowLeft className="w-5 h-5 rotate-180" />
                        </div>
                      </button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        🔒 Secure payment with 256-bit SSL encryption
                      </p>
                    </div>
                  </div>

                  {/* Promo Section */}
                  <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-yellow-400/30 rounded-2xl p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-yellow-400 font-semibold">✨ Premium Dining Experience</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Complimentary valet parking and welcome drink included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;