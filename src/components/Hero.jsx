import React from "react";
import hero_2 from '../assets/images/house10.jpg';
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-10">
      <div 
        className="flex flex-col justify-between text-white rounded-xl shadow-xl bg-cover bg-no-repeat bg-center w-full h-screen relative overflow-hidden"
        style={{ backgroundImage: `url(${hero_2})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f3a]/80 via-[#2c4a5b]/70 to-[#3d657c]/60"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 lg:gap-12 items-start justify-center p-6 lg:p-8 xl:p-12 h-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Reshaping <br />
            <span className="text-amber-300">Sustainable Construction</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-4xl">
            At Orbit Craft, we believe in crafting excellence with purpose—whether 
            we are constructing environments, shaping products, or facilitating
            property ownership. Our approach is built on professionalism,
            integrity, and a commitment to delivering value that lasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-4 lg:mt-8">
            <button onClick={()=>navigate('/projects')} className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
            <button onClick={()=>navigate('/projects')} className="border-2 border-amber-300 hover:bg-amber-300 hover:text-gray-900 cursor-pointer text-amber-300 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-amber-300/30 w-full max-w-2xl">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;