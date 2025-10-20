import React from "react";
import house6 from "../assets/images/house6.jpg";
import Team from "../components/Team";
import OurStory from "../components/OurStory";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-17 pb-1 bg-[#EAE0D5] mt-16">
        <div className="w-full max-w-10xl">
          <div className="flex flex-col rounded-xl shadow-lg bg-[#22333B] border border-[#C6AC8F]">
            <div className="p-4">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 lg:pt-12 mb-8 lg:mb-12">
                <div className="flex-1 mb-6 lg:mb-0">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EAE0D5]">
                    Meet Orbit-Craft
                  </p>
                </div>
                <div className="flex-1 lg:px-8">
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#C6AC8F] leading-relaxed">
                    We provide environmentally conscious design, construction, and management services for a variety of projects.
                  </p>
                </div>
              </div>

              <hr className="border-[#5E503F] mb-8 lg:mb-12" />

            </div>
          </div>
        </div>
      </div>
      <OurStory />
      <Team />
    </>
  );
};

export default About;