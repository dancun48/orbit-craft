import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="relative overflow-hidden container mx-auto py-5">
      {/* Full-width container with fixed height */}
      <div className="w-full h-[700px]">
        {/* Video container - takes full height with proper spacing */}
        <div className="relative h-full">
          {/* Video with rounded corners - full height */}
          <div className="relative h-full rounded-3xl sm:rounded-4xl overflow-hidden border-2 border-[#C6AC8F]/20">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/videos/poster.jpg"
            >
              <source src="/videos/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
            
            {/* Hero Content - Centered vertically */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                  
                  {/* Title Section - Balanced top spacing */}
                  <div className="mb-6 sm:mb-8 lg:mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4 sm:mb-6">
                      Shaping Spaces That <br className="hidden sm:block" />
                      <span className="text-amber-300">Inspire and Endure</span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 px-4">
                      At Orbit Craft, we create high-quality, valuable real estate
                      that improves urban life through sustainability and
                      innovation.
                    </p>
                  </div>

                  {/* Buttons - Properly spaced */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
                    <button
                      onClick={() => {
                        navigate("/contact-us");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-[#C6AC8F] hover:bg-[#5E503F] text-white 
                          px-5 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold 
                          text-sm sm:text-base transition-all duration-300 
                          transform hover:scale-105 shadow-lg border-2 border-[#C6AC8F] 
                          hover:border-[#5E503F] min-w-[180px]"
                    >
                      Start Your Project
                    </button>

                    <button
                      onClick={() => {
                        navigate("/projects");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="border-2 border-white hover:bg-white/10 text-white 
                          px-5 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold 
                          text-sm sm:text-base transition-all duration-300 
                          transform hover:scale-105 backdrop-blur-sm min-w-[180px]"
                    >
                      View Our Projects
                    </button>
                  </div>

                  {/* Stats - Properly spaced from bottom */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/30 w-full max-w-2xl">
                    {[
                      { number: "50+", label: "Projects Completed" },
                      { number: "10+", label: "Years Experience" },
                      { number: "98%", label: "Client Satisfaction" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-white text-sm sm:text-base font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;