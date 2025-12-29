import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import sgvideo from "../assets/videos/sgvideo.mp4";
import renewable from "../assets/images/renewable.jpg";
import ecof from "../assets/images/ecof.jpeg";
import smartd from "../assets/images/smartd.jpeg";
import greenb from "../assets/images/greenb.jpeg";

const Solution = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  const cards = [
    {
      number: "01",
      image: greenb,
      title: "Green Building",
      details: "Using sustainable materials and designs to reduce environmental impact."
    },
    {
      number: "02",
      image: smartd,
      title: "Smart Design",
      details: "Incorporating efficient technologies to optimize performance"
    },
    {
      number: "03",
      image: renewable,
      title: "Renewable Energy",
      details: "Integrating solar and other renewable energy solutions into designs."
    },
    {
      number: "04",
      image: ecof,
      title: "Eco-Friendly",
      details: "Ensuring that all designs promote sustainability and environmental stewardship."
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 40px -12px rgba(198, 172, 143, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative h-auto w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Main Container with max-w-10xl and rounded-xl */}
        <div className="relative w-full max-w-10xl h-auto rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl">
          {/* Video Background - Fits within container */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={sgvideo} type="video/mp4" />
            </video>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[1px] h-[1px] bg-[#C6AC8F] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Container - Fits within video bounds */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative z-10 h-full p-6 lg:p-8 flex flex-col"
          >
            {/* Title Section - Compact */}
            <motion.div 
              variants={itemVariants}
              className="mb-4 lg:mb-6"
            >
              <motion.div
                variants={floatingVariants}
                animate="float"
                className="inline-block"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-[#C6AC8F] to-transparent mb-3 rounded-full"></div>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-white mb-2 leading-tight">
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Sustainability
                    </motion.span>
                    <motion.span 
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C6AC8F] via-[#EAE0D5] to-[#C6AC8F]"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Goals & Vision
                    </motion.span>
                  </h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed"
                  >
                    Pioneering eco-conscious construction solutions that blend innovation with environmental responsibility.
                  </motion.p>
                </div>
                
                {/* Divider - Vertical on larger screens */}
                <div className="hidden sm:block">
                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#C6AC8F] to-transparent opacity-50"></div>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Divider for mobile */}
            <motion.div
              variants={itemVariants}
              className="mb-4 lg:mb-6 sm:hidden"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent opacity-50"></div>
            </motion.div>

            {/* Cards Grid - Optimized for height */}
            <div className="flex-1 overflow-hidden">
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 h-full"
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    custom={index}
                    className="group relative h-full"
                  >
                    {/* Card Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/15 to-transparent rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-black/50 backdrop-blur-sm p-4 lg:p-5 rounded-lg border border-white/10 hover:border-[#C6AC8F]/40 transition-all duration-500 overflow-hidden h-full flex flex-col">
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#C6AC8F]/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      {/* Number Badge */}
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#C6AC8F] to-[#EAE0D5] rounded-full flex items-center justify-center text-black font-bold text-lg mb-3 shadow-lg shadow-[#C6AC8F]/20 flex-shrink-0"
                      >
                        {card.number}
                      </motion.div>
                      
                      {/* Image Container */}
                      <motion.div 
                        whileHover={{ scale: 1.04 }}
                        className="w-full h-28 lg:h-32 rounded-lg overflow-hidden mb-3 border border-white/10 group-hover:border-[#C6AC8F] transition-all duration-500 flex-shrink-0"
                      >
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                        />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <motion.h3 
                          whileHover={{ x: 3 }}
                          className="text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-[#C6AC8F] transition-colors duration-300 line-clamp-1"
                        >
                          {card.title}
                        </motion.h3>
                        
                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3 flex-1">
                          {card.details}
                        </p>
                      </div>
                      
                      {/* Hover Indicator */}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating CTA - Bottom aligned */}
            <motion.div
              variants={itemVariants}
              className="mt-4 lg:mt-6 pt-4 border-t border-white/10"
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Floating decorative elements - Outside the container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-4 hidden lg:block"
        >
          <div className="w-2 h-2 rounded-full bg-[#C6AC8F] opacity-30"></div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 right-4 hidden lg:block"
        >
          <div className="w-4 h-4 rounded-full border border-[#C6AC8F] opacity-20"></div>
        </motion.div>
      </section>
    </>
  );
};

export default Solution;