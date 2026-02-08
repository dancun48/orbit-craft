import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import house8 from "../assets/images/house8.jpg";

const OurStory = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const services = [
    {
      id: 1,
      title: "Design & Consulting",
      description:
        "Innovative building and product design solutions focused on function, aesthetics, and sustainability.",
      icon: "✨",
    },
    {
      id: 2,
      title: "Construction & Product Build",
      description:
        "Precision-driven execution of construction and product build projects with uncompromising quality.",
      icon: "🏗️",
    },
    {
      id: 3,
      title: "Real Estate Services",
      description:
        "Expert guidance in property acquisition, sales, and investment backed by market intelligence.",
      icon: "🏠",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Our Story | Orbit Craft – Crafting Your Vision, Building Tomorrow</title>
        <meta
          name="description"
          content="Discover Orbit Craft's story, services, and commitment to excellence in design, construction, and real estate."
        />
        <meta property="og:title" content="Our Story | Orbit Craft" />
        <meta
          property="og:description"
          content="We blend creativity and technical expertise to build lasting legacies."
        />
        <meta property="og:image" content={house8} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-[#C6AC8F]/30 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
                
                {/* LEFT */}
                <div className="relative p-6 sm:p-10 lg:p-14 pt-24 lg:pt-28">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${house8})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        filter: "brightness(0.75) contrast(1.1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <motion.header variants={itemVariants}>
                      <span className="text-sm font-semibold tracking-widest uppercase text-[#5A503C]">
                        Meet Orbit Craft
                      </span>

                      <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A0908] leading-tight">
                        Crafting Your Vision
                        <span className="block font-medium text-[#5A503C]">
                          Building Tomorrow
                        </span>
                      </h1>
                    </motion.header>

                    <motion.p
                      variants={itemVariants}
                      className="mt-6 text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl"
                    >
                      At Orbit Craft, we blend{" "}
                      <span className="font-semibold text-[#5A503C]">
                        creativity
                      </span>{" "}
                      with{" "}
                      <span className="font-semibold text-[#5A503C]">
                        technical expertise
                      </span>{" "}
                      to transform spaces, products, and investments into
                      enduring legacies.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8">
                      <button
                        onClick={() => navigate("/services")}
                        className="inline-flex items-center gap-3 px-8 py-4 lg:w-30 h-30 text-sm font-semibold text-gray-800 rounded-full
                                   bg-gradient-to-r from-[#5A503C]/30 via-[#C6AC8F]/40 to-[#5A503C]/30
                                   hover:from-[#5A503C]/40 hover:via-[#C6AC8F]/50 hover:to-[#5A503C]/40
                                   hover:shadow-xl transition-all duration-300 border border-white/50
                                   hover:border-white/80 cursor-pointer"
                      >
                        Discover Our Services →
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative p-6 sm:p-10 lg:p-14 bg-[#d4c6ae]">
                  <motion.div
                    variants={containerVariants}
                    className="space-y-6 lg:space-y-8 h-full flex flex-col justify-center"
                  >
                    {services.map((service) => (
                      <motion.article
                        key={service.id}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#C6AC8F]/30 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#C6AC8F] to-[#5A503C] text-white text-2xl">
                            {service.icon}
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#0A0908] mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurStory;