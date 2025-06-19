
//    <section
//   id="menu"
//   className="bg-dark-navy text-white max-w-6xl mx-auto p-8 md:p-16 space-y-8 flex-grow"
//   aria-label="Menu"
// >
//   <h2
//     className="text-5xl font-extrabold my-8 text-yellow-500 text-center"
//     data-aos="fade-down"
//   >
//     Our Menu
//   </h2>

//   {/* Category Filters */}
//   <div
//     className="flex flex-wrap justify-center gap-4 mb-12"
//     data-aos="fade-up"
//     data-aos-delay="200"
//   >
//     {categories.map((cat) => (
//       <button
//         key={cat}
//         className={`px-4 py-2 rounded-full font-semibold transition ${
//           activeCategory === cat
//             ? "bg-secondary text-white shadow-lg"
//             : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
//         }`}
//         onClick={() => setActiveCategory(cat)}
//         aria-pressed={activeCategory === cat}
//       >
//         {cat}
//       </button>
//     ))}
//   </div>

//   {/* Menu Items Grid */}
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//     {filteredMenuItems.map(({ id, name, description, price, image }, index) => (
//       <article
//         key={id}
//         className="bg-navy-800 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer focus:outline-secondary flex flex-col"
//         tabIndex={0}
//         aria-label={`${name} - ${description} - Price ${price}`}
//         onClick={() =>
//           setSelectedItem(allMenuItems.find((item) => item.id === id))
//         }
//         onKeyDown={(e) => {
//           if (e.key === "Enter" || e.key === " ") {
//             e.preventDefault();
//             setSelectedItem(allMenuItems.find((item) => item.id === id));
//           }
//         }}
//         data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
//         data-aos-delay={`${index * 100}`}
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-64 object-cover"
//           loading="lazy"
//         />
//         <div className="p-6 flex flex-col flex-grow">
//           <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
//             {name}
//           </h3>
//           <p className="text-gray-300 mb-4">{description}</p>
//           <div className="flex-grow" />

//           {/* Footer with Price, Heart, and Cart */}
//           <div className="flex justify-between items-center mt-auto">
//             <p className="text-yellow-300 font-bold text-xl">{price}</p>
//             <div className="flex items-center">
//               <FaHeart
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleWishlist(id);
//                 }}
//                 className={`text-xl cursor-pointer mx-3 hover:scale-110 transition-transform ${
//                   wishlist.includes(id) ? "text-red-500" : "text-gray-500"
//                 }`}
//                 title={
//                   wishlist.includes(id)
//                     ? "Remove from wishlist"
//                     : "Add to wishlist"
//                 }
//               />
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   alert(`Added ${name} to cart!`);
//                 }}
//                 className="px-4 py-1 bg-secondary rounded hover:bg-secondary text-white font-semibold transition flex flex-row items-center"
//                 aria-label={`Add ${name} to cart`}
//               >
//                 <FaShoppingCart className="mr-2" />
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </article>
//     ))}
//   </div>
// </section>
