import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/footer";
import About from "./components/About";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contactpage";
import Event from "./components/event";

const App = () => {
  const location = useLocation();
  const navbarStyle =
    location.pathname === "/"
      ? "bg-gradient-to-b from-[#130726] to-[#1a0933] text-white"
      : "bg-transparent text-black";

  return (
    <>
      <Navbar className={navbarStyle} />
      <div className="relative z-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

