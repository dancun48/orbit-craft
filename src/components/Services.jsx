import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import hero_image from "../assets/images/house11.jpg";
import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";


const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate()

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
        description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory - Land Acquisition & Property Development | Project Finance Advisory",
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
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 bg-[#EAE0D5]">
      <div
        id="sectors-section"
        className="flex flex-col rounded-xl shadow-xl bg-[#22333B] w-full max-w-10xl min-h-[600px] relative overflow-hidden border border-[#C6AC8F]"
      >
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
            <div className="flex flex-col mb-6 lg:mb-0">
              <h4 className="text-xl py-2 lg:py-4 text-[#C6AC8F] font-light tracking-wide uppercase">
                Core Services
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl text-[#EAE0D5] font-bold">
                Our Focus Areas
              </h1>
            </div>
            <button onClick={()=>{navigate('/projects'); window.scrollTo(0,0)}} className="text-sm font-semibold border-2 border-[#C6AC8F] text-[#C6AC8F] py-2 px-4 rounded-full w-30 h-30 cursor-pointer hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-500 transform hover:scale-105 self-start lg:self-auto">
              VIEW ALL PROJECTS
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-lg sm:text-xl lg:text-2xl text-[#EAE0D5] leading-relaxed max-w-4xl">
              At Orbit Craft, we are committed to shaping spaces that inspire and endure. Our ongoing projects span residential, commercial, and institutional developments—each designed with precision, functionality, and sustainability in mind.
            </p>
          </div>
        </div>

        <div className="relative flex-1 mt-8 lg:mt-12 px-6 lg:px-8 xl:px-12 pb-8 lg:pb-12">
          <div className="flex justify-end gap-4 mb-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300"
            >
              →
            </button>
          </div>

          <div className="relative h-96 lg:h-[400px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-[#EAE0D5] shadow-2xl rounded-2xl transition-all duration-700 ease-in-out flex flex-col lg:flex-row p-6 lg:p-8 border-2 ${
                  index === activeCard
                    ? "translate-x-0 opacity-100 z-30 border-[#C6AC8F]"
                    : index < activeCard
                    ? "-translate-x-full opacity-0 z-10"
                    : "translate-x-full opacity-0 z-20"
                }`}
              >
                <div className="flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 flex-1">
                  <div className="flex flex-col gap-3">
                    <span className="text-xl lg:text-2xl text-[#5E503F] font-bold">{card.number}</span>
                    <h3 className="text-2xl lg:text-4xl text-[#0A0908] font-bold">{card.title}</h3>
                  </div>
                  <p className="text-base lg:text-lg text-[#0A0908] mt-4 lg:mt-6 leading-relaxed">
                    {card.description}
                  </p>
                  <button  onClick={()=>{navigate('/projects'); window.scrollTo(0,0)}} className="text-sm font-semibold border-2 border-[#5E503F] text-[#5E503F] py-4 px-4 md:h-20 md:w-20 sm:w-fit rounded-full cursor-pointer hover:bg-[#5E503F] hover:text-[#EAE0D5] transition-all duration-300 mt-4">
                    LEARN MORE
                  </button>
                </div>
                <div className="flex items-center justify-center p-4 lg:p-6 flex-1">
                  <img
                    src={hero_image}
                    alt={card.title}
                    className="w-full h-48 lg:h-64 object-cover rounded-xl lg:rounded-2xl shadow-lg border border-[#5E503F]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCard ? "bg-[#C6AC8F] scale-125" : "bg-[#5E503F]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;