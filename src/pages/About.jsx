import React from "react";
import house6 from "../assets/images/house6.jpg";
import Team from "../components/Team";
import OurStory from "../components/OurStory";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-1 bg-[#EAE0D5] mt-16">
        <div className="w-full max-w-10xl">
          <div className="flex flex-col rounded-xl shadow-lg mb-8 lg:mb-3 bg-[#22333B] min-h-[600px] border border-[#C6AC8F]">
            <div className="p-6 lg:p-8 xl:p-12">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 lg:pt-12 mb-8 lg:mb-12">
                <div className="flex-1 mb-6 lg:mb-0">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EAE0D5]">
                    Meet Orbit Craft Consultants Limited
                  </p>
                </div>
                <div className="flex-1 lg:px-8">
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] leading-relaxed">
                    We provide environmentally conscious design, construction, and management services for a variety of projects.
                  </p>
                </div>
              </div>

              <hr className="border-[#5E503F] mb-8 lg:mb-12" />

              <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-8 py-6 lg:py-8">
                <div className="bg-[#0A0908] p-6 lg:p-8 rounded-2xl flex-1 border border-[#C6AC8F]">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 font-semibold text-[#EAE0D5]">
                    Our Vision
                  </h3>
                  <span className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] leading-relaxed">
                    To be the most trusted and innovative real estate solutions provider in East Africa.
                  </span>
                </div>

                <div className="flex items-center justify-center lg:mx-4 my-6 lg:my-0">
                  <div className="relative w-full h-48 lg:h-64 xl:h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#C6AC8F]">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      src={house6}
                      alt="Orbit Craft Projects"
                    />
                    <div className="absolute inset-0 bg-[#0A0908]/20"></div>
                  </div>
                </div>

                <div className="bg-[#0A0908] p-6 lg:p-8 rounded-2xl flex-1 border border-[#C6AC8F]">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 font-semibold text-[#EAE0D5]">
                    Our Mission
                  </h3>
                  <span className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] leading-relaxed">
                    To design, develop, and deliver exceptional real estate products & solutions that offer value for money while enhancing the quality of urban & country living through upholding sustainability and innovation.
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