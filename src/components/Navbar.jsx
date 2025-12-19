import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/transparentlogo.png";
import menu_icon from "../assets/images/menu_icon.png";
import close_icon from "../assets/images/close_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.menu-container')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sustainability Goals', path: '/sustainability-goals' },
    { name: 'Get In Touch', path: '/contact-us' }
  ];

  return (
    <nav className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`fixed top-0 w-full max-w-10xl z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3" 
            : "py-4"
        }`}
      >
        <div className="flex flex-col justify-between menu-container">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10">
            <div 
              className="flex flex-row gap-3 sm:gap-4 items-center cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Orbit Craft - Consulting, Construction, Real Estate"
                className="size-10 transition-all duration-300 group-hover:scale-105 rounded-xl"
              />
              <h2>OrbitCraft</h2>
            </div>

            <button
              className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-[#C6AC8F] px-4 py-2 mr-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-opacity-50"
              onClick={() => setShowMenu(!showMenu)}
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              <img
                className="w-4 sm:w-6 transition-all duration-300"
                src={showMenu ? close_icon : menu_icon}
                alt={showMenu ? "Close menu" : "Open menu"}
              />
              <span className="text-base sm:text-lg lg:text-base text-[#0A0908]">
                {showMenu ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>

          <div
            className={`${
              showMenu
                ? "flex flex-col items-start float-right gap-2 mt-1 ml-290 px-6 sm:px-8 py-4 text-lg sm:text-xl font-medium bg-[#22333B] backdrop-blur-lg shadow-2xl transition-all duration-500 rounded-2xl border border-[#C6AC8F] w-72 sm:w-80 lg:w-96"
                : "hidden"
            }`}
            role="menu"
            aria-hidden={!showMenu}
          >
            {navItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) => 
                  `w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#C6AC8F] text-[#0A0908] shadow-lg' 
                      : 'text-[#EAE0D5] hover:bg-[#C6AC8F] hover:text-[#0A0908]'
                  }`
                }
                role="menuitem"
              >
                <p className="font-semibold">{item.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;