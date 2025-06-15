// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Menu from "./components/Pages/Menu";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Cart from "./components/Pages/Cart";
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
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
