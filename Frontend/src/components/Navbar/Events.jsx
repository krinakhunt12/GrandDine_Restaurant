import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const eventsData = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    date: "2025-07-15",
    description:
      "Join us for an exclusive wine tasting featuring a curated selection of international wines paired with gourmet appetizers.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Live Jazz Night",
    date: "2025-08-01",
    description:
      "Enjoy smooth live jazz performances while savoring our chef’s special menu inspired by New Orleans cuisine.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cooking Workshop: Italian Classics",
    date: "2025-09-10",
    description:
      "Learn how to prepare authentic Italian dishes with our head chef in an interactive cooking class. Limited seats available.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto p-8 md:p-16 flex-grow">
        <h2
          className="text-5xl font-extrabold my-8 text-yellow-600 text-center"
          data-aos="fade-down"
        >
          Upcoming Events
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {eventsData.map(({ id, title, date, description, image }) => (
            <article
              key={id}
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              data-aos="fade-up"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
                  {title}
                </h3>
                <time
                  dateTime={date}
                  className="block text-sm font-medium text-gray-500 mb-4"
                >
                  {new Date(date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-700">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
