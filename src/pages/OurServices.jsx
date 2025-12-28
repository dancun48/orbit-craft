import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { 
  ArrowRightIcon, 
  SparklesIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";
import resid from "../assets/images/resid.jpeg";
import int from "../assets/images/int.jpeg";
import prod from "../assets/images/prod.jpeg";
import build from "../assets/images/build.jpeg";
import estate from "../assets/images/estate.jpeg";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const cards = [
    {
      number: "01",
      image: resid,
      title: "Residential & Commercial Building Design",
      description: "Conceptualization | Schematics | Architectural | Civil & Structural | MEP | Landscapes | Green Building Solutions",
      icon: BuildingOfficeIcon,
      highlights: ["Green Building", "Architectural Design", "Structural Engineering", "Sustainable Solutions"],
      color: "#5E503F"
    },
    {
      number: "02",
      image: int,
      title: "Interior Design",
      description: "Space Planning & Optimization | Lighting & Acoustic Design | Furniture Layouts | Interior Themes | Smart Housing Solutions",
      icon: HomeIcon,
      highlights: ["Space Planning", "Lighting Design", "Smart Solutions", "Custom Themes"],
      color: "#C6AC8F"
    },
    {
      number: "03",
      image: prod,
      title: "Product Design",
      description: "Custom Furniture & Fixtures | Sustainable Material & Modular Products | Branded Property Products",
      icon: WrenchScrewdriverIcon,
      highlights: ["Custom Furniture", "Sustainable Materials", "Modular Products", "Brand Integration"],
      color: "#0A0908"
    },
    {
      number: "04",
      image: build,
      title: "Building Construction & Property Management",
      description: "Turnkey Construction Solutions | Contract Administration | Time, Cost & Quality Control | Health & Safety Management",
      icon: BuildingStorefrontIcon,
      highlights: ["Turnkey Solutions", "Quality Control", "Safety Management", "Cost Efficiency"],
      color: "#5E503F"
    },
    {
      number: "05",
      image: estate,
      title: "Real Estate Development Advisory & Agency",
      description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory",
      icon: LightBulbIcon,
      highlights: ["Feasibility Studies", "Valuation Services", "Property Management", "Investment Advisory"],
      color: "#C6AC8F"
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
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[700px] flex items-center justify-center px-4 sm:px-6 bg-[#eae5df] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #5E503F 1px, transparent 1px),
                             linear-gradient(-45deg, #5E503F 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5E503F] rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main container with max-w-800px */}
      <div className="relative w-full max-w-[800px] z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Header Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8 lg:mb-12"
          >
            {/* Animated divider */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#5E503F] to-transparent rounded-full"></div>
            </motion.div>
            
            {/* Main heading with creative typography */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-[#5E503F] rounded-full flex items-center justify-center"
              >
                <SparklesIcon className="w-4 h-4 text-[#EAE0D5]" />
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0908] mb-4">
                <span className="block">Our Comprehensive</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F]">
                  Services Portfolio
                </span>
              </h1>
            </div>
            
            {/* Subheading with typing animation effect */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed relative"
            >
              <span className="inline-block">
                We bring our innovative touch to every project, proving that nothing is impossible.
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1"
              >
                ✨
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Services Cards Grid - 2 columns for medium/large screens */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          >
            <AnimatePresence>
              {cards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative"
                  >
                    {/* Card background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white rounded-xl overflow-hidden border border-[#5E503F]/10 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#5E503F]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      {/* Image container with enhanced visibility */}
                      <div className="relative h-48 lg:h-56 overflow-hidden">
                        <motion.img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Gradient overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        
                        {/* Number badge with animation */}
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-4 left-4 bg-white border-2 border-[#5E503F] w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                          style={{ color: item.color }}
                        >
                          <span className="font-bold text-lg">{item.number}</span>
                        </motion.div>
                        
                        {/* Service icon overlay */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full border border-[#5E503F]/20"
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} />
                        </motion.div>
                      </div>
                      
                      {/* Content area */}
                      <div className="p-5 lg:p-6 flex-1 flex flex-col">
                        {/* Title with animation */}
                        <motion.h3 
                          whileHover={{ x: 3 }}
                          className="text-lg lg:text-xl font-bold text-[#0A0908] mb-3 group-hover:text-[#5E503F] transition-colors duration-300 leading-tight"
                        >
                          {item.title}
                        </motion.h3>
                        
                        {/* Highlights chips */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.highlights.map((highlight, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * idx }}
                              className="inline-flex items-center gap-1 text-xs bg-[#5E503F]/5 text-[#5E503F] px-2.5 py-1 rounded-full border border-[#5E503F]/20"
                            >
                              <CheckCircleIcon className="w-3 h-3" />
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                          {item.description}
                        </p>
                        
                        {/* Hover action button */}
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn w-full flex items-center justify-center gap-2 text-sm font-medium text-[#5E503F] hover:text-white bg-[#5E503F]/5 hover:bg-[#5E503F] py-2.5 rounded-lg transition-all duration-300 border border-[#5E503F]/20 hover:border-[#5E503F] mt-auto"
                        >
                          <span>Learn More</span>
                          <motion.div
                            animate={{ x: hoveredCard === index ? 3 : 0 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRightIcon className="w-4 h-4" />
                          </motion.div>
                        </motion.button>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#5E503F]/10 rounded-tr-xl"></div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-10 lg:mt-12"
          >
            <div className="bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] rounded-2xl p-8 border border-[#5E503F] shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-white/90 mb-6 max-w-lg mx-auto">
                Let's discuss how our comprehensive services can bring your project to life with innovation and excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#5E503F] hover:bg-[#0A0908] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                Start Your Project Today
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '200+', label: 'Projects Delivered', color: '#5E503F' },
                { value: '15+', label: 'Years Experience', color: '#C6AC8F' },
                { value: '100%', label: 'Client Satisfaction', color: '#5E503F' },
                { value: '50+', label: 'Expert Team', color: '#C6AC8F' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl border border-[#5E503F]/10 shadow-sm text-center"
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 hidden lg:block"
      >
        <div className="w-3 h-3 rounded-full bg-[#5E503F] opacity-20"></div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-8 hidden lg:block"
      >
        <div className="w-4 h-4 rounded-full border border-[#5E503F] opacity-10"></div>
      </motion.div>
    </section>
  );
};

export default Services;