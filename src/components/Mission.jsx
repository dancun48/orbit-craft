import React from "react";
import hero_image from "../assets/images/house9.jpg";
import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-[#EAE0D5]">
      <div className="flex flex-col lg:flex-row rounded-xl shadow-xl bg-[#22333B] w-full max-w-10xl border border-[#C6AC8F]">
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 w-full lg:w-1/2">
          <h4 className="text-xl py-3 lg:py-4 text-[#C6AC8F] font-light tracking-wide uppercase">
            Our Mission
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl text-[#EAE0D5] font-bold leading-tight mb-4 lg:mb-6">
            To design, develop, and deliver exceptional real estate solutions
          </h1>
          <p className="py-4 lg:py-6 xl:py-8 text-xl text-[#EAE0D5]/90 mb-6 lg:mb-8 xl:mb-12 leading-relaxed">
            We create real estate products that offer value for money while enhancing 
            the quality of urban & country living through upholding sustainability and innovation. 
            Our approach combines functionality, precision, and timeless design to deliver 
            spaces that inspire and endure.
          </p>
          <button onClick={()=>navigate('/about')} className="text-sm lg:text-base w-30 h-30 font-semibold border-2 border-[#C6AC8F] text-[#C6AC8F] py-3 px-8 rounded-full cursor-pointer hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl self-start">
            LEARN HOW
          </button>
        </div>
        
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 w-full lg:w-1/2 bg-[#0A0908] border-l-0 lg:border-l border-[#C6AC8F]">
          <h4 className="text-xl py-3 lg:py-4 text-[#C6AC8F] font-light tracking-wide uppercase">
            Our Vision
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl text-[#EAE0D5] font-bold leading-tight mb-4 lg:mb-6">
            To be the most trusted and innovative real estate solutions provider in East Africa
          </h1>
          <p className="py-4 lg:py-6 xl:py-8 text-xl text-[#EAE0D5]/90 mb-6 lg:mb-8 xl:mb-12 leading-relaxed">
            At Orbit Craft, we are committed to shaping spaces that inspire and endure. 
            Our projects span residential, commercial, and institutional developments—each 
            designed with precision, functionality, and sustainability in mind.
          </p>
          <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[400px] rounded-2xl overflow-hidden shadow-2xl mt-4">
            <img
              src={hero_image}
              alt="Orbit Craft Vision"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#0A0908] opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;