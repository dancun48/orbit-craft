import React from "react";
import OurStory from "../components/OurStory";
import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";
import ProjectsList from '../components/ProjectsList'

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
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-17 pb-3 bg-[#EAE0D5] mt-16">
        <div className="w-full max-w-10xl">
          <div className="flex flex-col rounded-xl shadow-lg mb-2 bg-[#22333B] min-h-[600px] border border-[#C6AC8F]">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 lg:pt-12 mb-8 lg:mb-12">
                <div className="flex-1 mb-6 lg:mb-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EAE0D5]">
                    Our Services
                  </h1>
                </div>
                <div className="flex-1 lg:px-8">
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] leading-relaxed">
                    We bring our innovative touch to every project, proving that nothing is impossible.
                  </p>
                </div>
              </div>

              <hr className="border-[#5E503F] mb-8 lg:mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-6 lg:py-8">
                {cards.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0A0908] rounded-2xl border border-[#C6AC8F] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="relative h-48 lg:h-56 xl:h-64 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        src={item.image} 
                        alt={item.title} 
                      />
                      <div className="absolute inset-0 bg-[#0A0908]/40"></div>
                      <div className="absolute top-4 left-4 bg-[#C6AC8F] text-[#0A0908] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-lg lg:text-xl font-bold shadow-lg border border-[#EAE0D5]">
                        {item.number}
                      </div>
                    </div>
                    
                    <div className="p-4 lg:p-6">
                      <h3 className="text-xl lg:text-2xl font-semibold text-[#EAE0D5] mb-3 lg:mb-4 leading-tight group-hover:text-[#C6AC8F] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-[#C6AC8F] leading-relaxed">
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
    </>
  );
};

export default Projects;