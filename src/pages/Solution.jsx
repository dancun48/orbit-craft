import React from "react";
import house2 from "../assets/images/house2.jpg";
import Future from "./Future";

const Solution = () => {
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
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-17 pb-3 bg-[#EAE0D5] mt-16">
        <div className="w-full max-w-10xl">
          <div className="flex flex-col rounded-xl shadow-lg bg-[#22333B] min-h-[600px] border border-[#C6AC8F]">
            <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-8 xl:p-12 gap-6 lg:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#EAE0D5] leading-tight">
                  Sustainability Goals
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] mt-4 lg:mt-6 leading-relaxed">
                  Pioneering eco-conscious construction solutions that blend innovation with environmental responsibility for a greener future.
                </p>
              </div>
              
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md h-48 sm:h-56 lg:h-64 xl:h-72 rounded-2xl overflow-hidden shadow-2xl border border-[#C6AC8F]">
                  <img 
                    src={house2} 
                    alt="Sustainable Construction" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-[#0A0908]/20"></div>
                </div>
              </div>
            </div>

            <hr className="border-[#5E503F] mx-6 lg:mx-12 mb-8 lg:mb-12" />

            <div className="p-6 lg:p-8 xl:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {cards.map((card, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0A0908] p-6 lg:p-8 rounded-2xl border border-[#C6AC8F] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#C6AC8F] rounded-full flex items-center justify-center text-[#0A0908] font-bold text-xl lg:text-2xl mb-4 lg:mb-6 shadow-lg group-hover:bg-[#EAE0D5] transition-colors duration-300 border-2 border-[#C6AC8F]">
                      {card.number}
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#EAE0D5] mb-3 lg:mb-4 group-hover:text-[#C6AC8F] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm lg:text-base text-[#C6AC8F] leading-relaxed">
                      {card.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center p-6 lg:p-8 xl:p-12 border-t border-[#5E503F]">
              <button className="bg-[#C6AC8F] hover:bg-[#EAE0D5] text-[#0A0908] py-2 lg:py-2 px-4 lg:px-4 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-[#C6AC8F]">
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