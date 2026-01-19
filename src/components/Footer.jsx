import React, { useState } from "react";
import logo from "../assets/images/logo_gray.jpg";
import { useNavigate } from "react-router-dom";
import { FaSquarePhone } from "react-icons/fa6";
import { 
  FaFacebook, 
  FaTiktok, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/company" },
        { name: "Projects", path: "/projects" },
        { name: "Services", path: "/services" },
        { name: "Sustainability Goals", path: "/company" },
        { name: "Contact Us", path: "/contact-us" }
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Careers", path: "/" },
        { name: "Partnerships", path: "/" },
        { name: "Investors", path: "/" },
        { name: "News", path: "/" },
        { name: "Events", path: "/" }
      ],
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={18} />, name: "Facebook", url: "https://facebook.com" },
    { icon: <FaTiktok size={18} />, name: "TikTok", url: "https://tiktok.com" },
    { icon: <FaLinkedin size={18} />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <FaTwitter size={18} />, name: "X (Twitter)", url: "https://twitter.com" },
    { icon: <FaInstagram size={18} />, name: "Instagram", url: "https://instagram.com" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      console.log("Subscribing:", email);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="px-responsive safe-bottom">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="bg-gradient-to-r from-[#D6B68C] to-[#C6AC8F] rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl border border-[#B89A75] overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10 py-6 sm:py-8 lg:py-10">
            {/* Top Section - 3 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-10 lg:mb-12">
              {/* Column 1: Brand Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-5 lg:mb-6">
                  <div className="relative">
                    <img
                      src={logo}
                      alt="Orbit Craft - Consulting, Construction, Real Estate"
                      className="size-16 sm:size-20 lg:size-24 rounded-lg sm:rounded-xl shadow-xl border-2 border-[#5E503F]/20 transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#C6AC8F] to-[#5E503F] rounded-lg sm:rounded-xl opacity-20 blur-md"></div>
                  </div>
                  <div className="text-[#000]">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-1">ORBIT-CRAFT</h3>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <p className="text-xs font-thin text-[#5E503F]">
                        CONSULTING • CONSTRUCTION • REAL ESTATE
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[#5E503F]/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                  Building a sustainable future through innovative construction
                  solutions and expert consulting services. We transform visions
                  into reality with precision and excellence.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3 bg-[#5E503F]/5 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#5E503F]/10">
                  <div className="flex items-center gap-2 sm:gap-3 text-[#5E503F]/80 text-xs sm:text-sm">
                    <FaMapMarkerAlt className="text-[#5E503F] flex-shrink-0 text-sm sm:text-base" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[#5E503F]/80 text-xs sm:text-sm">
                    <FaEnvelope className="text-[#5E503F] flex-shrink-0 text-sm sm:text-base" />
                    <span>hello@orbit-craft.co.ke</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[#5E503F]/80 text-xs sm:text-sm">
                    <FaSquarePhone className="text-[#5E503F] flex-shrink-0 text-sm sm:text-base" />
                    <span>+254 745 119 904</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Navigation Links */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {footerSections.map((section, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-[#5E503F]/30">
                        <h4 className="text-[#5E503F] text-base sm:text-lg font-bold tracking-wide">
                          {section.title}
                        </h4>
                        <span className="h-1 w-4 sm:w-6 bg-gradient-to-r from-[#C6AC8F] to-transparent rounded-full"></span>
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <button
                              onClick={() => handleNavigation(link.path)}
                              className="group flex items-center gap-1.5 sm:gap-2 text-[#5E503F]/70 hover:text-[#5E503F] transition-all duration-300 text-xs sm:text-sm hover:pl-1.5 sm:hover:pl-2 w-full text-left mobile-touch"
                            >
                              <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">›</span>
                              <span className="group-hover:font-medium transition-all duration-300 cursor-pointer">
                                {link.name}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Newsletter & Social */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#5E503F]/20">
                  {/* Newsletter */}
                  <div className="mb-6 sm:mb-7 lg:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h4 className="text-[#5E503F] text-base sm:text-lg font-bold tracking-wide">
                        Newsletter
                      </h4>
                      <span className="h-1 w-4 sm:w-6 bg-gradient-to-r from-[#C6AC8F] to-transparent rounded-full"></span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5E503F]/80 mb-3 sm:mb-4">
                      Stay updated with our latest projects and industry insights.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#5E503F]/30 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5E503F]/50 focus:border-transparent text-sm text-[#5E503F] placeholder-[#5E503F]/50"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#5E503F] to-[#7A6B56] text-white p-1.5 sm:p-2 rounded-lg hover:from-[#7A6B56] hover:to-[#5E503F] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5E503F] focus:ring-offset-2 mobile-touch"
                          aria-label="Subscribe"
                        >
                          <FaArrowRight className="text-sm" />
                        </button>
                      </div>
                      {isSubscribed && (
                        <p className="text-xs sm:text-sm text-green-600 font-medium animate-pulse">
                          ✓ Subscribed successfully!
                        </p>
                      )}
                      <p className="text-xs text-[#5E503F]/60">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </div>

                  {/* Social Media */}
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h4 className="text-[#5E503F] text-base sm:text-lg font-bold tracking-wide">
                        Follow Us
                      </h4>
                      <span className="h-1 w-4 sm:w-6 bg-gradient-to-r from-[#C6AC8F] to-transparent rounded-full"></span>
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-2.5 sm:p-3 bg-[#5E503F]/10 hover:bg-[#5E503F]/20 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg mobile-touch"
                          aria-label={`Visit our ${social.name}`}
                        >
                          <span className="text-[#5E503F] group-hover:text-[#C6AC8F] transition-colors duration-300">
                            {social.icon}
                          </span>
                          <span className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 bg-[#5E503F] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                    <p className="text-center text-xs text-[#5E503F]/60 mt-3 sm:mt-4">
                      Join our community for daily updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 sm:pt-8 border-t border-[#5E503F]/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 lg:gap-6">
                {/* Copyright */}
                <div className="text-center md:text-left order-2 md:order-1">
                  <p className="text-[#5E503F]/70 text-xs sm:text-sm">
                    &copy; {new Date().getFullYear()} Orbit Craft. All rights reserved.
                  </p>
                  <p className="text-xs text-[#5E503F]/50 mt-1">
                    Building excellence since 2020
                  </p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 order-1 md:order-2">
                  {[
                    { label: "Terms & Conditions", href: "/terms" },
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Cookie Policy", href: "/cookies" },
                    { label: "Accessibility", href: "/accessibility" },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#5E503F]/70 hover:text-[#5E503F] text-xs sm:text-sm font-medium transition-all duration-300 hover:underline decoration-[#C6AC8F] mobile-touch"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Design Credit */}
                <div className="text-center md:text-right order-3">
                  <a
                    href="https://www.ozyntria.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 sm:gap-2 text-[#5E503F]/70 hover:text-[#5E503F] text-xs sm:text-sm transition-all duration-300 mobile-touch"
                  >
                    <span>Designed by</span>
                    <span className="font-bold text-[#5E503F] group-hover:text-black transition-colors duration-300">
                      Ozyntria Tech
                    </span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
