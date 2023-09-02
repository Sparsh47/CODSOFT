import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features.jsx";
import Details from "./components/Details/Details";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Features />
    <Details />
    <CTA />
    <Footer />
  </React.StrictMode>
);
