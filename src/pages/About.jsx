import React from "react";
import house6 from "../assets/images/house6.jpg";
import Team from "../components/Team";
import OurStory from "../components/OurStory";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Main About Section */}
          <div className="flex flex-col rounded-xl shadow-xl mb-8 lg:mb-12 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] min-h-[600px]">
            <div className="p-6 lg:p-8 xl:p-12">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-15 lg:pt-20 mb-8 lg:mb-12">
                {/* Left section */}
                <div className="flex-1 mb-6 lg:mb-0">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                    Meet OrbitCraft Consultants Limited
                  </p>
                </div>
                {/* Right section */}
                <div className="flex-1 lg:px-8">
                  <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 leading-relaxed">
                    We provide environmentally conscious design, construction,
                    and management services for a variety of projects.
                  </p>
                </div>
              </div>

              <hr className="border-amber-200/30 mb-8 lg:mb-12" />

              {/* Vision & Mission Section */}
              <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-8 py-6 lg:py-8">
                {/* Vision Card */}
                <div className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl flex-1 border border-amber-200/20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 font-semibold text-white">
                    Our Vision
                  </h3>
                  <span className="text-lg sm:text-xl lg:text-2xl text-amber-50 leading-relaxed">
                    To be the most trusted and innovative real estate solutions
                    provider in East Africa.
                  </span>
                </div>

                {/* Center Image */}
                <div className="flex items-center justify-center lg:mx-4 my-6 lg:my-0">
                  <div className="relative w-full h-48 lg:h-64 xl:h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      src={house6}
                      alt="OrbitCraft Projects"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 to-transparent"></div>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl flex-1 border border-amber-200/20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 font-semibold text-white">
                    Our Mission
                  </h3>
                  <span className="text-lg sm:text-xl lg:text-2xl text-amber-50 leading-relaxed">
                    To design, develop, and deliver exceptional real estate
                    products & solutions that offer value for money while
                    enhancing the quality of urban & country living through
                    upholding sustainability and innovation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurStory />
      <Team />
    </>
  );
};

export default About;
