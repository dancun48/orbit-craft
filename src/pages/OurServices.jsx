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
import { useNavigate } from "react-router-dom";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeCard, setActiveCard] = React.useState(null);

  const navigate = useNavigate();

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
  className="relative px-responsive py-responsive min-h-screen flex items-center justify-center bg-[#C6AC8F]/90 overflow-hidden rounded-3xl sm:rounded-3xl lg:rounded-4xl"
>
  {/* Background pattern overlay */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(#5E503F 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  {/* Main container with top padding for navbar */}
  <div className="relative w-full container-responsive pt-24 sm:pt-28 lg:pt-32">
    {/* Header Section */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-10 lg:mb-12 px-4"
    >
      <h1 className="text-responsive-xl font-thin text-[#0A0908] mb-4 sm:mb-5">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E503F] via-[#0A0908]/70 to-[#5E503F]">
          Services
        </span>
      </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px sm:120px lg:140px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F] mx-auto mb-4 sm:mb-5 lg:mb-6"
          />

          <p className="text-responsive-base text-gray-500 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of professional services designed to bring your construction and design visions to life.
          </p>
        </motion.div>

        {/* Main content container with subtle background */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#5E503F]/20 shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10">
          {/* 3×2 Grid Layout for Services */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
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
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-6 sm:mb-8 lg:mb-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { value: '50+', label: 'Successful Projects', icon: success, color: '#5E503F', desc: 'Completed with excellence' },
              { value: '99.8%', label: 'Client Satisfaction', icon: satisfaction, color: '#C6AC8F', desc: 'Happy clients served' },
              { value: '10+', label: 'Years Excellence', icon: experience, color: '#5E503F', desc: 'Industry experience' },
              { value: '360°', label: 'Service Coverage', icon: coverage, color: '#C6AC8F', desc: 'Comprehensive solutions' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#5E503F]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-full bg-gradient-to-br from-white to-gray-50 border border-[#5E503F]/10">
                  <img src={stat.icon} alt="stat-icon" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-center" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#0A0908] mb-1 text-center">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 text-center">
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
              className="absolute inset-0 bg-gradient-to-r from-[#5E503F]/20 to-[#C6AC8F]/20 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl"
            ></motion.div>
            
            <div className="relative bg-gradient-to-r from-[#5E503F] to-[#C6AC8F] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px sm:25px 25px lg:30px 30px'
                }}></div>
              </div>

              <div className="relative text-center max-w-2xl mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 border border-white/30 mb-3 sm:mb-4 lg:mb-5"
                >
                  <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                  Ready to Build Your Vision?
                </h3>
                
                <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6">
                  Our integrated services work together seamlessly to deliver comprehensive solutions tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white cursor-pointer text-[#5E503F] hover:text-[#0A0908] px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mobile-touch"
                  >
                    <span onClick={()=>(navigate('/contact-us'), window.scrollTo(0,0))}>Start Your Project</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ServiceCard Component - Responsive updates
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
          className="absolute inset-0 bg-gradient-to-br from-[#5E503F]/10 to-[#C6AC8F]/10 rounded-lg sm:rounded-xl blur-lg"
        ></motion.div>
      )}
      
      {/* Main card */}
      <div className="relative bg-white rounded-lg sm:rounded-xl overflow-hidden border border-[#5E503F]/10 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Image section with improved visibility */}
        <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
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
            className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md border-2 border-[#5E503F]"
            style={{ color: item.color }}
          >
            <span className="font-bold text-base sm:text-lg lg:text-xl">{item.number}</span>
          </motion.div>

          {/* Category indicator */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium backdrop-blur-sm ${item.category === 'design' ? 'bg-blue-500/10 text-blue-700 border border-blue-200' :
                              item.category === 'creative' ? 'bg-purple-500/10 text-purple-700 border border-purple-200' :
                              item.category === 'construction' ? 'bg-amber-500/10 text-amber-700 border border-amber-200' :
                              'bg-green-500/10 text-green-700 border border-green-200'}`}>
              {item.category}
            </span>
          </div>

          {/* Icon */}
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-2.5 rounded-full border border-[#5E503F]/20"
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: item.color }} />
          </motion.div>
        </div>
        
        {/* Content section */}
        <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0A0908] mb-2 sm:mb-3 group-hover:text-[#5E503F] transition-colors duration-300 leading-tight">
            {item.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
            {item.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#5E503F]/5 text-[#5E503F] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#5E503F]/20"
              >
                <CheckCircleIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {highlight}
              </motion.span>
            ))}
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1">
            {item.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-[#5E503F]/10 rounded-br-lg sm:rounded-br-xl"></div>
      </div>
    </motion.div>
  );
};

export default Services;
