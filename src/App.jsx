import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/footer";
import About from "./components/About";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import Event from "./components/event";
//
//export const App = () => {
//  const location = useLocation();
//
//  const navbarStyle =
//    location.pathname === "/"
//      ? "bg-gradient-to-b from-[#130726] to-[#1a0933] text-white"
//      : "bg-transparent text-black";
//
//  return (
//    <>
//      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-0"></div>
//      <Navbar/>
//
//      <div className="relative z-20">
//        <Routes>
//          <Route path="/" element={<Homepage />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/event" element={<Event />} />
//          <Route path="/contact" element={<Contact/>} />
//        </Routes>
//      </div>
//      <Footer />
//    </>
//  );
//};
//
//export default App;


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

