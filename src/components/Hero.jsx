import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Snowfall from 'react-snowfall'

const Hero = () => {
  const navigate = useNavigate();

  // Smooth scrolling for button navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" // Faster initial loading
        poster="/videos/poster.jpg" // Static image while loading
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      {/* Main Content Container */}
      <div
        className="relative z-10 flex flex-col justify-between text-[#0A0908] w-full max-w-7xl min-h-[600px] p-6 lg:p-10"
      >
        <Snowfall snowflakeCount={100} color="#ffffff" />
        {/* Content */}
        <div className="flex flex-col gap-8 lg:gap-12 items-start justify-center h-full">
          {/* Title + Desc */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Shaping Spaces That <br />
              <span className="text-[#5E503F]">Inspire and Endure</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl text-[#0A0908]">
              At Orbit Craft, we create high-quality, valuable real estate that
              improves urban life through sustainability and innovation.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-4">
            <button
              onClick={() => {
                navigate("/contact-us");
                window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll
              }}
              className="bg-[#C6AC8F] hover:bg-[#5E503F] text-white hover:text-[#EAE0D5] 
                        px-4 py-2 rounded-lg font-bold text-lg transition-all duration-300 
                        transform hover:scale-105 shadow-lg border-2 border-[#C6AC8F]"
            >
              Start Your Project
            </button>

            <button
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border-2 border-[#5E503F] hover:bg-[#5E503F] hover:text-[#EAE0D5] 
                        text-[#5E503F] px-4 py-2 rounded-lg font-bold text-lg transition-all 
                        duration-300 transform hover:scale-105"
            >
              View Our Projects
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mt-12 pt-8 
                          border-t border-[#5E503F] w-full max-w-2xl"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#5E503F] mb-3 
                                transition-transform duration-300 group-hover:scale-110"
                >
                  {stat.number}
                </div>
                <div className="text-[#0A0908] text-base lg:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
