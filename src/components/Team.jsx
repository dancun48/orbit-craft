// Team.jsx - Updated with responsive design while preserving all content
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaCrown, FaBriefcase, FaUserTie } from "react-icons/fa";
import arnold from "../assets/images/arnold.jpg";
import jira from "../assets/images/jira.jpg";
import bantu from "../assets/images/bantu.jpg";
import okello from "../assets/images/okello.jpg";

const Team = () => {
  const team = [
    {
      name: "Arnold Ochieng",
      image: arnold,
      title: "Director - Development Management",
      expertise: "Strategic Planning & Business Development",
      icon: <FaBriefcase className="text-[#5E503F]" />
    },
    {
      name: "Bantu Mwaura",
      image: bantu,
      title: "Director - Commercial Affairs",
      expertise: "Property Development & Market Analysis",
      icon: <FaUserTie className="text-[#5E503F]" />
    },
    {
      name: "Okello Otieno",
      image: okello,
      title: "Director - Design & Innovation",
      expertise: "Architecture & Sustainable Design",
      icon: <FaCrown className="text-[#5E503F]" />
    },
    {
      name: "Christopher Jira",
      image: jira,
      title: "MD & Director, Construction and Operations",
      expertise: "Project Management & Engineering",
      icon: <FaBriefcase className="text-[#5E503F]" />
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
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 40px -15px rgba(10, 9, 8, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="relative mx-auto pt-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#C6AC8F]/5 to-transparent border border-[#C6AC8F]/10 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#5E503F]/5 to-transparent blur-lg"
        />
      </div>

      {/* Main Container with max-w-10xl and responsive height */}
      <div className="relative mx-auto">
        <div className="h-auto rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden border border-[#C6AC8F]/20 bg-black/30 backdrop-blur-sm">
          <div className="h-full p-6 sm:p-8 lg:p-12 flex flex-col">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 lg:mb-12 flex-shrink-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-thin pt-5 text-[#0A0908] mb-3"
              >
                <span className="bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F] bg-clip-text text-transparent">
                  Our Leadership
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
              >
                Driving innovation and excellence with decades of combined expertise
              </motion.p>
            </motion.div>

            {/* Team Cards Grid - Scrollable if needed */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 h-full items-center"
              >
                {team.map((person, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative h-full"
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/20 via-[#5E503F]/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-b from-white to-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#C6AC8F]/30 group-hover:border-[#C6AC8F]/60 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl h-full flex flex-col">
                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#C6AC8F]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-3 right-3 bg-gradient-to-r from-[#C6AC8F] to-[#5E503F] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10"
                      >
                      </motion.div>

                      {/* Image Container */}
                      <div className="relative mb-4 flex-shrink-0">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                          {/* Outer decorative ring */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-dashed border-[#C6AC8F]/20 rounded-full"
                          />
                          
                          {/* Profile image with gradient border */}
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 border-transparent bg-gradient-to-br from-[#C6AC8F] via-[#5E503F] to-[#0A0908] p-0.5">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="w-full h-full rounded-full overflow-hidden"
                            >
                              <img
                                className="w-full h-full object-cover"
                                src={person.image}
                                alt={person.name}
                                loading="lazy"
                              />
                              {/* Subtle overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                          </div>
                          
                          {/* Icon badge */}
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ rotate: { duration: 0.6 } }}
                            className="absolute -bottom-1 right-0 bg-white border border-[#C6AC8F] rounded-full p-1.5 shadow-md"
                          >
                            {person.icon}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col text-center space-y-2 sm:space-y-3">
                        <div className="space-y-2">
                          <motion.h3
                            whileHover={{ x: 2 }}
                            className="text-base sm:text-lg lg:text-xl font-bold text-[#0A0908] group-hover:text-[#5E503F] transition-colors duration-300 line-clamp-1"
                          >
                            {person.name}
                          </motion.h3>
                          
                          <motion.p
                            whileHover={{ scale: 1.02 }}
                            className="text-[#5E503F] font-semibold text-xs sm:text-sm line-clamp-2"
                          >
                            {person.title}
                          </motion.p>
                          
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {person.expertise}
                          </p>
                        </div>

                        {/* Social Links */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex justify-center gap-2 pt-3 mt-auto border-t border-[#C6AC8F]/20"
                        >
                          {[FaLinkedin, FaEnvelope].map((Icon, idx) => (
                            <motion.a
                              key={idx}
                              whileHover={{ scale: 1.15, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              href="#"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-white to-gray-50 border border-[#C6AC8F]/30 flex items-center justify-center text-[#5E503F] hover:text-white hover:bg-gradient-to-br hover:from-[#5E503F] hover:to-[#0A0908] hover:border-transparent transition-all duration-300 shadow-md hover:shadow-lg"
                              aria-label={`Connect with ${person.name}`}
                            >
                              <Icon className="text-xs sm:text-sm" />
                            </motion.a>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Footer CTA - Inside the container */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-6 sm:mt-8 pt-4 border-t border-[#C6AC8F]/20 flex-shrink-0"
            >
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
      </motion.div>
    </section>
  );
};

export default Team;