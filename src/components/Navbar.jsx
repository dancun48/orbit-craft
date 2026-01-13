import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logot1.png";
import menu_icon from "../assets/images/menu_icon.png";
import close_icon from "../assets/images/close_icon.png";
import { 
  FaFacebook, 
  FaTiktok, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";

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
    // Prevent body scrolling when menu is open
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.menu-container')) {
        setShowMenu(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Get In Touch', path: '/contact-us' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaTiktok />, name: "TikTok", url: "https://tiktok.com" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <FaTwitter />, name: "X (Twitter)", url: "https://twitter.com" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com" }
  ];

  return (
    <>
      {/* Floating Navbar */}
<nav className="fixed top-6 z-50 w-full flex justify-center pointer-events-none">
<div className="pointer-events-auto w-full max-w-7xl mx-auto px-4">
<div
  className={`
    flex items-center justify-between
    rounded-2xl px-6 py-3
    transition-all duration-500
    ${
      isScrolled
        ? ""
        : ""
    }
  `}
>
            {/* Logo */}
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Orbit Craft - Consulting, Construction, Real Estate"
                className="size-10 sm:size-12 lg:size-14 transition-all duration-300 group-hover:scale-105 rounded-lg"
              />
              <h2 className={`font-semibold text-base sm:text-lg lg:text-xl transition-colors duration-300 ${
isScrolled ? "text-[#0A0908]" : "text-white drop-shadow"
              }`}>
                Orbit-Craft
              </h2>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden items-center gap-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? isScrolled ? 'text-[#5E503F] font-semibold' : 'text-amber-300 font-semibold'
                        : isScrolled ? 'text-gray-700 hover:text-[#5E503F]' : 'text-white/90 hover:text-amber-300'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Menu Button */}
            <button
              className={`flex items-center gap-2 sm:gap-3 cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 mobile-touch ${
                isScrolled 
                  ? "bg-[#C6AC8F] text-[#0A0908] focus:ring-[#C6AC8F]" 
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 focus:ring-white"
              }`}
              onClick={() => setShowMenu(!showMenu)}
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              <img
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-500 transform hover:-rotate-180 hover:-translate-y-0.1"
                src={showMenu ? close_icon : menu_icon}
                alt={showMenu ? "Close menu" : "Open menu"}
              />
              <span className="text-xs sm:text-sm font-light">
                {showMenu ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          showMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        aria-hidden={!showMenu}
      >
        {/* Overlay background */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            showMenu ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setShowMenu(false)}
        />
        
        {/* Menu panel - slides in from right */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-[#dac6ae] shadow-2xl transition-transform duration-500 ease-in-out transform ${
            showMenu 
              ? "translate-x-0" 
              : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 safe-top safe-bottom">
            {/* Close button at top */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowMenu(false)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="Close menu"
              >
                <img
                  className="w-5 h-5"
                  src={close_icon}
                  alt="Close menu"
                />
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item, index) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => 
                    `w-full px-4 py-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isActive 
                        ? 'bg-gray-300 text-black shadow-lg' 
                        : 'text-red hover:bg-orange-200 hover:text-white/70]'
                    } mobile-touch`
                  }
                  style={{ 
                    transitionDelay: showMenu ? `${index * 75}ms` : '0ms' 
                  }}
                  role="menuitem"
                >
                  <p className="font-semibold text-lg sm:text-xl">{item.name}</p>
                </NavLink>
              ))}
            </div>

            {/* Social media links */}
            <div className="mt-auto pt-8 border-t border-[#C6AC8F]/30">
              <h3 className="text-black font-semibold mb-5 text-center text-base">
                Connect With Us
              </h3>
              <div className="flex justify-center gap-4 sm:gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C6AC8F] transform hover:scale-110 transition-all duration-300 mobile-touch"
                    style={{ 
                      transitionDelay: showMenu ? `${index * 75 + 450}ms` : '0ms' 
                    }}
                    aria-label={`Visit our ${social.name}`}
                  >
                    <span className="text-2xl sm:text-2xl">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-black text-center mt-5 text-sm">
                Follow us for updates and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;