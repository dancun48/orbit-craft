import React from "react";
import athi from '../assets/images/athi.png';
import stjames from '../assets/images/stjames.png'
import limuru from '../assets/images/limuru.png'
import kakamega from '../assets/images/kakamega.png'
import joska from '../assets/images/joska.png';
import nun from '../assets/images/nun.png';
import ruiru from '../assets/images/ruiru.png';
import sda from '../assets/images/sda.png';
import tanda from '../assets/images/tanda.png';

const ProjectsList = () => {
  const projects = [
    {
      image: athi,
      title: "The Athi Market MUD",
      details: "Strategically positioned in the heart of Athi Market- Meru, this mixed-use project is designed to blend commerce, technology, and modern living. The front-facing commercial stalls—including a cyber café, eatery, and cosmetics shop—create a vibrant street frontage that supports local business and community interaction.",
    },
    {
      image: stjames,
      title: "The St. James Catholic Church",
      details: "Designed to serve as both a place of worship and a community landmark, St. James Catholic Church in Nyahururu was a thoughtfully planned religious project with a seating capacity of 250 parishioners. The church combines functional layout with timeless architectural expression.",
    },
    {
      image: limuru,
      title: "The Limuru Residential",
      details: "This development brings together the best of private living and rental investment within one property. At its core is a modern 3-bedroom mansionette with a master ensuite, designed to offer comfort, privacy, and elegance for the owner's residence.",     
    },
    {
      image: kakamega,
      title: "The Kakamega Maisonette",
      details: "Nestled in the lush surroundings of Kakamega, this elegant 4-bedroom mansion with a master ensuite combines modern comfort with refined living. A dedicated study room adds versatility, providing the ideal space for work, learning, or quiet reflection.",
    },
    {
      image: joska,
      title: "The Joska Rentals",
      details: "Located in the fast-growing Joska area of Machakos County, The Joska Rentals is a mixed residential development designed to meet both lifestyle and investment needs. At the heart of the project is a modern 3-bedroom bungalow with a master ensuite.",
    },
    {
      image: nun,
      title: "The Nun Residence",
      details: "Set in the tranquil highlands of Nyahururu, The Nun Residence is a landmark project that embodies comfort, functionality, and elegance. This expansive 7-bedroom all-ensuite residence is thoughtfully designed to offer both privacy and luxury for its occupants.",
    },
    {
      image: ruiru,
      title: "The Ruiru Home",
      details: "Currently under approvals with the County Council, this upcoming development in Ruiru is a spacious 5-bedroom maisonette designed for modern family living. The home features all its spaces thoughtfully planned for comfort and privacy.",
    },
    {
      image: sda,
      title: "The SDA Bahati Church",
      details: "The SDA Bahati Church is undertaking a major redevelopment to transform its current sanctuary into a larger, modern worship space designed to accommodate a growing congregation. The project focuses on expanding seating capacity and upgrading essential utilities.",
    },
    {
      image: tanda,
      title: "The Tanda Office",
      details: "The Tanda Office project is a modern interior office build that redefines the workplace experience through functionality, style, and innovation. Located in Nairobi, this office space was designed to foster collaboration, productivity, and a professional atmosphere.",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="w-full">
        <div className="flex flex-col rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E]">
          {/* Header Section */}
          <div className="p-6 lg:p-8 xl:p-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 lg:mb-6">
              Projects
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 mb-6 lg:mb-8 leading-relaxed">
              Discover our diverse portfolio of innovative construction and design projects across Kenya.
            </p>
            <hr className="border-amber-200/30 mb-8 lg:mb-12" />
          </div>

          {/* Projects List in Rows */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group transition-all duration-500 hover:bg-white/5"
              >
                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 p-6 lg:p-8 xl:p-10 border-b border-amber-200/20 last:border-b-0">
                  {/* Project Image */}
                  <div className="w-full lg:w-1/3 xl:w-1/4 mb-4 lg:mb-0">
                    <div className="relative h-48 lg:h-56 xl:h-64 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/40 to-transparent"></div>
                      <div className="absolute top-3 left-3 bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 lg:mb-4">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2 lg:mb-0 group-hover:text-amber-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-amber-200 text-sm lg:text-base font-medium bg-amber-500/20 px-3 py-1 rounded-full inline-block lg:inline">
                        Project {index + 1}
                      </span>
                    </div>
                    
                    <p className="text-base lg:text-lg text-amber-50 mb-6 lg:mb-8 leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1 sm:flex-none text-center">
                        VISIT GALLERY
                      </button>
                      <button className="border-2 border-amber-300 hover:bg-amber-300 hover:text-[#8B4513] text-amber-300 py-3 lg:py-4 px-6 lg:px-8 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 flex-1 sm:flex-none text-center">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center p-6 lg:p-8 xl:p-12 border-t border-amber-200/30">
            <button className="bg-amber-500 hover:bg-amber-600 text-white py-4 lg:py-5 px-10 lg:px-16 rounded-full text-lg lg:text-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              EXPLORE MORE PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;