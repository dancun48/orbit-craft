import React from "react";
import hero_2 from '../assets/images/house10.jpg';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-3 pt-17 bg-[#EAE0D5] mt-16">
      <div 
        className="flex flex-col justify-between text-[#0A0908] rounded-xl shadow-2xl bg-cover bg-no-repeat bg-center w-full max-w-10xl min-h-[600px] relative overflow-hidden border border-[#C6AC8F]"
        style={{ backgroundImage: `url(${hero_2})` }}
      >
        <div className="absolute inset-0 bg-[#EAE0D5] opacity-90"></div>
        
        <div className="relative z-10 flex flex-col gap-8 lg:gap-12 items-start justify-center p-6 lg:p-8 xl:p-12 h-full">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Shaping Spaces That <br />
              <span className="text-[#5E503F]">Inspire and Endure</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-4xl text-[#0A0908]">
              At Orbit Craft, we are committed to designing, developing, and delivering 
              exceptional real estate products that offer value for money while enhancing 
              the quality of urban living through sustainability and innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-4 lg:mt-8">
            <button onClick={()=>{navigate('/contact-us'); window.scrollTo(0,0)}} className="bg-[#C6AC8F] hover:bg-[#5E503F] text-[#0A0908] hover:text-[#EAE0D5] px-8 py-4 h-40 w-40 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-[#C6AC8F]">
              Start Your Project
            </button>
            <button onClick={()=>{navigate('/projects'); window.scrollTo(0,0)}} className="border-2 border-[#5E503F] hover:bg-[#5E503F] hover:text-[#EAE0D5] text-[#5E503F] px-8 py-4 h-40 w-40 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              View Our Projects
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mt-8 lg:mt-16 pt-8 lg:pt-12 border-t border-[#5E503F] w-full max-w-2xl">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#5E503F] mb-3 transition-transform duration-300 group-hover:scale-110">
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