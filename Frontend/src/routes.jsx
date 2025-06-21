// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Events from "./Pages/Events";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    {/* <Route path="/events" element={<Events />} /> */}
    <Route path="/reservation" element={<Reservation />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
