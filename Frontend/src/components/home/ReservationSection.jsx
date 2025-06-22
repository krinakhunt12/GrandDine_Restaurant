import React, { useState } from "react";
import ReserveTable from "../ReserveTable";

const ReservationSection = () => {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      <section
        id="reservation"
        className="relative py-32 px-6 text-white"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(/home/Rphoto.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-navy opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-secondary text-sm mb-2">
            We Saved You A Seat
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">
            Make an online <br />
            <span className="text-secondary">Reservation</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg font-light">
            When the going gets tough, the tough get grilling. Bringing heat to
            your meat. No one can compete with our meat.
          </p>
          <button
            onClick={() => setShowReservation(true)}
            className="relative inline-block px-10 py-3 uppercase border border-secondary text-white font-semibold transition rounded-full shadow-lg"
          >
            Reservation
          </button>
        </div>

        {/* Decorative Leaves */}
        <img
          src="/home/Rleafleft.png"
          alt="left-leaf"
          className="absolute bottom-0 left-0 w-44 opacity-70 z-10"
        />
        <img
          src="/home/RleafRight.png"
          alt="right-leaf"
          className="absolute bottom-0 right-0 w-44 opacity-70 transform scale-x-[-1] z-10"
        />
      </section>

      {/* Conditionally Render ReserveTable Modal */}
      {showReservation && (
        <ReserveTable onClose={() => setShowReservation(false)} />
      )}
    </>
  );
};

export default ReservationSection;
