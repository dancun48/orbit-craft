import React from "react";
import house2 from "../assets/images/house2.jpg";
import { useNavigate } from "react-router-dom";
import Future from "./Future";

const Solution = () => {

  const navigate = useNavigate();

  const cards = [
    {
      number: "01",
      title: "Green Building",
      details: "Using sustainable materials and designs to reduce environmental impact."
    },
    {
      number: "02",
      title: "Smart Design",
      details: "Incorporating efficient technologies to optimize performance"
    },
    {
      number: "03",
      title: "Renewable Energy",
      details: "Integrating solar and other renewable energy solutions into designs."
    },
    {
      number: "04",
      title: "Eco-Friendly",
      details: "Ensuring that all designs promote sustainability and environmental stewardship."
    },
  ];

  return (
    <>
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-10">
      <div className="w-full">
        <div className="flex flex-col rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] min-h-[600px]">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-8 xl:p-12 gap-6 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Sustainability & Innovation
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 mt-4 lg:mt-6 leading-relaxed">
                Pioneering eco-conscious construction solutions that blend innovation with environmental responsibility for a greener future.
              </p>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-center mt-20">
              <div className="relative w-full max-w-md h-100 sm:h-56 lg:h-100 xl:h-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={house2} 
                  alt="Sustainable Construction" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <hr className="border-amber-200/30 mx-6 lg:mx-12 mb-8 lg:mb-12" />

          {/* Cards Grid */}
          <div className="p-6 lg:p-8 xl:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-amber-200/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Number Badge */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl lg:text-2xl mb-4 lg:mb-6 shadow-lg group-hover:bg-amber-600 transition-colors duration-300">
                    {card.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4 group-hover:text-amber-200 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-amber-50 leading-relaxed">
                    {card.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center p-6 lg:p-8 xl:p-12 border-t border-amber-200/30">
            <button onClick={()=>navigate('/solutions')} className=" cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-4 lg:py-5 px-8 lg:px-12 rounded-full text-lg lg:text-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              LEARN ABOUT OUR SOLUTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
    <Future />
    </>
  );
};

export default Solution;