// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import AppRoutes from "./routes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop /> 
        <AppRoutes />

    </BrowserRouter>
  );
}

export default App;
