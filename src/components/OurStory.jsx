import React from "react";
import house8 from "../assets/images/house8.jpg";
import Team from "./Team";
import Solutions from "../pages/Solution";
import { useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-10xl mx-auto">
          <div className="flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-xl bg-[#eae5df] overflow-hidden border border-[#C6AC8F] min-h-[800px] lg:h-[800px]">
            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 w-full lg:w-1/2 lg:overflow-y-auto bg-[#E5D4C4]">
              <div className="mb-4 mt-10">
                <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#5A503C] border-b-2 border-[#C6AC8F] pb-2">
                  our company
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#0A0908] mb-4 lg:mb-6 leading-tight">
                Meet Orbit Craft Team
              </h2>

              <div className="space-y-4 mb-2">
                <p className="text-gray-700 text-base leading-relaxed sm:leading-loose">
                  Orbit Craft is a multidisciplinary company specializing in
                  building and product design consulting, construction, and real
                  estate services. We bring together creativity, technical
                  expertise, and industry experience to deliver solutions that shape
                  spaces, products, and investments for the future.
                </p>

                <p className="text-gray-700 text-base leading-relaxed sm:leading-loose font-medium">
                  Our work spans across three core areas:
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 lg:mb-10">
                {/* Design & Consulting */}
                <div className="border-2 border-[#C6AC8F] px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-[#0A0908] mb-1">
                    Design & Consulting
                  </h3>
                  <p className="text-sm text-gray-700">
                    Providing innovative building and product design solutions
                    tailored to function, aesthetics, and sustainability.
                  </p>
                </div>
                
                {/* Construction & Product Build */}
                <div className="border-2 border-[#C6AC8F] px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-[#0A0908] mb-1">
                    Construction & Product Build
                  </h3>
                  <p className="text-sm text-gray-700">
                    Executing projects with precision, quality, and efficiency,
                    from groundbreaking structures to crafted product builds.
                  </p>
                </div>
                
                {/* Real Estate Services */}
                <div className="border-2 border-[#C6AC8F] px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-[#0A0908] mb-1">
                    Real Estate Services
                  </h3>
                  <p className="text-sm text-gray-700">
                    Guiding clients through property acquisition, sales, and
                    investment with expert market insights and trusted advisory.
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <button
                  onClick={() => navigate("/services")}
                  aria-label="Learn more about our story"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-2 text-sm font-semibold text-[#C6AC8F] border-2 border-[#C6AC8F] rounded-full overflow-hidden transition-all duration-500 hover:text-[#0A0908] focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-offset-2"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-[#C6AC8F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] lg:h-[700px] sm:mt-auto lg:mt-10">
              <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 xl:p-10">
                <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={house8}
                    alt="Orbit Craft headquarters or team project showcase"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
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