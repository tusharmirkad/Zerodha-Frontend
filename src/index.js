import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing_Page/Home/HomePage";
import Signup from "./Landing_Page/Signup/Signup";
import AboutPage from "./Landing_Page/About/AboutPage";
import ProductPage from "./Landing_Page/Products/ProductPage";
import PricingPage from "./Landing_Page/Pricing/PricingPage";
import SupportPage from "./Landing_Page/Support/SupportPage";
import "./index.css";
import NavBar from "./Landing_Page/NavBar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound" ;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
