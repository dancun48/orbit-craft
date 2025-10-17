import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_white.jpg";
import menu_icon from "../assets/images/menu_icon.png";
import close_icon from "../assets/images/close_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.menu-container')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`fixed top-10 w-full max-w-7xl z-50 transition-all duration-500 ${
          isScrolled 
            ? " shadow-2xl py-2 rounded-4xl" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex flex-col justify-between menu-container">
          {/* Header Section */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2">
            {/* Logo & Brand Name */}
            <div className="flex flex-row gap-3 sm:gap-4 items-center">
              <img
                src={logo}
                alt="OrbitCraft Consultants Ltd"
                className="size-12 sm:size-16 lg:size-20 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => navigate("/")}
              />
              <p className={`text-lg sm:text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`}>
                OrbitCraft Consultants Ltd
              </p>
            </div>

            {/* Menu Button */}
            {showMenu ? (
              <span className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-gradient-to-r from-amber-400 to-amber-500 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  className="w-6 sm:w-7 transition-all duration-300 hover:scale-110"
                  onClick={() => setShowMenu(false)}
                  src={close_icon}
                  alt="Close menu"
                />
                <span className="text-base sm:text-lg lg:text-xl text-white font-semibold">CLOSE</span>
              </span>
            ) : (
              <span className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-gradient-to-r from-amber-400 to-amber-500 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  className="w-6 sm:w-7 transition-all duration-300 hover:scale-110"
                  onClick={() => setShowMenu(true)}
                  src={menu_icon}
                  alt="Open menu"
                />
                <span className="text-base sm:text-lg lg:text-xl text-white font-semibold">MENU</span>
              </span>
            )}
          </div>

          {/* Dropdown Menu */}
          <ul
            className={`${
              showMenu
                ? "flex flex-col items-start float-right gap-2 mt-3 mx-4 px-6 sm:px-8 py-4 text-lg sm:text-xl font-medium bg-gradient-to-b from-white/95 to-gray-100/95 backdrop-blur-lg shadow-2xl transition-all duration-500 rounded-2xl border border-white/20 w-72 sm:w-80 lg:w-96"
                : "hidden"
            }`}
          >
            {['Home', 'About', 'Projects', 'Solutions', 'Contact'].map((item) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) => 
                  `w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg' 
                      : 'text-gray-800 hover:bg-white/80 hover:text-amber-600'
                  }`
                }
              >
                <p className="font-semibold">{item}</p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;