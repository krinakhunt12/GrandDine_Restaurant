import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReserveTable from "../components/ReserveTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ChefRecommend from "../components/home/ChefRecommend";
import MenuSection from "../components/home/MenuSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ReservationSection from "../components/home/ReservationSection";
import PhotoGallery from "../components/home/PhotoGallery";

const Home = () => {
  const [showReservation, setShowReservation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const smoothScroll = (event) => {
      if (event.target.hash) {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-dark-navy text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Wrap Chef Recommend + Signature Menus together for bowl overlap */}
      <div className="relative">
        {/* Chef Recommend Section */}
        <ChefRecommend />

        {/* Signature Menus Section */}
        <MenuSection />
      </div>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Online Reservation Section */}
      <ReservationSection />

      {/* Photo Gallery Section */}
      <PhotoGallery />
      
      <Footer />

      {showReservation && (
        <ReserveTable onClose={() => setShowReservation(false)} />
      )}
    </div>
  );
};

export default Home;
