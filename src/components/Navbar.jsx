import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/transparentlogo.png";
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sustainability Goals', path: '/sustainability-goals' },
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
    <nav className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`fixed top-10 md:top-15 w-full max-w-10xl z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-transparent" 
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
              <h2 className="text-white font-semibold text-lg">OrbitCraft</h2>
            </div>

            <button
              className="flex items-center gap-3 sm:gap-4 cursor-pointer bg-[#C6AC8F] px-4 py-2 mr-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-opacity-50"
              onClick={() => setShowMenu(!showMenu)}
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              <img
                className="w-4 sm:w-6 transition-all duration-500 transform hover:-rotate-180 hover:-translate-y-0.1"
                src={showMenu ? close_icon : menu_icon}
                alt={showMenu ? "Close menu" : "Open menu"}
              />
              <span className="text-base sm:text-lg lg:text-base text-[#0A0908] font-light">
                {showMenu ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>

          {/* Full-screen overlay menu */}
          <div
            className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
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
              className={`absolute top-0 right-0 h-full w-[350px] bg-[#e9ded4] shadow-2xl transition-transform duration-500 ease-in-out transform ${
                showMenu 
                  ? "translate-x-0" 
                  : "translate-x-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="h-full flex flex-col justify-between px-6 sm:px-8 py-8">
                {/* Navigation items */}
                <div className="flex flex-col gap-2 mt-12">
                  {navItems.map((item, index) => (
                    <NavLink 
                      key={item.name}
                      to={item.path}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) => 
                        `w-full px-4 py-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                          isActive 
                            ? 'bg-gray-300 text-red shadow-lg' 
                            : 'text-red hover:bg-[#dac6ae] hover:text-white/70]'
                        }`
                      }
                      style={{ 
                        transitionDelay: showMenu ? `${index * 75}ms` : '0ms' 
                      }}
                      role="menuitem"
                    >
                      <p className="font-semibold text-md sm:text-md">{item.name}</p>
                    </NavLink>
                  ))}
                </div>

                {/* Social media links */}
                <div className="mt-auto pt-8 border-t border-[#C6AC8F]/30">
                  <h3 className="text-[#EAE0D5] font-semibold mb-6 text-center text-md">
                    Connect With Us
                  </h3>
                  <div className="flex justify-center gap-4 sm:gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#EAE0D5] hover:text-[#C6AC8F] transform hover:scale-110 transition-all duration-300"
                        style={{ 
                          transitionDelay: showMenu ? `${index * 75 + 450}ms` : '0ms' 
                        }}
                        aria-label={`Visit our ${social.name}`}
                      >
                        <span className="text-2xl sm:text-xl">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="text-[#EAE0D5]/70 text-center mt-6 text-sm">
                    Follow us for updates and insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;