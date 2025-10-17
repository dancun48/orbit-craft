import React from "react";
import hero_image from "../assets/images/house9.jpg";
import { useNavigate } from "react-router-dom";

const Mission = () => {

  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] w-full">
        {/* Left section */}
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 w-full lg:w-1/2">
          <h4 className="text-xl sm:text-2xl lg:text-2xl py-3 lg:py-4 text-amber-50 font-light tracking-wide">
            Mission
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-white font-bold leading-tight mb-4 lg:mb-6">
            We do right by humans and the planet.
          </h1>
          <p className="py-4 lg:py-6 xl:py-8 text-lg sm:text-xl lg:text-2xl text-amber-50 mb-6 lg:mb-8 xl:mb-12 leading-relaxed">
            At Orbit Craft, we believe in crafting excellence with
            purpose—whether we are constructing environments, shaping products,
            or facilitating property ownership. Our approach is built on
            professionalism, integrity, and a commitment to delivering value
            that lasts.
          </p>
          <button onClick={()=>navigate('/projects')}  className="text-sm lg:text-base font-semibold w-full sm:w-48 border-2 border-amber-50 text-amber-50 py-4 lg:py-3 px-8 rounded-full cursor-pointer hover:bg-amber-50 hover:text-[#8B4513] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl self-start">
            LEARN HOW
          </button>
        </div>
        
        {/* Right section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-6 xl:p-8">
          <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={hero_image}
              alt="Orbit Craft Mission"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;