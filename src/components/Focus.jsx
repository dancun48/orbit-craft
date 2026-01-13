// Focus.jsx - Updated with responsive design while preserving all content
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import estate from "../assets/images/estate.jpeg";
import build from "../assets/images/build.jpeg";
import int from "../assets/images/int.jpeg";
import resid from "../assets/images/resid.jpeg";
import prod from "../assets/images/prod.jpeg";
import focusImage from "../assets/images/focus.jpg";

const Focus = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const autoPlayRef = useRef(null);

  const cards = [
    {
      number: "01",
      image: resid,
      title: "Residential & Commercial Building Design",
      description: "Conceptualization | Schematics | Architectural | Civil & Structural | MEP | Landscapes | Green Building Solutions",
      gradient: "from-[#C6AC8F] to-[#5E503F]"
    },
    {
      number: "02",
      image: int,
      title: "Interior Design",
      description: "Space Planning & Optimization | Lighting & Acoustic Design | Furniture Layouts | Interior Themes | Smart Housing Solutions",
      gradient: "from-[#5E503F] to-[#0A0908]"
    },
    {
      number: "03",
      image: prod,
      title: "Product Design",
      description: "Custom Furniture & Fixtures | Sustainable Material & Modular Products | Branded Property Products",
      gradient: "from-[#0A0908] to-[#5E503F]"
    },
    {
      number: "04",
      image: build,
      title: "Building Construction & Property Management",
      description: "Turnkey Construction Solutions | Contract Administration | Time, Cost & Quality Control | Health & Safety Management",
      gradient: "from-[#5E503F] to-[#C6AC8F]"
    },
    {
      number: "05",
      image: estate,
      title: "Real Estate Development Advisory & Agency",
      description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory | Project Finance Advisory",
      gradient: "from-[#C6AC8F] to-[#0A0908]"
    },
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveCard((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handleCardSelect = (index) => {
    setDirection(index > activeCard ? 1 : -1);
    setActiveCard(index);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying || isHovering) return;

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, isHovering, handleNext]);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateX: 20,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateX: -20,
      transition: {
        duration: 0.3
      }
    }),
  };

  const progressBarVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: { 
        duration: 5, 
        ease: "linear" 
      }
    }
  };

  return (
    <section className="relative px-4 py-10 sm:px-6 lg:px-8 sm:py-12 lg:py-16 overflow-hidden rounded-3xl sm:rounded:3xl lg:rounded-4xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: `url(${focusImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)"
          }}
        ></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: ["0%", "100%", "0%"],
            y: ["0%", "50%", "0%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-[#C6AC8F]/5 to-[#5E503F]/5 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{ 
            x: ["100%", "0%", "100%"],
            y: ["50%", "0%", "50%"]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-l from-[#0A0908]/5 to-[#5E503F]/5 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5E503F]">
                Our Expertise
              </span>
              <div className="w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-thin text-[#0A0908] mb-3 sm:mb-4"
            >
              <span className="bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F] bg-clip-text text-transparent">
                Focus Areas
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto px-4"
            >
              Specialized services designed to transform visions into exceptional realities
            </motion.p>
          </div>

          {/* Main Slider Container */}
          <div 
            className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl lg:rounded-4xl 
                      border border-[#C6AC8F]/20 shadow-xl lg:shadow-2xl overflow-hidden w-full lg:w-4/5 mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100/50 z-20 overflow-hidden">
              <AnimatePresence>
                {isPlaying && !isHovering && (
                  <motion.div
                    key={activeCard}
                    variants={progressBarVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    className={`h-full ${cards[activeCard].gradient} bg-gradient-to-r`}
                    style={{ originX: 0 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Control Bar */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2 sm:gap-3">
              {/* Auto-play toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAutoPlay}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
                         bg-white/90 backdrop-blur-sm rounded-full border border-[#C6AC8F]/30 
                         text-[#5E503F] shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              >
                {isPlaying ? <FaPause className="text-xs sm:text-sm" /> : <FaPlay className="text-xs sm:text-sm" />}
              </motion.button>

              {/* Card counter */}
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#C6AC8F]/30 shadow-lg">
                <span className="text-xs sm:text-sm font-medium text-[#5E503F]">
                  {String(activeCard + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Slider Content */}
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeCard}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
                >
                  {/* Image Section */}
                  <div className="relative order-1">
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cards[activeCard].gradient} opacity-10 z-10`} />
                      
                      <img
                        src={cards[activeCard].image}
                        alt={cards[activeCard].title}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      />
                      
                      {/* Image badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                        <div className={`bg-gradient-to-br ${cards[activeCard].gradient} text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl`}>
                          {cards[activeCard].number}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="order-2 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-4 sm:mb-6"
                    >
                      <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className={`w-6 sm:w-8 h-0.5 bg-gradient-to-r ${cards[activeCard].gradient}`}></div>
                        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5E503F]">
                          Service {cards[activeCard].number}
                        </span>
                      </div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A0908] mb-4 sm:mb-6 leading-tight"
                      >
                        {cards[activeCard].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                      >
                        {cards[activeCard].description}
                      </motion.p>
                    </motion.div>

                    {/* Service Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6"
                    >
                      {cards[activeCard].description.split("|").map((item, index) => (
                        <span 
                          key={index}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-white to-gray-50 
                                   border border-[#C6AC8F]/20 rounded-full text-gray-700"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 sm:mt-8"
                    >
                      <button
                        onClick={() => navigate("/services")}
                        className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 
                                 bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] text-white 
                                 rounded-full font-medium hover:shadow-xl hover:shadow-[#5E503F]/20 
                                 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-md cursor-pointer"
                      >
                        Explore This Service
                        <FaArrowRight className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 border-t border-[#C6AC8F]/20">
                {/* Navigation Dots */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {cards.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCardSelect(index)}
                      className="relative"
                      aria-label={`Go to service ${index + 1}`}
                    >
                      <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        activeCard === index 
                          ? `bg-gradient-to-r ${cards[index].gradient}` 
                          : "bg-[#C6AC8F]/30"
                      }`} />
                      {activeCard === index && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute inset-0 border-2 border-[#5E503F]/30 rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                             bg-white border border-[#C6AC8F]/30 text-[#5E503F] 
                             rounded-full hover:bg-gradient-to-r hover:from-[#5E503F] hover:to-[#C6AC8F] 
                             hover:text-white hover:border-transparent transition-all duration-300 
                             shadow-lg hover:shadow-xl"
                    aria-label="Previous service"
                  >
                    <FaArrowLeft className="text-sm" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                             bg-white border border-[#C6AC8F]/30 text-[#5E503F] 
                             rounded-full hover:bg-gradient-to-r hover:from-[#5E503F] hover:to-[#C6AC8F] 
                             hover:text-white hover:border-transparent transition-all duration-300 
                             shadow-lg hover:shadow-xl"
                    aria-label="Next service"
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                </div>

                {/* View All Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/services")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#5E503F] 
                           border border-[#5E503F] rounded-full hover:bg-[#5E503F] 
                           hover:text-white transition-all duration-300 cursor-pointer"
                >
                  View All Services
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Focus;