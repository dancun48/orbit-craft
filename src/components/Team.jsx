import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaCrown } from "react-icons/fa";
import arnold from "../assets/images/arnold.jpg";
import jira from "../assets/images/jira.jpg";
import bantu from "../assets/images/bantu.jpg";
import okello from "../assets/images/okello.jpg";

const Team = () => {
  const team = [
    {
      name: "Arnold Ochieng",
      image: arnold,
      title: "Director - Corporate Affairs & Strategy",
      expertise: "Strategic Planning & Business Development",
      years: "15+ years"
    },
    {
      name: "Bantu Mwaura",
      image: bantu,
      title: "Director - Real Estate & Property Development",
      expertise: "Property Development & Market Analysis",
      years: "12+ years"
    },
    {
      name: "Eugene Jack",
      image: okello,
      title: "Director - Design & Innovation",
      expertise: "Architecture & Sustainable Design",
      years: "10+ years"
    },
    {
      name: "Christopher Jira",
      image: jira,
      title: "Director - Construction & Operations",
      expertise: "Project Management & Engineering",
      years: "18+ years"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 15, opacity: 0, scale: 0.95 },
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
      y: -6,
      scale: 1.02,
      boxShadow: "0 15px 30px -10px rgba(10, 9, 8, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-5">
      {/* Main Container */}
      <div className="relative w-full max-w-10xl h-[calc(auto-2rem)]">
        <div className="h-full rounded-3xl sm:rounded-4xl overflow-hidden border border-[#C6AC8F]/20 bg-[#eae5df] backdrop-blur-sm shadow-xl">
          <div className="h-full p-5 lg:p-7 flex flex-col">
            
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-3 lg:mb-4"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-[2px] bg-gradient-to-r from-[#C6AC8F] via-[#0A0908] to-[#C6AC8F] mx-auto mb-3 rounded-full"
              />
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0908] mb-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F]">
                  Leadership Team
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto">
                Visionary leaders driving innovation and excellence
              </p>
            </motion.div>

            {/* Cards Grid - Fits within container */}
            <div className="flex-1 min-h-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 h-auto"
              >
                {team.map((person, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative h-full"
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/10 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-30"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-[#C6AC8F] p-4 rounded-2xl border border-[#C6AC8F]/20 group-hover:border-[#C6AC8F]/40 transition-all duration-500 overflow-hidden h-auto flex flex-col shadow-sm">
                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#C6AC8F]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                            
                      {/* Image Container */}
                      <div className="relative mb-3 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.04 }}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-[#C6AC8F]/30 group-hover:border-[#5E503F] transition-all duration-500"
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={person.image}
                            alt={person.name}
                          />
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        </motion.div>
                        
                        {/* Decorative ring */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#C6AC8F]/10"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col text-center space-y-1.5">
                        <div className="flex items-center justify-center gap-1.5">
                          <FaCrown className="text-[#5E503F] opacity-80 text-xs" />
                          <motion.h3
                            whileHover={{ x: 2 }}
                            className="text-base sm:text-lg font-bold text-[#0A0908] group-hover:text-[#5E503F] transition-colors duration-300 line-clamp-1"
                          >
                            {person.name}
                          </motion.h3>
                        </div>
                        
                        <motion.p
                          whileHover={{ scale: 1.02 }}
                          className="text-white/60 font-medium text-xs sm:text-sm line-clamp-2"
                        >
                          {person.title}
                        </motion.p>
                        
                        <p className="text-gray-600 text-xs flex-1 line-clamp-2">
                          {person.expertise}
                        </p>
                        
                        {/* Social Links */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="flex justify-center gap-1.5 pt-2 mt-1 border-t border-[#C6AC8F]/10"
                        >
                          {[FaLinkedin, FaTwitter, FaEnvelope].map((Icon, idx) => (
                            <motion.a
                              key={idx}
                              whileHover={{ scale: 1.1, y: -1 }}
                              whileTap={{ scale: 0.9 }}
                              href="#"
                              className="w-6 h-6 rounded-full bg-white border border-[#C6AC8F]/20 flex items-center justify-center text-[#5E503F] hover:text-white hover:bg-[#5E503F] hover:border-[#5E503F] transition-all duration-300 shadow-sm"
                              aria-label={`Connect with ${person.name}`}
                            >
                              <Icon className="text-xs" />
                            </motion.a>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-3 pt-3 border-t border-[#C6AC8F]/10"
            >
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 left-3 hidden lg:block"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#5E503F] opacity-20"></div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 right-3 hidden lg:block"
      >
        <div className="w-2 h-2 rounded-full border border-[#5E503F] opacity-10"></div>
      </motion.div>
    </div>
  );
};

export default Team;