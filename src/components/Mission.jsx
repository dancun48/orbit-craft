import React from "react";
import storyimage from "../assets/images/storyimage.jpg";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-5 sm:py-5 lg:py-5 bg-[#EAE0D5]">
      <div className="max-w-10xl mx-auto">
        <div className="flex lg:flex-row rounded-3xl sm:rounded-4xl shadow-xl bg-[#eae5df] overflow-hidden border border-[#C6AC8F] h-[700px]">
          {/* Content Section */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 w-full lg:w-1/2">
            <div className="mb-4">
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#5A503C] border-b-2 border-[#C6AC8F] pb-2">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A0908] mb-6 lg:mb-8 leading-tight">
              Crafting Excellence with Purpose
            </h2>

            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose mb-8 lg:mb-10">
              At Orbit Craft, we believe in crafting excellence with
              purpose—whether we are constructing environments, shaping
              products, or facilitating property ownership. Our approach is
              built on professionalism, integrity, and a commitment to
              delivering value that lasts.
            </p>

            <button
              onClick={() => navigate("/about")}
              aria-label="Learn more about our story"
              className="group relative inline-flex items-center justify-center w-fit px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#C6AC8F] border-2 border-[#C6AC8F] rounded-full overflow-hidden transition-all duration-500 hover:text-[#0A0908] focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] focus:ring-offset-2"
            >
              <span className="relative z-10">LEARN MORE</span>
              <span className="absolute inset-0 bg-[#C6AC8F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-5600px] m-10">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-0">
                  {" "}
                  <img
                    src={storyimage}
                    alt="Orbit Craft team working on a construction project"
                    className="w-full h-full object-cover rounded-2xl rounded-2xl lg:rounded-2xl shadow-lg"
                    loading="lazy"
                  />
              {/* Optional overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-transparent to-transparent lg:via-transparent pointer-events-none rounded-r-2xl lg:rounded-l-none rounded-2xl lg:rounded-r-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
