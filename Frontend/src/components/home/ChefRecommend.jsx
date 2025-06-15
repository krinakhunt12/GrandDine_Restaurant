const ChefRecommend = ({ scrollY }) => {
  return (
    <section
      className="relative py-32 px-6 bg-dark-navy text-white"
      data-aos="fade-up"
      aria-label="Chef Recommend"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left z-10">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
            Delight in every bite
          </p>
          <h2 className="text-5xl font-bold tracking-widest leading-tight mb-6">
            Our Chef <br /> Recommend
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation.
          </p>
          <button className="border border-[#D4A857] px-10 py-3 rounded-full text-sm tracking-widest hover:bg-[#D4A857] hover:text-black transition">
            VIEW MENUS
          </button>
        </div>

        <div className="relative w-full flex justify-center z-10">
          <img
            src="/home/menu-leaf.png"
            alt="Leaf"
            className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] z-0 opacity-70"
          />
          <img
            src="/home/bowl.jpg"
            alt="Chef Recommended Dish"
            className="w-80 h-80 object-cover rounded-full shadow-2xl relative z-10 transition-transform duration-200"
            style={{ transform: `translateY(${Math.min(scrollY * 0.05, 10)}px)` }}
          />
        </div>
      </div>

      <img
        src="/home/bowl2.jpg"
        alt="Side Bowl Overlap"
        className="absolute left-[-6%] -bottom-50 w-80 h-80 object-cover rounded-full z-20 border-dark-navy shadow-xl"
        style={{ pointerEvents: "none" }}
      />
    </section>
  );
};

export default ChefRecommend;
