import React from "react";
import OurStory from "../components/OurStory";
import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
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

  return (
    <>
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Main Projects Section */}
        <div className="flex flex-col rounded-xl shadow-xl mb-8 lg:mb-12 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] min-h-[600px]">
          <div className="p-6 lg:p-8 xl:p-12">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 lg:pt-20 mb-8 lg:mb-12">
              {/* Left section */}
              <div className="flex-1 mb-6 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                  Expertise
                </h1>
              </div>
              {/* Right section */}
              <div className="flex-1 lg:px-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 leading-relaxed">
                  We bring our innovative touch to every project, proving that nothing is impossible.
                </p>
              </div>
            </div>
            <hr className="border-amber-200/30 mb-8 lg:mb-12" />
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-6 lg:py-8">
              {cards.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-amber-200/20 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 lg:h-56 xl:h-64 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      src={item.image} 
                      alt={item.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-amber-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-lg lg:text-xl font-bold shadow-lg">
                      {item.number}
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-4 lg:p-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4 leading-tight group-hover:text-amber-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-amber-50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </div>
    <ProjectsList />
    </>
  );
};

export default Projects;