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
    }, 3000); // 3 seconds delay

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
    <section className="relative container mx-auto py-10 md:py-10 overflow-hidden rounded-3xl lg:rounded-4xl">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#C6AC8F]/5 to-[#5E503F]/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#0A0908]/5 to-[#5E503F]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#5E503F]">
                Our Expertise
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-thin text-[#0A0908] mb-4"
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
              className="text-gray-600 text-lg max-w-3xl mx-auto"
            >
              Specialized services designed to transform visions into exceptional realities
            </motion.p>
          </div>

          {/* Main Slider Container */}
          <div 
            className="relative bg-white/95 backdrop-blur-md rounded-3xl lg:rounded-4xl 
                      border border-[#C6AC8F]/20 shadow-2xl overflow-hidden w-4/5 mx-auto"
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
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
              {/* Auto-play toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleAutoPlay}
                className="w-10 h-10 flex items-center justify-center 
                         bg-white/90 backdrop-blur-sm rounded-full border border-[#C6AC8F]/30 
                         text-[#5E503F] shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </motion.button>

              {/* Card counter */}
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C6AC8F]/30 shadow-lg">
                <span className="text-sm font-medium text-[#5E503F]">
                  {String(activeCard + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Slider Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeCard}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                >
                  {/* Image Section */}
                  <div className="relative order-2 lg:order-1">
                    <motion.div
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative overflow-hidden rounded-2xl lg:rounded-3xl"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cards[activeCard].gradient} opacity-10 z-10`} />
                      
                      <img
                        src={cards[activeCard].image}
                        alt={cards[activeCard].title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl lg:rounded-3xl"
                      />
                      
                      {/* Image badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className={`bg-gradient-to-br ${cards[activeCard].gradient} text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl`}>
                          {cards[activeCard].number}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="order-1 lg:order-2 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-6"
                    >
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${cards[activeCard].gradient}`}></div>
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#5E503F]">
                          Service {cards[activeCard].number}
                        </span>
                      </div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-[#0A0908] mb-6 leading-tight"
                      >
                        {cards[activeCard].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 text-base leading-relaxed"
                      >
                        {cards[activeCard].description}
                      </motion.p>
                    </motion.div>

                    {/* Service Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 mt-6"
                    >
                      {cards[activeCard].description.split("|").map((item, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 text-sm bg-gradient-to-r from-white to-gray-50 
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
                      className="mt-8"
                    >
                      <button
                        onClick={() => navigate("/services")}
                        className="group inline-flex items-center gap-3 px-6 py-3 
                                 bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] text-white 
                                 rounded-full font-medium hover:shadow-xl hover:shadow-[#5E503F]/20 
                                 transition-all duration-300 transform hover:-translate-y-0.5 text-md cursor-pointer"
                      >
                        Explore This Service
                        <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="px-8 md:px-12 lg:px-16 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#C6AC8F]/20">
                {/* Navigation Dots */}
                <div className="flex items-center gap-3">
                  {cards.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCardSelect(index)}
                      className="relative"
                      aria-label={`Go to service ${index + 1}`}
                    >
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="w-12 h-12 flex items-center justify-center 
                             bg-white border border-[#C6AC8F]/30 text-[#5E503F] 
                             rounded-full hover:bg-gradient-to-r hover:from-[#5E503F] hover:to-[#C6AC8F] 
                             hover:text-white hover:border-transparent transition-all duration-300 
                             shadow-lg hover:shadow-xl"
                    aria-label="Previous service"
                  >
                    <FaArrowLeft />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="w-12 h-12 flex items-center justify-center 
                             bg-white border border-[#C6AC8F]/30 text-[#5E503F] 
                             rounded-full hover:bg-gradient-to-r hover:from-[#5E503F] hover:to-[#C6AC8F] 
                             hover:text-white hover:border-transparent transition-all duration-300 
                             shadow-lg hover:shadow-xl"
                    aria-label="Next service"
                  >
                    <FaArrowRight />
                  </motion.button>
                </div>

                {/* View All Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/services")}
                  className="px-6 py-2 text-sm font-medium text-[#5E503F] 
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