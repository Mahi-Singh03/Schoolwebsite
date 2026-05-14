import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/mainlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg fixed w-full z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <img 
              src={logo}
              alt="United School Logo" 
              className="h-12 w-12 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold font-sans transition-colors duration-300">
              United Public Sen. Sec. School
            </span>
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden focus:outline-none"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/achievements">Achievements</NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/activities" onClick={toggleMenu}>Activities</MobileNavLink>
            <MobileNavLink to="/achievements" onClick={toggleMenu}>Achievements</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable component for desktop links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 relative
               after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
               after:bg-white after:transition-all duration-300 hover:after:w-full"
  >
    {children}
  </Link>
);

// Reusable component for mobile links
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white text-xl px-4 py-2 hover:bg-blue-500 rounded-lg transition-all duration-300
               transform hover:translate-x-2"
  >
    {children}
  </Link>
);

export default Navbar;