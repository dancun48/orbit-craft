import React from "react";
import storyimage from "../assets/images/storyimage.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Mission = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-10 overflow-hidden">
      {/* Animated Background Elements */}
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
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 
                     bg-gradient-to-r from-[#C6AC8F]/5 to-[#5E503F]/5 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 
                     bg-gradient-to-l from-[#0A0908]/5 to-[#5E503F]/5 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
        />
      </div>

      <div className="relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row bg-white/95 backdrop-blur-md 
                        rounded-2xl md:rounded-3xl lg:rounded-4xl border border-[#C6AC8F]/20 
                        shadow-xl lg:shadow-2xl overflow-hidden w-full mx-auto">
            
            {/* Content Container - Reversed order for mobile */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              
              {/* Text Content Section - FIRST on mobile, left on desktop */}
              <div className="flex flex-col justify-center lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full"
                >
                  {/* Decorative divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 sm:gap-3 mb-4 md:mb-6"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase text-[#5E503F]">
                      Our Story
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-[#0A0908] mb-3 md:mb-4"
                  >
                    <span className="bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F] bg-clip-text text-transparent">
                      Crafting Excellence with Purpose
                    </span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 lg:mb-10"
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
                    className="mt-4 md:mt-6"
                  >
                    <button
                      onClick={() => navigate("/company")}
                      aria-label="Learn more about our story"
                      className="group relative inline-flex items-center justify-center w-full sm:w-auto
                               px-5 sm:px-6 md:px-8 py-2.5 md:py-3 text-xs font-semibold 
                               text-[#5E503F] border-2 border-[#5E503F] rounded-full 
                               overflow-hidden transition-all duration-300 hover:text-white 
                               focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-offset-2
                               hover:shadow-lg hover:shadow-[#5E503F]/20 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="relative z-10 h-32 w-22 rounded-full flex items-center justify-center">
                        LEARN MORE
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] 
                                     transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                     duration-300 origin-left"></span>
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Image Section - SECOND on mobile, right on desktop */}
              <div className="relative lg:w-1/2">
                <motion.div
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl 
                           h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] w-full"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/10 to-[#5E503F]/10 z-10" />
                  
                  {/* Image with object-cover */}
                  <img
                    src={storyimage}
                    alt="Orbit Craft team working on a construction project"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 border border-[#C6AC8F]/10 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;