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
  LightBulbIcon,
  ArrowsPointingOutIcon,
  CubeIcon,
  SquaresPlusIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import resid from "../assets/images/resid.jpeg";
import commercial from "../assets/images/commercial.jpg";
import int from "../assets/images/int.jpeg";
import prod from "../assets/images/prod.jpeg";
import build from "../assets/images/build.jpeg";
import estate from "../assets/images/estate.jpeg";

// icons
import success from "../assets/images/success.png";
import satisfaction from "../assets/images/satisfaction.png";
import experience from "../assets/images/experience.png";
import coverage from "../assets/images/coverage.png";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeCard, setActiveCard] = React.useState(null);

  const cards = [
    {
      number: "01",
      image: resid,
      title: "Residential Building Design",
      description: "Custom home designs, renovation planning, architectural schematics, and sustainable living solutions for modern families.",
      icon: HomeIcon,
      highlights: ["Custom Homes", "Renovations", "Family Spaces", "Sustainable Design"],
      color: "#5E503F",
      category: "design"
    },
    {
      number: "02",
      image: commercial,
      title: "Commercial Building Design",
      description: "Office buildings, retail spaces, mixed-use developments, and commercial complexes with innovative architectural solutions.",
      icon: BuildingOfficeIcon,
      highlights: ["Office Buildings", "Retail Spaces", "Mixed-Use", "Commercial Complexes"],
      color: "#C6AC8F",
      category: "design"
    },
    {
      number: "03",
      image: int,
      title: "Interior Design",
      description: "Space Planning & Optimization | Lighting & Acoustic Design | Furniture Layouts | Interior Themes | Smart Housing Solutions",
      icon: BuildingLibraryIcon,
      highlights: ["Space Planning", "Lighting Design", "Smart Solutions", "Custom Themes"],
      color: "#0A0908",
      category: "design"
    },
    {
      number: "04",
      image: prod,
      title: "Product Design",
      description: "Custom Furniture & Fixtures | Sustainable Material & Modular Products | Branded Property Products",
      icon: WrenchScrewdriverIcon,
      highlights: ["Custom Furniture", "Sustainable Materials", "Modular Products", "Brand Integration"],
      color: "#5E503F",
      category: "creative"
    },
    {
      number: "05",
      image: build,
      title: "Building Construction & Property Management",
      description: "Turnkey Construction Solutions | Contract Administration | Time, Cost & Quality Control | Health & Safety Management",
      icon: BuildingStorefrontIcon,
      highlights: ["Turnkey Solutions", "Quality Control", "Safety Management", "Cost Efficiency"],
      color: "#C6AC8F",
      category: "construction"
    },
    {
      number: "06",
      image: estate,
      title: "Real Estate Development Advisory & Agency",
      description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory",
      icon: LightBulbIcon,
      highlights: ["Feasibility Studies", "Valuation Services", "Property Management", "Investment Advisory"],
      color: "#5E503F",
      category: "advisory"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        delay: custom.delay
      }
    }),
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(94, 80, 63, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 0 0 rgba(94, 80, 63, 0)",
        "0 0 0 10px rgba(94, 80, 63, 0.08)",
        "0 0 0 0 rgba(94, 80, 63, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#eae5df] overflow-hidden py-16 lg:py-20"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#5E503F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main container with max-w-10xl and centered content */}
      <div className="relative w-full max-w-10xl mx-auto">
        {/* Decorative top border */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F] rounded-full mb-10 lg:mb-12"
        />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border border-[#5E503F]/20 mb-6 shadow-sm"
          >
            <ChatBubbleLeftRightIcon className="w-8 h-8 lg:w-10 lg:h-10 text-[#5E503F]" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0908] mb-4 lg:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F]">
              Services
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F] mx-auto rounded-full mb-6 lg:mb-8"
          />

          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of professional services designed to bring your construction and design visions to life.
          </p>
        </motion.div>

        {/* Main content container with subtle background */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-[#5E503F]/20 shadow-lg p-6 lg:p-8 mb-12 lg:mb-16">
          {/* 3×2 Grid Layout for Services */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {cards.map((item, index) => (
              <ServiceCard 
                key={item.number}
                item={item}
                index={index}
                variants={itemVariants}
                delay={index * 0.1}
                onHover={() => setActiveCard(item.number)}
                isActive={activeCard === item.number}
              />
            ))}
          </motion.div>

          {/* Category Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 lg:mt-12 pt-8 border-t border-[#5E503F]/10"
          >
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {[
                { label: "Design Services", color: "#5E503F", count: 3, icon: BuildingLibraryIcon },
                { label: "Creative Solutions", color: "#C6AC8F", count: 1, icon: WrenchScrewdriverIcon },
                { label: "Construction", color: "#5E503F", count: 1, icon: BuildingStorefrontIcon },
                { label: "Advisory", color: "#C6AC8F", count: 1, icon: LightBulbIcon },
              ].map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 lg:px-5 py-2.5 lg:py-3 rounded-full border border-[#5E503F]/20 shadow-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                    <Icon className="w-4 h-4 text-[#5E503F]" />
                    <span className="text-sm lg:text-base font-medium text-[#0A0908]">{category.label}</span>
                    <span className="text-xs lg:text-sm text-gray-500">({category.count})</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '50+', label: 'Successful Projects', icon: success, color: '#5E503F', desc: 'Completed with excellence' },
              { value: '99.8%', label: 'Client Satisfaction', icon: satisfaction, color: '#C6AC8F', desc: 'Happy clients served' },
              { value: '10+', label: 'Years Excellence', icon: experience, color: '#5E503F', desc: 'Industry experience' },
              { value: '360°', label: 'Service Coverage', icon: coverage, color: '#C6AC8F', desc: 'Comprehensive solutions' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-5 lg:p-6 rounded-xl lg:rounded-2xl border border-[#5E503F]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 lg:mb-4 rounded-full bg-gradient-to-br from-white to-gray-50 border border-[#5E503F]/10">
                  <img src={stat.icon} alt="stat-icon" className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-center" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-base lg:text-lg font-semibold text-[#0A0908] mb-1 text-center">
                  {stat.label}
                </div>
                <div className="text-xs lg:text-sm text-gray-500 text-center">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="relative">
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="absolute inset-0 bg-gradient-to-r from-[#5E503F]/20 to-[#C6AC8F]/20 rounded-2xl lg:rounded-3xl blur-xl"
            ></motion.div>
            
            <div className="relative bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] p-8 lg:p-12 rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative text-center max-w-2xl mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 border border-white/30 mb-4 lg:mb-6"
                >
                  <SparklesIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
                  Ready to Build Your Vision?
                </h3>
                
                <p className="text-white/90 text-base lg:text-lg mb-6 lg:mb-8">
                  Our integrated services work together seamlessly to deliver comprehensive solutions tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#5E503F] hover:text-[#0A0908] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Start Your Project</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span>Contact Us</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative bottom border */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-1 bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F] rounded-full mt-12 lg:mt-16"
        />
      </div>
    </section>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ item, variants, delay, onHover, isActive }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      custom={{ delay }}
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={onHover}
      className="group relative h-full"
    >
      {/* Active state glow */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#5E503F]/10 to-[#C6AC8F]/10 rounded-xl blur-lg"
        ></motion.div>
      )}
      
      {/* Main card */}
      <div className="relative bg-white rounded-xl overflow-hidden border border-[#5E503F]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Image section with improved visibility */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          
          {/* Number badge */}
          <motion.div 
            whileHover={{ rotate: 360 }}
            className="absolute top-4 left-4 bg-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md border-2 border-[#5E503F]"
            style={{ color: item.color }}
          >
            <span className="font-bold text-lg lg:text-xl">{item.number}</span>
          </motion.div>

          {/* Category indicator */}
          <div className="absolute top-4 right-4">
            <span className={`text-xs lg:text-sm px-3 py-1.5 rounded-full font-medium backdrop-blur-sm ${item.category === 'design' ? 'bg-blue-500/10 text-blue-700 border border-blue-200' :
                              item.category === 'creative' ? 'bg-purple-500/10 text-purple-700 border border-purple-200' :
                              item.category === 'construction' ? 'bg-amber-500/10 text-amber-700 border border-amber-200' :
                              'bg-green-500/10 text-green-700 border border-green-200'}`}>
              {item.category}
            </span>
          </div>

          {/* Icon */}
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full border border-[#5E503F]/20"
          >
            <Icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: item.color }} />
          </motion.div>
        </div>
        
        {/* Content section */}
        <div className="p-5 lg:p-6 flex-1 flex flex-col">
          <h3 className="text-lg lg:text-xl font-bold text-[#0A0908] mb-3 group-hover:text-[#5E503F] transition-colors duration-300 leading-tight">
            {item.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
            {item.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="inline-flex items-center gap-1.5 text-xs lg:text-sm bg-[#5E503F]/5 text-[#5E503F] px-3 py-1.5 rounded-full border border-[#5E503F]/20"
              >
                <CheckCircleIcon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                {highlight}
              </motion.span>
            ))}
          </div>

          <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
            {item.description}
          </p>

          {/* Action button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn mt-4 lg:mt-6 flex items-center gap-2 text-sm lg:text-base font-medium text-[#5E503F] hover:text-white bg-[#5E503F]/5 hover:bg-[#5E503F] py-2.5 lg:py-3 px-4 lg:px-5 rounded-lg transition-all duration-300 border border-[#5E503F]/20 self-start"
          >
            <span>Learn More</span>
            <ArrowRightIcon className="w-4 h-4 lg:w-5 lg:h-5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#5E503F]/10 rounded-br-xl"></div>
      </div>
    </motion.div>
  );
};

export default Services;