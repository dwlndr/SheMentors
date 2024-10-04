import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // For navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown menu
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    navigate('/login'); // Redirect to login
  };

  // Check if user is logged in
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = storedUser !== null;
  const userName = isLoggedIn ? storedUser.name : '';

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-main-900">SheMentors</h1>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-main-900 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"} {/* Toggle menu icon */}
        </button>

        {/* Navigation Menu */}
        <ul 
          className={`text-main-900 flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? "flex" : "hidden"}`}
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

        {/* Auth Buttons / User Greeting */}
        <div className="relative">
          {isLoggedIn ? (
            <>
              <button 
                className="bg-main-900 text-white py-2 px-4 rounded-md focus:outline-none"
                onClick={toggleDropdown}
              >
                Hi, {userName} {/* Display greeting with username */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="bg-main-900 text-white py-2 px-4 rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
