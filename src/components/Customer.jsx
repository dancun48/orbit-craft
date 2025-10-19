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
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-[#EAE0D5]">
      <div className="bg-[#22333B] rounded-xl shadow-xl px-6 lg:px-12 py-8 lg:py-12 w-full max-w-10xl min-h-[600px] border border-[#C6AC8F]">
        <div className="flex flex-col mb-8 lg:mb-12">
          <h4 className="text-xl py-2 lg:py-4 text-[#C6AC8F] font-light tracking-wide uppercase">
            Process
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl text-[#EAE0D5] font-bold">
            Customer Journey
          </h1>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-[#5E503F] transform -translate-y-1/2 z-0"></div>
          
          <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-5 lg:gap-6 pb-6 lg:pb-0 scrollbar-hide">
            {customerJourney.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 lg:w-auto flex flex-col items-center text-center px-4 lg:px-2 relative z-10"
              >
                <div className="my-4 lg:my-6 order-3 lg:order-2 relative">
                  <div className="relative">
                    <div className="text-xl sm:text-2xl text-[#EAE0D5] font-bold bg-[#5E503F] h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center shadow-lg border-2 border-[#C6AC8F]">
                      {item.number}
                    </div>
                    {index < customerJourney.length - 1 && (
                      <>
                        <div className="lg:hidden absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-[#5E503F]"></div>
                        <div className="lg:hidden absolute -right-6 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#C6AC8F] rounded-full"></div>
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-4 lg:mb-6 order-1">
                  <p className="text-base sm:text-lg font-semibold text-[#EAE0D5] bg-[#0A0908] px-4 py-3 rounded-lg border border-[#5E503F]">
                    {item.title}
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 order-2 lg:order-3 w-full">
                  <p className="text-sm sm:text-base lg:text-lg text-[#EAE0D5] px-4 py-6 lg:px-6 lg:py-8 shadow-lg bg-[#0A0908] rounded-2xl lg:rounded-3xl border border-[#5E503F] min-h-[120px] lg:min-h-[140px] flex items-center justify-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex justify-center items-center mt-4">
          <div className="flex space-x-2 mr-3">
            <div className="w-2 h-2 bg-[#C6AC8F] rounded-full"></div>
            <div className="w-2 h-2 bg-[#C6AC8F] rounded-full"></div>
            <div className="w-2 h-2 bg-[#C6AC8F] rounded-full"></div>
          </div>
          <span className="text-[#C6AC8F] text-sm">Scroll to explore process →</span>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#5E503F]">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-2xl text-[#C6AC8F] font-bold mb-6">
              Bringing Together the Best of Private Living and Investment
            </h3>
            <p className="text-lg text-[#EAE0D5]/90 leading-relaxed">
              Our comprehensive approach maximizes land use while creating sustainable income streams, 
              liberating lifestyle and investment value in every development we undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;