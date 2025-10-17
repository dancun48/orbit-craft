import React from "react";
import house8 from "../assets/images/house8.jpg";

const OurStory = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center rounded-xl shadow-xl w-full bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E]">
        <div className="flex flex-col p-6 lg:p-8 xl:p-12 flex-1">
          {/* Left section */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 lg:mb-6">
            Our Story
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-amber-50 leading-relaxed">
            Orbit Craft is a multidisciplinary company specializing in building
            and product design consulting, construction, and real estate
            services. We bring together creativity, technical expertise, and
            industry experience to deliver solutions that shape spaces,
            products, and investments for the future.
            <br /><br />
            Our work spans across three core areas: <strong>Design & Consulting</strong> – Providing innovative
            building and product design solutions tailored to function,
            aesthetics, and sustainability. <strong>Construction & Product Build</strong> –
            Executing projects with precision, quality, and efficiency, from
            groundbreaking structures to crafted product builds. <strong>Real Estate
            Services</strong> – Guiding clients through property acquisition, sales, and
            investment with expert market insights and trusted advisory.
            <br /><br />
            At Orbit Craft, we believe in crafting excellence with purpose—whether
            we are constructing environments, shaping products, or facilitating
            property ownership. Our approach is built on professionalism,
            integrity, and a commitment to delivering value that lasts.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex items-center justify-center p-6 lg:p-8 xl:p-12 flex-1">
          <div className="relative w-full h-64 lg:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200/30">
            <img 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              src={house8} 
              alt="OrbitCraft Story" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;