import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";

const Focus = () => {
  const [activeCard, setActiveCard] = useState(0);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const cards = [
    {
      number: "01",
      image: resid,
      title: "Residential & Commercial Building Design",
      description: "Conceptualization | Schematics | Architectural | Civil & Structural | MEP | Landscapes | Green Building Solutions",
    },
    {
      number: "02",
      image: int,
      title: "Interior Design",
      description: "Space Planning & Optimization | Lighting & Acoustic Design | Furniture Layouts | Interior Themes | Smart Housing Solutions",
    },
    {
      number: "03",
      image: prod,
      title: "Product Design",
      description: "Custom Furniture & Fixtures | Sustainable Material & Modular Products | Branded Property Products",
    },
    {
      number: "04",
      image: build,
      title: "Building Construction & Property Management",
      description: "Turnkey Construction Solutions | Contract Administration | Time, Cost & Quality Control | Health & Safety Management",
    },
    {
      number: "05",
      image: estate,
      title: "Real Estate Development Advisory & Agency",
      description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory | Project Finance Advisory",
    },
  ];

  const handleNext = () => {
    if (activeCard < cards.length - 1) {
      setActiveCard(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeCard > 0) {
      setActiveCard(prev => prev - 1);
    }
  };

  // Auto scroll to active card
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 300;
      scrollRef.current.scrollTo({
        left: activeCard * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeCard]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-5 sm:py-5 lg:py-5 bg-[#EAE0D5]">
      <div className="max-w-10xl mx-auto">
        <div className="rounded-3xl sm:rounded-4xl shadow-xl bg-gradient-to-br from-[#EAE0D5] to-[#D9CBB8] overflow-hidden border border-[#C6AC8F]">
          
          {/* Content Section - Full Width */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
            {/* Header */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-6">
                <div className="flex-1">
                  <span className="inline-block text-sm sm:text-base font-medium tracking-widest uppercase text-[#5E503F] border-b-2 border-[#C6AC8F] pb-2">
                    Core Services
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A0908] mt-4 mb-4 leading-tight">
                    Our Focus Areas
                  </h2>
                </div>
                <button 
                  onClick={() => { 
                    navigate('/services'); 
                    window.scrollTo({ top: 0, behavior: "smooth" }); 
                  }} 
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 
                           text-sm sm:text-base font-semibold text-[#5E503F] border-2 border-[#5E503F] 
                           rounded-full overflow-hidden transition-all duration-500 hover:text-white 
                           focus:outline-none focus:ring-2 focus:ring-[#5E503F] focus:ring-offset-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    VIEW ALL SERVICES
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-[#5E503F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose max-w-4xl">
                At Orbit Craft, we are committed to shaping spaces that inspire and endure. Our ongoing projects span residential, commercial, and institutional developments—each designed with precision, functionality, and sustainability in mind.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      activeCard === index 
                        ? "bg-[#5E503F] scale-125" 
                        : "bg-[#C6AC8F]"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                           border-2 border-[#5E503F] text-[#5E503F] rounded-full 
                           hover:bg-[#5E503F] hover:text-white transition-all duration-300 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={activeCard === 0}
                  aria-label="Previous service"
                >
                  <FaArrowLeft />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center 
                           border-2 border-[#5E503F] text-[#5E503F] rounded-full 
                           hover:bg-[#5E503F] hover:text-white transition-all duration-300 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={activeCard === cards.length - 1}
                  aria-label="Next service"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Main Card Display */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-[#C6AC8F] p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg mb-6 sm:mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl md:text-2xl text-[#5E503F] font-bold mb-3 sm:mb-4">
                    {cards[activeCard].number}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0A0908] 
                               font-bold mb-4 sm:mb-6 leading-tight">
                    {cards[activeCard].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#0A0908]/80 
                             leading-relaxed sm:leading-loose">
                    {cards[activeCard].description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="relative">
                  <img
                    src={cards[activeCard].image}
                    alt={cards[activeCard].title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl 
                             sm:rounded-2xl shadow-md border border-[#5E503F]/20"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm 
                                rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#C6AC8F]/30 
                                shadow-sm">
                    <span className="text-sm sm:text-base font-medium text-[#5E503F]">
                      {cards[activeCard].number}
                    </span>
                    <h4 className="text-base sm:text-lg md:text-xl text-[#0A0908] font-bold mt-1">
                      {cards[activeCard].title.split(' ').slice(0, 3).join(' ')}...
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Counter */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <span className="text-sm sm:text-base text-[#5E503F] font-medium bg-white/80 
                             backdrop-blur-sm px-4 py-2 rounded-full border border-[#C6AC8F]/30">
                {activeCard + 1} / {cards.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;