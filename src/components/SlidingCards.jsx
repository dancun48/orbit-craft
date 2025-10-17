import React, { useState, useRef, useEffect } from 'react';
import hero_1 from "../assets/images/hero_1.jpg";

const FocusAreasSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Commercial Real Estate",
      description: "Investing in prime commercial properties and development projects across key markets.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Aviation",
      description: "Strategic investments in airport infrastructure, aircraft leasing, and aviation services.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      id: 3,
      title: "Healthcare",
      description: "Modern healthcare facilities and medical infrastructure development.",
      image: "https://images.unsplash.com/photo-1516549655669-df5c7898c4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 4,
      title: "Technology",
      description: "Data centers, tech parks, and innovation hubs for the digital economy.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      color: "from-orange-600 to-orange-800"
    },
    {
      id: 5,
      title: "Hospitality",
      description: "Luxury hotels, resorts, and premium hospitality experiences worldwide.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-rose-600 to-rose-800"
    }
  ];

  const sectors = [
    "Commercial Real Estate", "Aviation", "Healthcare", "Technology", 
    "Hospitality", "Infrastructure", "Renewable Energy", "Logistics"
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative rounded-xl text-white py-10 px-20 overflow-hidden mb-10 bg-cover" style={{backgroundImage: `url(${hero_1})`}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Focus Areas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Strategic investments across high-growth sectors with long-term value creation
          </p>
        </div>

        {/* Main Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {slides[activeSlide].title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {slides[activeSlide].description}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} opacity-60`}></div>
              </div>
              
              {/* Slide Indicator */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                {activeSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <button
                key={index}
                onClick={() => {
                  const slideIndex = slides.findIndex(slide => 
                    slide.title.toLowerCase() === sector.toLowerCase()
                  );
                  if (slideIndex !== -1) goToSlide(slideIndex);
                }}
                className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                  slides[activeSlide].title === sector
                    ? 'bg-white text-gray-900 border-white font-semibold'
                    : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
          
          {/* Explore Button */}
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900 font-semibold text-lg">
              <span className="relative z-10">EXPLORE SECTORS</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Add Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </section>
  );
};

export default FocusAreasSlider;