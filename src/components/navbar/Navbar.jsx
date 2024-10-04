import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Mengambil lokasi saat ini
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu terbuka

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-main-900">SheMentors</h1>

        {/* Tombol Hamburger */}
        <button 
          className="md:hidden text-main-900 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"} {/* Tanda menu terbuka/tutup */}
        </button>

        {/* Navigation Menu */}
        <ul 
          className={`text-main-900 flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mentors" className={location.pathname === "/mentors" ? "active" : ""}>
              Mentor
            </Link>
          </li>
          <li>
            <Link to="/articles" className={location.pathname === "/articles" ? "active" : ""}>
              Artikel
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <ul className="text-main-50 flex space-x-4">
          <li>
            <button className="bg-main-900">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
