import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarStyle =
    location.pathname === "/"
      ? "bg-[#130726] text-white"
      : "bg-gradient-to-b from-[#130726] to-[#1a0933] text-white";

  const linkStyle = "text-lg px-4 py-2 rounded-full transition-all duration-300";
  const activeLinkStyle = "bg-white text-[#121212] font-bold shadow-md"; // Active link styling
  const normalLinkStyle = "text-white hover:bg-white hover:text-[#121212]";

  return (
    <nav className={`relative w-full ${navbarStyle} shadow-md z-50 py-4 px-6 md:px-10`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className="flex items-center gap-2">
          <img
            src="/MahilAI/mahillogo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <div
            className="text-white text-xl font-bold tracking-wide"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)",
            }}
          >
            MahilAI
          </div>
        </a>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`${linkStyle} ${location.pathname === "/" ? activeLinkStyle : normalLinkStyle}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${linkStyle} ${location.pathname === "/about" ? activeLinkStyle : normalLinkStyle}`}
          >
            About
          </Link>
          <Link
            to="/event"
            className={`${linkStyle} ${location.pathname === "/event" ? activeLinkStyle : normalLinkStyle}`}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className={`${linkStyle} ${location.pathname === "/contact" ? activeLinkStyle : normalLinkStyle}`}
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-6 py-4 bg-[#130726]">
          <Link
            to="/"
            className={`${linkStyle} ${location.pathname === "/" ? activeLinkStyle : normalLinkStyle}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${linkStyle} ${location.pathname === "/about" ? activeLinkStyle : normalLinkStyle}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/event"
            className={`${linkStyle} ${location.pathname === "/event" ? activeLinkStyle : normalLinkStyle}`}
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className={`${linkStyle} ${location.pathname === "/contact" ? activeLinkStyle : normalLinkStyle}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
