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
            setTimeout(() => setIsScrolling(false), 1000);
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

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div
        id="sectors-section"
        className="flex flex-col rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] w-full min-h-[600px] relative overflow-hidden"
      >
        {/* Static Sectors Section */}
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
            <div className="flex flex-col mb-6 lg:mb-0">
              <h4 className="text-xl sm:text-2xl py-2 lg:py-4 text-amber-100 font-light tracking-wide">
                Sectors
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
                Our Focus Areas
              </h1>
            </div>
            <button onClick={()=>navigate('/projects')} className="text-sm lg:text-base font-semibold  cursor-pointer border-2 border-amber-100 text-amber-100 py-3 lg:py-4 px-6 lg:px-8 rounded-full cursor-pointer hover:bg-amber-100 hover:text-[#8B4513] transition-all duration-500 transform hover:scale-105 self-start lg:self-auto">
              EXPLORE SECTORS
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-50 leading-relaxed">
              We bring our expertise to multiple construction sectors, developing the industry's future and redefining what is possible, one project at a time.
            </p>
          </div>
        </div>

        {/* Sliding Cards */}
        <div className="relative flex-1 mt-8 lg:mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-4 lg:inset-8 bg-white shadow-lg rounded-2xl transition-all duration-1000 ease-in-out flex flex-col lg:flex-row p-6 lg:p-8 ${
                index === activeCard
                  ? "translate-y-0 opacity-100 z-30"
                  : index < activeCard
                  ? "-translate-y-full opacity-0 z-10"
                  : "translate-y-full opacity-0 z-20"
              }`}
            >
              {/* Left side */}
              <div className="flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 flex-1">
                <div className="flex flex-col gap-3">
                  <span className="text-xl lg:text-2xl text-[#8B4513] font-bold">{card.number}</span>
                  <p className="text-2xl lg:text-4xl text-gray-800 font-bold">{card.title}</p>
                </div>
                <p className="text-base lg:text-lg text-gray-600 mt-4 lg:mt-6 leading-relaxed">
                  {card.description}
                </p>
              </div>
              {/* Right side */}
              <div className="flex items-center justify-center p-4 lg:p-6 flex-1">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 lg:h-64 xl:h-80 object-cover rounded-xl lg:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;