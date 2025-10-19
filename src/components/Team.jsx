import React from "react";
import arnold from "../assets/images/arnold.jpg";
import jira from "../assets/images/jira.jpg";
import bantu from "../assets/images/arnold.jpg";
import okello from "../assets/images/jira.jpg";

const Team = () => {
  const team = [
    {
      name: "Arnold Ochieng",
      image: arnold,
      title: "Director - Corporate Affairs & Strategy",
    },
    {
      name: "Bantu Mwaura",
      image: bantu,
      title: "Director - Real Estate & Property Development",
    },
    {
      name: "Master Okello",
      image: okello,
      title: "Director - Design & Innovation",
    },
    {
      name: "Christopher Jira",
      image: jira,
      title: "Director - Construction & Operations",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 bg-[#EAE0D5]">
      <div className="flex flex-col text-center rounded-xl shadow-lg w-full max-w-10xl bg-[#22333B] min-h-[600px] border border-[#C6AC8F]">
        <div className="p-6 lg:p-8 xl:p-12">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#EAE0D5] pb-4 lg:pb-6">
              Meet the Team
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] max-w-2xl mx-auto">
              Our experienced leadership team driving innovation and excellence in construction and real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 lg:mt-12">
            {team.map((person, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative mb-4 lg:mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-4 border-[#C6AC8F] shadow-2xl group-hover:border-[#EAE0D5] transition-all duration-500">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src={person.image}
                      alt={person.name}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#0A0908]/20"></div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl lg:text-2xl font-semibold text-[#EAE0D5] mb-2 group-hover:text-[#C6AC8F] transition-colors duration-300">
                    {person.name}
                  </p>
                  <p className="text-base lg:text-lg text-[#C6AC8F] leading-relaxed">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;