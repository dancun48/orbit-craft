import React from "react";

const Customer = () => {
  const customerJourney = [
    {
      title: "Initial Contact & Consultation",
      number: "01",
      text: "First conversations to understand client needs and vision.",
    },
    {
      title: "Concept Development",
      number: "02",
      text: "Design ideas, sketches, and preliminary proposals.",
    },
    {
      title: "Detailed Development",
      number: "03",
      text: "Detailed drawings, approvals, budgets, and contracts finalized.",
    },
    {
      title: "Execution & Delivery",
      number: "04",
      text: "Construction, inspection build, or real estate service delivered with precision.",
    },
    {
      title: "Handover & Aftercare",
      number: "05",
      text: "Final project handover, ongoing support, and long-term relationship building.",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] rounded-xl shadow-xl px-6 lg:px-30 py-8 lg:py-12 w-full min-h-[600px]">
        {/* Header Section */}
        <div className="flex flex-col mb-8 lg:mb-12">
          <h4 className="text-xl sm:text-2xl py-2 lg:py-4 text-amber-100 font-light tracking-wide">
            Customers
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Customer Journey
          </h1>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-amber-200/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 lg:gap-6 pb-6 lg:pb-0 scrollbar-hide">
            {customerJourney.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 lg:w-auto flex flex-col items-center text-center px-4 lg:px-2 relative z-10"
              >
                {/* Step Title */}
                <div className="mb-4 lg:mb-6 order-1">
                  <p className="text-base sm:text-lg font-semibold text-white bg-brown-800/50 px-4 py-2 rounded-lg">
                    {item.title}
                  </p>
                </div>

                {/* Step Number */}
                <div className="my-4 lg:my-6 order-3 lg:order-2 relative">
                  <div className="relative">
                    <p className="text-xl sm:text-2xl text-amber-100 font-bold border-2 border-amber-200/50 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#5D4037] to-[#8B4513] shadow-lg">
                      {item.number}
                    </p>
                    {index < customerJourney.length - 1 && (
                      <>
                        <div className="lg:hidden absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-amber-200/30"></div>
                        <div className="lg:hidden absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-200 rounded-full"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Step Description */}
                <div className="mt-4 lg:mt-6 order-2 lg:order-3 w-full">
                  <p className="text-sm sm:text-base lg:text-lg text-amber-50 px-4 py-6 lg:px-6 lg:py-8 shadow-lg bg-gradient-to-br from-[#5D4037]/80 to-[#8B4513]/80 rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-amber-200/20 min-h-[120px] lg:min-h-[140px] flex items-center justify-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="lg:hidden flex justify-center mt-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-amber-200/50 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-200/50 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-200/50 rounded-full"></div>
          </div>
          <span className="text-amber-200/70 text-sm ml-2">Scroll →</span>
        </div>
      </div>
    </div>
  );
};

export default Customer;