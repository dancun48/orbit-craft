import React from "react";
import house8 from "../assets/images/house8.jpg";
import Team from "./Team";
import Solutions from "../pages/Solution";

const OurStory = () => {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-5 sm:py-5 lg:py-5 bg-[#EAE0D5]">
        <div className="max-w-10xl mx-auto">
          <div className="flex lg:flex-row rounded-3xl sm:rounded-4xl shadow-lg bg-[#dac6ae] border border-[#C6AC8F] overflow-hidden h-[700px]">
            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0908] mb-4 lg:mb-6 pt-10">
                Meet Orbit Craft Team
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-800">
                <p className="text-md leading-relaxed text-justify">
                  Orbit Craft is a multidisciplinary company specializing in
                  building and product design consulting, construction, and real
                  estate services. We bring together creativity, technical
                  expertise, and industry experience to deliver solutions that shape
                  spaces, products, and investments for the future.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our work spans across three core areas:
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Design & Consulting */}
                  <div className="border-l-4 border-[#C6AC8F] pl-4 sm:pl-6 py-2">
                    <h3 className="text-xl font-semibold text-[#0A0908] mb-2">
                      Design & Consulting
                    </h3>
                    <p className="text-base text-gray-700">
                      Providing innovative building and product design solutions
                      tailored to function, aesthetics, and sustainability.
                    </p>
                  </div>
                  
                  {/* Construction & Product Build */}
                  <div className="border-l-4 border-[#C6AC8F] pl-4 sm:pl-6 py-2">
                    <h3 className="text-xl font-semibold text-[#0A0908] mb-2">
                      Construction & Product Build
                    </h3>
                    <p className="text-base text-gray-700">
                      Executing projects with precision, quality, and efficiency,
                      from groundbreaking structures to crafted product builds.
                    </p>
                  </div>
                  
                  {/* Real Estate Services */}
                  <div className="border-l-4 border-[#C6AC8F] pl-4 sm:pl-6 py-2">
                    <h3 className="text-xl font-semibold text-[#0A0908] mb-2">
                      Real Estate Services
                    </h3>
                    <p className="text-base text-gray-700">
                      Guiding clients through property acquisition, sales, and
                      investment with expert market insights and trusted advisory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 xl:p-12 flex items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-[#C6AC8F] group">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={house8}
                  alt="Orbit Craft headquarters or team project showcase"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Solutions />
      <Team />
    </>
  );
};

export default OurStory;