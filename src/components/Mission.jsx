import React from "react";
import storyimage from "../assets/images/storyimage.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Mission = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-10">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "100%", "0%"], y: ["0%", "50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
                     bg-gradient-to-r from-[#C6AC8F]/5 to-[#5E503F]/5
                     rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: ["100%", "0%", "100%"], y: ["50%", "0%", "50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64
                     bg-gradient-to-l from-[#0A0908]/5 to-[#5E503F]/5
                     rounded-full blur-2xl"
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl
                          border border-[#C6AC8F]/20 shadow-xl overflow-hidden">
            
            <div className="flex flex-col lg:flex-row gap-8 p-5 sm:p-8 md:p-10">
              
              {/* TEXT */}
              <div className="flex flex-col justify-center lg:w-1/2">
                <motion.span
                  className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5E503F] mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  Our Story
                </motion.span>

                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-thin text-[#0A0908] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="bg-gradient-to-r from-[#5E503F] via-[#0A0908] to-[#5E503F]
                                   bg-clip-text text-transparent">
                    Crafting Excellence with Purpose
                  </span>
                </motion.h2>

                <motion.p
                  className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  At Orbit Craft, we believe in crafting excellence with purpose—
                  whether constructing environments, shaping products, or
                  facilitating property ownership. Our approach is built on
                  professionalism, integrity, and long-term value.
                </motion.p>

                <button
                  onClick={() => navigate("/company")}
                  className="relative inline-flex items-center justify-center
                             w-full sm:w-auto px-7 py-3 text-xs font-semibold
                             text-[#5E503F] border-2 border-[#5E503F] rounded-full
                             transition-all duration-300 hover:text-white hover:bg-[#5E503F]
                             hover:shadow-lg hover:-translate-y-0.5 overflow-hidden lg:w-40 lg:h-40 lg:rounded-full cursor-pointer"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#5E503F] to-[#C6AC8F]
                                   scale-x-0 hover:scale-x-100 transition-transform
                                   duration-300 origin-left"></span>
                </button>
              </div>

              {/* IMAGE */}
              <div className="lg:w-1/2">
                <motion.div
                  className="relative overflow-hidden rounded-xl md:rounded-2xl
                             h-[450px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[600px] object-cover"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6AC8F]/10 to-[#5E503F]/10 z-10" />
                  <img
                    src={storyimage}
                    alt="Orbit Craft team"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
