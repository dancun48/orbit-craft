import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import house8 from "../assets/images/house8.jpg";
import Team from "./Team";
import Solutions from "../pages/Solution";

const OurStory = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 15px 35px rgba(90, 80, 60, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Design & Consulting",
      description:
        "Providing innovative building and product design solutions tailored to function, aesthetics, and sustainability.",
      icon: "✨",
    },
    {
      id: 2,
      title: "Construction & Product Build",
      description:
        "Executing projects with precision, quality, and efficiency, from groundbreaking structures to crafted product builds.",
      icon: "🏗️",
    },
    {
      id: 3,
      title: "Real Estate Services",
      description:
        "Guiding clients through property acquisition, sales, and investment with expert market insights and trusted advisory.",
      icon: "🏠",
    },
  ];

  return (
    <>
      <section
        className="relative py-12 md:py-5 overflow-hidden"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative"
          >
            
            {/* Main Card Container */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#C6AC8F]/30 rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl shadow-[#5A503C]/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-">
                {/* Left Column - Story Content */}
                <div className="relative p-8 md:p-12 lg:p-14 xl:p-16">
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${house8})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 40,
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <motion.header variants={itemVariants}>
                      <div className="inline-flex items-center gap-3 mb-6 mt-10">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#C6AC8F] to-transparent" />
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#5A503C]">
                          Meet Orbit-Craft
                        </span>
                      </div>

                      <h1
                        id="our-story-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0908] mb-6 leading-tight"
                      >
                        Crafting Your Vision,
                        <span className="block font-medium text-[#5A503C] mt-2">
                          Building Tomorrow
                        </span>
                      </h1>
                    </motion.header>

                    {/* Description */}
                    <motion.div variants={itemVariants} className="mb-8">
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        At Orbit Craft, we blend{" "}
                        <span className="font-semibold text-[#5A503C]">
                          creativity
                        </span>{" "}
                        with{" "}
                        <span className="font-semibold text-[#5A503C]">
                          technical expertise
                        </span>{" "}
                        to transform spaces, products, and investments into
                        lasting legacies.
                      </p>

                      <div className="bg-gradient-to-r from-[#F9F7F3] to-white p-6 rounded-2xl border border-[#C6AC8F]/20">
                        <p className="text-gray-800 font-medium">
                          Our multidisciplinary approach spans three core
                          pillars, each dedicated to excellence and innovation
                          in their respective fields.
                        </p>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                      <button
                        onClick={() => navigate("/services")}
                        aria-label="Explore our comprehensive services"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-[#5A503C] to-[#C6AC8F] rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#5A503C]/20 focus:outline-none focus:ring-2 focus:ring-[#5A503C] focus:ring-offset-2"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Discover Our Services
                          <svg
                            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#C6AC8F] to-[#5A503C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Right Column - Services Cards */}
                <div className="relative p-8 md:p-12 lg:p-14 xl:p-16 bg-[#d4c6ae]/70">
                  {/* Background Image with Enhanced Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${house8})`,
                      opacity: 0,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/30" />
                  </div>

                  <div className="relative z-10 mt-10">
                    <motion.div
                      variants={containerVariants}
                      className="space-y-4 md:space-y-6"
                    >
                      {services.map((service) => (
                        <motion.article
                          key={service.id}
                          variants={cardVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-white/90 backdrop-blur-sm border border-[#C6AC8F]/30 p-6 md:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                          role="article"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          {/* Card Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative flex items-start gap-4 md:gap-5">
                            {/* Icon Badge */}
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-[#C6AC8F] to-[#5A503C] text-white rounded-2xl text-xl md:text-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                {service.icon}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-6 h-0.5 bg-gradient-to-r from-[#C6AC8F] to-transparent" />
                                <span className="text-xs font-semibold tracking-widest uppercase text-[#5A503C]">
                                  Pillar {service.id}
                                </span>
                              </div>

                              <h3 className="text-xl md:text-2xl font-semibold text-[#0A0908] mb-3 group-hover:text-[#5A503C] transition-colors duration-300">
                                {service.title}
                              </h3>

                              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            {/* Hover Indicator */}
                            <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg
                                className="w-6 h-6 text-[#C6AC8F]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </motion.div>

                    {/* Stats or Additional Info */}
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 pt-8 border-t border-[#C6AC8F]/20"
                    >
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-[#5A503C]">
                            50+
                          </div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-[#5A503C]">
                            10+
                          </div>
                          <div className="text-sm text-gray-600">Years</div>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-[#5A503C]">
                            10+
                          </div>
                          <div className="text-sm text-gray-600">Experts</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Solutions />
      <Team />
    </>
  );
};

export default OurStory;
