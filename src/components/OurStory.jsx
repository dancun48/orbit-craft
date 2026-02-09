import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import house8 from "../assets/images/house8.jpg";

// Dynamic data - could be moved to a separate config file or fetched from API
const COMPANY_INFO = {
  name: "OrbitCraft",
  tagline: "Crafting Your Vision, Building Tomorrow",
  missionStatement: "We blend creativity with technical expertise to transform spaces, products, and investments into enduring legacies.",
  teamSize: 10,
  projectsCompleted: 50,
};

const services = [
  {
    id: 1,
    title: "Design & Consulting",
    description: "Innovative building and product design solutions focused on function, aesthetics, and sustainability.",
    icon: "✨",
    link: "/services/design",
    stats: { projects: "10+", satisfaction: "98%" }
  },
  {
    id: 2,
    title: "Construction & Product Build",
    description: "Precision-driven execution of construction and product build projects with uncompromising quality.",
    icon: "🏗️",
    link: "/services/construction",
    stats: { projects: "10+", satisfaction: "97%" }
  },
  {
    id: 3,
    title: "Real Estate Services",
    description: "Expert guidance in property acquisition, sales, and investment backed by market intelligence.",
    icon: "🏠",
    link: "/services/real-estate",
    stats: { transactions: "10+", satisfaction: "99%" }
  },
];

// Responsive breakpoints for animation
const responsiveVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  card: {
    hidden: (index) => ({
      x: window.innerWidth < 1024 ? 0 : -30,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }
};

// Dynamic stats component
const StatCard = ({ number, label, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="text-2xl sm:text-3xl font-bold text-[#5A503C] mb-1">
      {number}
    </div>
    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
      {label}
    </div>
  </motion.div>
);

const OurStory = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceClick = (service) => {
    if (service.link) {
      navigate(service.link);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Our Story | ${COMPANY_INFO.name} – ${COMPANY_INFO.tagline}`}</title>
        <meta
          name="description"
          content={`Discover ${COMPANY_INFO.name}'s story, services, and commitment to excellence in design, construction, and real estate. Founded in ${COMPANY_INFO.foundedYear}.`}
        />
        <meta property="og:title" content={`Our Story | ${COMPANY_INFO.name}`} />
        <meta property="og:description" content={COMPANY_INFO.missionStatement} />
        <meta property="og:image" content={house8} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0" />
        
        <div className="relative mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={responsiveVariants.container}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-[#C6AC8F]/20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
                
                {/* LEFT SECTION - Dynamic with Stats */}
                <div className="relative p-6 sm:p-8 lg:p-12 xl:p-14">
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${house8})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                        filter: 'brightness(0.6) contrast(1.1) saturate(1.1)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-transparent" />
                  </div>

                  <div className="mt-10 relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.header variants={responsiveVariants.item}>
                        <span className="text-sm sm:text-sm font-semibold tracking-widest uppercase text-[#5A503C] bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block">
                          Meet OrbitCraft
                        </span>

                        <h1 className="mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0908] leading-tight">
                          Crafting Your Vision
                          <span className="block font-medium text-[#5A503C] mt-2">
                            Building Tomorrow
                          </span>
                        </h1>
                      </motion.header>

                      <motion.p
                        variants={responsiveVariants.item}
                        className="mt-10 text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl bg-white/60 backdrop-blur-sm p-4 rounded-xl"
                      >
                        At {COMPANY_INFO.name}, we blend{" "}
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

                      {/* Dynamic Stats */}
                      <motion.div 
                        variants={responsiveVariants.item}
                        className="mt-20 grid grid-cols-3 gap-4 max-w-md"
                      >
                        <StatCard 
                          number={`${COMPANY_INFO.projectsCompleted}+`} 
                          label="Projects" 
                          delay={0.1}
                        />
                        <StatCard 
                          number={`${COMPANY_INFO.teamSize}+`} 
                          label="Experts" 
                          delay={0.2}
                        />
                        <StatCard 
                          number="100%" 
                          label="Dedication" 
                          delay={0.3}
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={responsiveVariants.item} className="p-4">
                      <button
                        onClick={() => navigate("/services")}
                        className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-800 rounded-full
                                   bg-gradient-to-r from-white/80 via-white/90 to-white/80
                                   hover:from-[#5A503C]/10 hover:via-[#C6AC8F]/20 hover:to-[#5A503C]/10
                                   shadow-lg hover:shadow-xl transition-all duration-300 border border-white/80
                                   hover:border-[#C6AC8F]/40 w-full sm:w-auto min-h-[44px] sm:min-h-[52px]"
                      >
                        <span>Discover Our Services</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT SECTION - Dynamic Services */}
                <div className="relative p-6 sm:p-8 lg:p-12 xl:p-14 bg-gradient-to-br from-[#f8f4ee] via-white to-[#f8f4ee]">
                  <div className="h-full flex flex-col">
                    <motion.div variants={responsiveVariants.item} className="mb-8">
                      <p className="text-gray-600 lg:mt-10 sm:mt-6 text-lg sm:text-xl font-medium text-center underline decoration-[#C6AC8F]/30 underline-offset-4 bg-white backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        Comprehensive solutions for your needs
                      </p>
                    </motion.div>

                    <motion.div
                      variants={responsiveVariants.container}
                      className="space-y-4 sm:space-y-6 lg:space-y-8 flex-1 flex flex-col justify-center"
                    >
                      {services.map((service, index) => (
                        <motion.article
                          key={service.id}
                          custom={index}
                          variants={responsiveVariants.card}
                          whileHover="hover"
                          onClick={() => handleServiceClick("/services")}
                          className="group bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#C6AC8F]/20 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-[#C6AC8F]/40"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#C6AC8F] to-[#5A503C] text-white text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                              {service.icon}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0A0908] truncate">
                                  {service.title}
                                </h3>
                                {service.stats && (
                                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5A503C] font-medium">
                                    <span>{service.stats.satisfaction} Satisfaction</span>
                                    <span>•</span>
                                    <span>{service.stats.projects || service.stats.transactions} Projects</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2 line-clamp-2">
                                {service.description}
                              </p>
                              <div className="mt-3 flex items-center gap-1 text-xs sm:text-sm text-[#5A503C] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Learn more</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </motion.div>

                    <motion.div 
                      variants={responsiveVariants.item}
                      className="mt-8 pt-8 border-t border-[#C6AC8F]/10"
                    >
                      <p className="text-center text-sm text-gray-500">
                        Trusted by <span className="font-semibold text-[#5A503C]">100+</span> clients worldwide
                      </p>
                    </motion.div>
                  </div>
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