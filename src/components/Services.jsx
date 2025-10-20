import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isScrolling) {
            setIsScrolling(true);
            setActiveCard(prev => (prev + 1) % cards.length);
            setTimeout(() => setIsScrolling(false), 1500);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const section = document.getElementById('sectors-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isScrolling, cards.length]);

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-3 bg-[#EAE0D5]">
      <div
        id="sectors-section"
        className="flex flex-col rounded-xl sm:rounded-2xl shadow-xl bg-[#22333B] w-full max-w-10xl xl:max-w-10xl min-h-[600px] relative overflow-hidden border border-[#C6AC8F]"
      >
        {/* Header Section */}
        <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl py-1 sm:py-2 lg:py-3 text-[#C6AC8F] font-light tracking-wide uppercase">
                Core Services
              </h4>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-[#EAE0D5] font-bold leading-tight">
                Our Focus Areas
              </h1>
            </div>
            <button 
              onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} 
              className="text-xs w-30 h-30 sm:text-sm font-semibold border-2 border-[#C6AC8F] text-[#C6AC8F] py-4 px-4 sm:py-3 sm:px-3 rounded-full cursor-pointer hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-500 transform hover:scale-105 whitespace-nowrap self-start lg:self-auto"
            >
              LEARN MORE
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#EAE0D5] leading-relaxed sm:leading-loose max-w-4xl">
              At Orbit Craft, we are committed to shaping spaces that inspire and endure. Our ongoing projects span residential, commercial, and institutional developments—each designed with precision, functionality, and sustainability in mind.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative flex-1 mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-6 sm:pb-8 lg:pb-10 xl:pb-12">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300 text-sm sm:text-base md:text-lg"
              aria-label="Previous card"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300 text-sm sm:text-base md:text-lg"
              aria-label="Next card"
            >
              →
            </button>
          </div>

          {/* Cards Container */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] 2xl:h-[450px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-[#EAE0D5] shadow-lg sm:shadow-xl lg:shadow-2xl rounded-xl sm:rounded-2xl transition-all duration-700 ease-in-out flex flex-col lg:flex-row p-4 sm:p-5 md:p-6 lg:p-8 border-2 ${
                  index === activeCard
                    ? "translate-x-0 opacity-100 z-30 border-[#C6AC8F]"
                    : index < activeCard
                    ? "-translate-x-full opacity-0 z-10"
                    : "translate-x-full opacity-0 z-20"
                }`}
              >
                {/* Text Content */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-1 p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#5E503F] font-bold">
                      {card.number}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#0A0908] font-bold leading-tight sm:leading-snug">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#0A0908] mt-2 sm:mt-3 md:mt-4 lg:mt-6 leading-relaxed sm:leading-loose">
                    {card.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 flex-1">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md border border-[#5E503F]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === activeCard ? "bg-[#C6AC8F] scale-125" : "bg-[#5E503F]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;