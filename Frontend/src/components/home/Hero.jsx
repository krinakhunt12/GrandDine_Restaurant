const Hero = ({ setShowReservation, hero }) => {
  return (
    <section
      className="h-screen relative flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(/home/hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 px-6 max-w-3xl" data-aos="fade-up">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white/90 tracking-widest leading-tight drop-shadow-sm">
          Experience the Difference
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed italic font-light">
          When the going gets tough, the tough get grilling.<br />
          Bringing heat to your meat. No one can compete with our meat.
        </p>
        <button
          onClick={() => setShowReservation(true)}
          className="mt-8 inline-block px-8 py-4 my-button button-secondary text-black font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
        >
          Our Menus
        </button>
      </div>

      <img
        src="/home/home-leaf-left.png"
        alt="Leaf left"
        className="absolute left-0 bottom-[-150px] w-[200px] md:w-[300px] z-10"
        style={{ transform: "rotate(-20deg)" }}
      />
      <img
        src="/home/home-leaf-right.png"
        alt="Leaf right"
        className="absolute right-[-50px] bottom-[-150px] w-[200px] md:w-[300px] z-10"
        style={{ transform: "rotate(-70deg) scaleX(1)" }}
      />

      <div className="absolute bottom-10 animate-bounce text-gray-200 z-20">
        <svg
          className="w-8 h-8 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-sm mt-1">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
