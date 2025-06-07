// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Navbar/About";
import Menu from "./components/Navbar/Menu";
import Events from "./components/Navbar/Events";
import Gallery from "./components/Navbar/Gallery";
import Contact from "./components/Navbar/Contact";
import Login from "./components/Navbar/Login";
import Signup from "./components/Navbar/Signup";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/events" element={<Events />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default AppRoutes;
