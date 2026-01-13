import React from "react";
import storyimage from "../assets/images/storyimage.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Mission = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-4 py-10 sm:px-6 lg:px-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Animated Background Elements (similar to Focus.jsx) */}
      <div className="absolute inset-0 overflow-hidden">
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
          {/* Main Container - Matches Focus.jsx width and styling */}
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl lg:rounded-4xl 
                        border border-[#C6AC8F]/20 shadow-xl lg:shadow-2xl overflow-hidden w-full lg:w-4/5 mx-auto">
            
            {/* Content Section */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 xl:p-12">
              
              {/* Text Content Section */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4 sm:mb-6"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                  >
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
                    <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5E503F]">
                      Our Story
                    </span>
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-[#C6AC8F] to-transparent"></div>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-thin text-[#0A0908] mb-3 sm:mb-4"
                  >
                    <span className="bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F] bg-clip-text text-transparent">
                      Crafting Excellence with Purpose
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10"
                  >
                    At Orbit Craft, we believe in crafting excellence with
                    purpose—whether we are constructing environments, shaping
                    products, or facilitating property ownership. Our approach is
                    built on professionalism, integrity, and a commitment to
                    delivering value that lasts.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 sm:mt-6"
                  >
                    <button
                      onClick={() => navigate("/company")}
                      aria-label="Learn more about our story"
                      className="group relative inline-flex items-center justify-center w-fit 
                               px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold 
                               text-[#5E503F] border-2 border-[#5E503F] rounded-full 
                               overflow-hidden transition-all duration-300 hover:text-white 
                               focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-offset-2
                               hover:shadow-lg hover:shadow-[#5E503F]/20 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        LEARN MORE
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] 
                                     transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                     duration-300 origin-left"></span>
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="relative order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/10 to-[#5E503F]/10 z-10" />
                  
                  <img
                    src={storyimage}
                    alt="Orbit Craft team working on a construction project"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
                    loading="lazy"
                  />
                  
                  {/* Optional decorative element similar to Focus.jsx */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                    <div className="bg-gradient-to-br from-[#C6AC8F] to-[#5E503F] text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl">
                      Our Mission
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Optional bottom border similar to Focus.jsx */}
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-8 pt-4 sm:pt-6 lg:pt-8">
              <div className="flex items-center justify-center pt-4 sm:pt-6 lg:pt-8 border-t border-[#C6AC8F]/20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/about")}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#5E503F] 
                           border border-[#5E503F] rounded-full hover:bg-[#5E503F] 
                           hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Discover Our Journey
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;