import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  MapPinIcon, 
  CalendarIcon, 
  UsersIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BuildingLibraryIcon,
  SparklesIcon,
  ChevronDownIcon,
  ArrowDownIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

// Import images (same as before)
import athi from '../assets/images/athi.png';
import stjames from '../assets/images/stjames.png';
import limuru from '../assets/images/limuru.png';
import kakamega from '../assets/images/kakamega.png';
import joska from '../assets/images/joska.png';
import nun from '../assets/images/nun.png';
import ruiru from '../assets/images/ruiru.png';
import sda from '../assets/images/sda.png';
import tanda from '../assets/images/tanda.png';

// Gallery images (same as before)
import athi1 from '../assets/images/athi-1.png';
import athi2 from '../assets/images/athi-2.png';
import athi3 from '../assets/images/athi-3.jpg';
import stjames1 from '../assets/images/stjames-1.png';
import stjames2 from '../assets/images/stjames-2.png';
import stjames3 from '../assets/images/stjames-3.jpg';
import limuru1 from '../assets/images/limuru-1.png';
import limuru2 from '../assets/images/limuru-2.png';
import limuru3 from '../assets/images/limuru-3.jpg';
import kakamega1 from '../assets/images/kakamega-1.png';
import kakamega2 from '../assets/images/kakamega-2.png';
import kakamega3 from '../assets/images/kakamega-3.jpg';
import joska1 from '../assets/images/joska-1.png';
import joska2 from '../assets/images/joska-2.png';
import joska3 from '../assets/images/joska-3.png';
import nun1 from '../assets/images/nun-1.png';
import nun2 from '../assets/images/nun-2.png';
import nun3 from '../assets/images/nun-3.jpg';
import nun4 from '../assets/images/nun-4.jpg';
import tanda1 from '../assets/images/tanda-1.png';
import tanda2 from '../assets/images/tanda-2.png';
import tanda3 from '../assets/images/tanda-3.jpg';
import tanda4 from '../assets/images/tanda-4.jpg';
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()

  const projectGalleries = {
    0: [athi, athi1, athi2, athi3],
    1: [stjames, stjames1, stjames2, stjames3],
    2: [limuru, limuru1, limuru2, limuru3],
    3: [kakamega, kakamega1, kakamega2, kakamega3],
    4: [joska, joska1, joska2, joska3],
    5: [nun, nun1, nun2, nun3, nun4],
    6: [ruiru],
    7: [sda],
    8: [tanda, tanda1, tanda2, tanda3, tanda4],
  };

  const projects = [
    {
      id: 0,
      image: athi,
      title: "The Athi Market MUD",
      details: "Strategically positioned in the heart of Athi Market- Machakos, this mixed-use project is designed to blend commerce, technology, and modern living.",
      location: "Athi Market, Machakos",
      timeline: "2023 - 2024",
      status: "Completed",
      scope: "Mixed-Use Development",
      area: "5,000 sq ft",
      category: "commercial",
      gallery: projectGalleries[0],
      features: [
        "Commercial retail spaces",
        "Modern technology integration",
        "Community-focused design",
        "Sustainable construction"
      ]
    },
    {
      id: 1,
      image: stjames,
      title: "The St. James Catholic Church",
      details: "Designed to serve as both a place of worship and a community landmark with a seating capacity of 250 parishioners.",
      location: "Nyahururu, Laikipia",
      timeline: "2022 - 2023",
      status: "Completed",
      scope: "Religious Building",
      area: "8,000 sq ft",
      category: "institutional",
      gallery: projectGalleries[1],
      features: [
        "250 seating capacity",
        "Timeless architectural design",
        "Community landmark",
        "Functional worship space"
      ]
    },
    {
      id: 2,
      image: limuru,
      title: "The Limuru Residential",
      details: "Modern 3-bedroom mansionette with a master ensuite, offering comfort, privacy, and elegance for private living and rental investment.",
      location: "Limuru, Kiambu",
      timeline: "2023 - 2024",
      status: "In Progress",
      scope: "Residential Development",
      area: "3,500 sq ft",
      category: "residential",
      gallery: projectGalleries[2],
      features: [
        "3-bedroom mansionette",
        "Master ensuite",
        "Rental investment units",
        "Modern amenities"
      ]
    },
    {
      id: 3,
      image: kakamega,
      title: "The Kakamega Maisonette",
      details: "Elegant 4-bedroom mansion with a master ensuite and dedicated study room in the lush surroundings of Kakamega.",
      location: "Kakamega",
      timeline: "2022 - 2023",
      status: "Completed",
      scope: "Residential",
      area: "4,200 sq ft",
      category: "residential",
      gallery: projectGalleries[3],
      features: [
        "4-bedroom mansion",
        "Master ensuite",
        "Dedicated study room",
        "Lush garden spaces"
      ]
    },
    {
      id: 4,
      image: joska,
      title: "The Joska Rentals",
      details: "Mixed residential development featuring a modern 3-bedroom bungalow with a master ensuite in the fast-growing Joska area.",
      location: "Joska, Machakos",
      timeline: "2023 - Present",
      status: "In Progress",
      scope: "Mixed Residential",
      area: "6,000 sq ft",
      category: "residential",
      gallery: projectGalleries[4],
      features: [
        "Mixed residential development",
        "3-bedroom bungalow",
        "Investment-focused design",
        "Modern amenities"
      ]
    },
    {
      id: 5,
      image: nun,
      title: "The Nun Residence",
      details: "Expansive 7-bedroom all-ensuite residence in the tranquil highlands of Nyahururu, embodying comfort, functionality, and elegance.",
      location: "Nyahururu, Laikipia",
      timeline: "2021 - 2022",
      status: "Completed",
      scope: "Luxury Residential",
      area: "12,000 sq ft",
      category: "luxury",
      gallery: projectGalleries[5],
      features: [
        "7-bedroom all-ensuite",
        "Luxury finishes",
        "Expansive living spaces",
        "Tranquil highland setting"
      ]
    },
    {
      id: 6,
      image: ruiru,
      title: "The Ruiru Home",
      details: "Spacious 5-bedroom maisonette designed for modern family living, currently under approvals with the County Council.",
      location: "Ruiru, Kiambu",
      timeline: "2024 - 2025",
      status: "Planning",
      scope: "Residential",
      area: "4,800 sq ft",
      category: "residential",
      gallery: projectGalleries[6],
      features: [
        "5-bedroom maisonette",
        "Modern family living",
        "Privacy-focused design",
        "Spacious layout"
      ]
    },
    {
      id: 7,
      image: sda,
      title: "The SDA Bahati Church",
      details: "Major redevelopment to transform the current sanctuary into a larger, modern worship space for a growing congregation.",
      location: "Bahati, Nakuru",
      timeline: "2023 - 2024",
      status: "In Progress",
      scope: "Religious Renovation",
      area: "10,000 sq ft",
      category: "institutional",
      gallery: projectGalleries[7],
      features: [
        "Expanded seating capacity",
        "Modern worship space",
        "Utility upgrades",
        "Growing congregation focus"
      ]
    },
    {
      id: 8,
      image: tanda,
      title: "The Tanda Office",
      details: "Modern interior office build redefining the workplace experience through functionality, style, and innovation.",
      location: "Kibera, Nairobi",
      timeline: "2023",
      status: "Completed",
      scope: "Commercial Interior",
      area: "3,000 sq ft",
      category: "commercial",
      gallery: projectGalleries[8],
      features: [
        "Modern interior design",
        "Collaborative workspaces",
        "Productivity-focused layout",
        "Professional atmosphere"
      ]
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects.filter(project => 
        searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects.filter(project => 
        project.category === filter && (
          searchTerm === '' || 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  const categories = [
    { id: 'all', label: 'All Projects', icon: SparklesIcon, count: projects.length },
    { id: 'residential', label: 'Residential', icon: HomeIcon, count: projects.filter(p => p.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', icon: BuildingOfficeIcon, count: projects.filter(p => p.category === 'commercial').length },
    { id: 'institutional', label: 'Institutional', icon: BuildingLibraryIcon, count: projects.filter(p => p.category === 'institutional').length },
    { id: 'luxury', label: 'Luxury', icon: SparklesIcon, count: projects.filter(p => p.category === 'luxury').length },
  ];

  const handleViewDetails = (projectIndex) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
    setShowScrollHint(true);
    setHasScrolled(false);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
    setShowScrollHint(true);
    setHasScrolled(false);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const gallery = projects[selectedProject].gallery;
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const gallery = projects[selectedProject].gallery;
      setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  useEffect(() => {
    if (selectedProject !== null && showScrollHint) {
      const timer = setTimeout(() => {
        setShowScrollHint(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [selectedProject, showScrollHint]);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedProject !== null) {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent && modalContent.scrollTop > 100) {
          setHasScrolled(true);
          setShowScrollHint(false);
        }
      }
    };

    if (selectedProject !== null) {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.addEventListener('scroll', handleScroll);
        return () => modalContent.removeEventListener('scroll', handleScroll);
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject !== null) {
        closeDetails();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  const selectedProjectData = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <>
<section className="container-responsive relative min-h-[500px] sm:min-h-[600px] bg-black/30 rounded-3xl sm:rounded-3xl lg:rounded-4xl">
        <div className="absolute inset-0 max-w-10xl mx-auto">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{
                   backgroundImage: `radial-gradient(#5E503F 1px, transparent 1px)`,
                   backgroundSize: '40px 40px sm:45px 45px lg:50px 50px'
                 }}>
            </div>
          </div>
        </div>

<div className="relative max-w-10xl mx-auto px-responsive pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-[#5E503F] tracking-wider uppercase">
                Our Portfolio
              </span>
            </div>
            
            <h1 className="text-responsive-lg font-thin mb-4 sm:mb-5 lg:mb-6">
              <span className="text-[#0A0908]">
                Building Excellence
              </span>
              <br />
              <span className="text-[#5E503F]">
                Across Kenya
              </span>
            </h1>
            
            <p className="text-responsive-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our diverse portfolio of innovative construction and design projects 
              that transform visions into reality.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#5E503F]" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-[#5E503F]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5E503F]/50 focus:border-transparent text-[#0A0908] placeholder-gray-500 shadow-sm text-sm sm:text-base"
              />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 lg:mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 border text-xs sm:text-sm ${filter === category.id
                      ? 'bg-[#5E503F] text-white border-[#5E503F] shadow-md'
                      : 'bg-white text-[#5E503F] border-[#5E503F]/30 hover:border-[#5E503F] hover:shadow-sm'
                  } mobile-touch`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${filter === category.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="font-medium">
                    {category.label}
                  </span>
                  <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full transition-all duration-300 ${filter === category.id
                      ? 'bg-white text-[#5E503F]'
                      : 'bg-[#5E503F]/10 text-[#5E503F] group-hover:bg-[#5E503F] group-hover:text-white'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Card */}
                  <div className="relative h-full bg-white rounded-lg sm:rounded-xl overflow-hidden border border-[#5E503F]/10 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : project.status === 'In Progress' 
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Project Number */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border border-[#5E503F]/20 flex items-center justify-center text-[#5E503F] font-bold text-xs sm:text-sm shadow-sm">
                        {project.id + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5E503F]" />
                        <span className="text-xs text-gray-600">{project.location}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-[#0A0908] mb-2 group-hover:text-[#5E503F] transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {project.details}
                      </p>
                      
                      {/* Quick Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{project.area}</span>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="pt-3 sm:pt-4 border-t border-gray-100">
                        <motion.button
                          onClick={() => handleViewDetails(project.id)}
                          className="group/btn w-full flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-[#5E503F] hover:text-white bg-[#5E503F]/5 hover:bg-[#5E503F] py-2 sm:py-2.5 rounded-lg transition-all duration-300 mobile-touch"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Details</span>
                          <ArrowRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover border */}
                    <div className="absolute inset-0 border-2 border-[#5E503F] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10 sm:py-12 lg:py-16"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-full bg-white border border-[#5E503F]/20 flex items-center justify-center shadow-sm">
                <BuildingOfficeIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#5E503F]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A0908] mb-2">No Projects Found</h3>
              <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                {searchTerm ? 
                  `No projects match "${searchTerm}". Try a different search or browse all categories.` :
                  "We're working on new projects in this category. Check back soon!"
                }
              </p>
              {(searchTerm || filter !== 'all') && (
                <button
                  onClick={() => { setSearchTerm(''); setFilter('all'); }}
                  className="mt-3 sm:mt-4 text-sm font-medium text-[#5E503F] hover:text-[#0A0908] transition-colors duration-300 mobile-touch"
                >
                  Clear filters and show all projects
                </button>
              )}
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg sm:rounded-xl border border-[#5E503F]/10 p-4 sm:p-6 lg:p-8 shadow-sm"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {[
                { value: '50+', label: 'Projects Completed', color: '#5E503F' },
                { value: '10+', label: 'Years Experience', color: '#0A0908' },
                { value: '98%', label: 'Client Satisfaction', color: '#5E503F' },
                { value: '25+', label: 'Industry Awards', color: '#0A0908' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal - Responsive updates */}
      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetails}
              className="fixed inset-0 bg-[#0A0908]/90 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-4 sm:inset-6 lg:inset-8 z-50 overflow-hidden"
            >
              <div className="bg-[#eae5df] rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#5E503F]/20 h-full overflow-hidden flex flex-col shadow-xl">
                {/* Header */}
                <div className="p-4 sm:p-5 lg:p-6 border-b border-[#5E503F]/20 flex items-center justify-between bg-white/50">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A0908] truncate">
                      {selectedProjectData.title}
                    </h2>
                    <div className="flex items-center gap-2 sm:gap-3 mt-1 flex-wrap">
                      <span className="text-xs text-[#5E503F] bg-[#5E503F]/10 px-2 py-1 rounded-full whitespace-nowrap">
                        Project {selectedProject + 1}
                      </span>
                      <span className="text-xs text-gray-600 truncate">
                        {selectedProjectData.scope}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeDetails}
                    className="text-gray-500 hover:text-[#5E503F] p-2 rounded-full hover:bg-[#5E503F]/10 transition-colors duration-300 ml-2 flex-shrink-0 mobile-touch"
                    aria-label="Close details"
                  >
                    <XMarkIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto modal-content p-4 sm:p-5 lg:p-6">
                  {/* Image Gallery */}
                  <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden mb-4 group border border-[#5E503F]/20">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProjectData.gallery[currentImageIndex]}
                      alt={`${selectedProjectData.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5E503F] p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100 border border-[#5E503F]/20 mobile-touch"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5E503F] p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100 border border-[#5E503F]/20 mobile-touch"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#5E503F] px-2 sm:px-3 py-1 rounded-full text-xs border border-[#5E503F]/20">
                      {currentImageIndex + 1} / {selectedProjectData.gallery.length}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedProjectData.gallery.length > 1 && (
                    <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5 lg:mb-6 overflow-x-auto pb-2 scrollbar-hide">
                      {selectedProjectData.gallery.map((img, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded overflow-hidden transition-all duration-300 border ${currentImageIndex === idx
                              ? 'border-[#5E503F] scale-105'
                              : 'border-[#5E503F]/20 hover:border-[#5E503F]'
                            } mobile-touch`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Quick Info Section */}
                  <div className="mb-4 sm:mb-5 lg:mb-6 p-3 sm:p-4 bg-white rounded-lg border border-[#5E503F]/20">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { icon: MapPinIcon, label: 'Location', value: selectedProjectData.location },
                        { icon: CalendarIcon, label: 'Timeline', value: selectedProjectData.timeline },
                        { icon: UsersIcon, label: 'Status', value: selectedProjectData.status },
                        { icon: BuildingOfficeIcon, label: 'Area', value: selectedProjectData.area },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#5E503F]/10 mb-1.5 sm:mb-2">
                            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5E503F]" />
                          </div>
                          <div className="text-xs text-gray-600">{item.label}</div>
                          <div className="text-[#0A0908] font-medium text-xs sm:text-sm truncate">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A0908] mb-2 sm:mb-3 flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#5E503F]" />
                      Project Overview
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedProjectData.details}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A0908] mb-3 sm:mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {selectedProjectData.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-2.5 sm:p-3 rounded-lg border border-[#5E503F]/20"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5E503F]/10 flex items-center justify-center">
                              <span className="text-[#5E503F] font-bold text-xs">✓</span>
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Status */}
                  <div className="p-3 sm:p-4 bg-white rounded-lg border border-[#5E503F]/20">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A0908] mb-2">Project Status</h3>
                    <div className={`inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-sm ${selectedProjectData.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : selectedProjectData.status === 'In Progress' 
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current"></div>
                      <span className="font-medium">{selectedProjectData.status}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedProjectData.status === 'Completed' 
                        ? 'This project has been successfully delivered.'
                        : selectedProjectData.status === 'In Progress'
                        ? 'Currently under construction.'
                        : 'In the planning and approval phase.'
                      }
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-5 lg:p-6 border-t border-[#5E503F]/20 bg-white/50">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <motion.button
                      onClick={closeDetails}
                      className="flex-1 border border-[#5E503F] text-[#5E503F] hover:bg-[#5E503F]/5 px-4 py-2.5 rounded-lg font-medium transition-colors duration-300 mobile-touch"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Close
                    </motion.button>
                    <motion.button 
                      className="flex-1 bg-[#5E503F] hover:bg-[#0A0908] text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 border border-[#5E503F] mobile-touch"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={()=>(navigate("/contact-us"), window.scrollTo(0,0))}
                    >
                      Contact for Quote
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;