import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";

const Focus = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const scrollCardsRef = useRef(null);

  const cards = [
    {
      number: "01",
      image: resid,
      title: "Residential & Commercial Building Design",
      description: "Conceptualization | Schematics | Architectural | Civil & Structural | MEP | Landscapes | Green Building Solutions",
    },
    {
      number: "02",
      image: int,
      title: "Interior Design",
      description: "Space Planning & Optimization | Lighting & Acoustic Design | Furniture Layouts | Interior Themes | Smart Housing Solutions",
    },
    {
      number: "03",
      image: prod,
      title: "Product Design",
      description: "Custom Furniture & Fixtures | Sustainable Material & Modular Products | Branded Property Products",
    },
    {
      number: "04",
      image: build,
      title: "Building Construction & Property Management",
      description: "Turnkey Construction Solutions | Contract Administration | Time, Cost & Quality Control | Health & Safety Management",
    },
    {
      number: "05",
      image: estate,
      title: "Real Estate Development Advisory & Agency",
      description: "Feasibility Studies | Valuation Services | Property Sales & Leasing | Property & Facilities Management | Real Estate Investment Advisory | Project Finance Advisory",
    },
  ];

  // Static main card (first card)
  const mainCard = cards[0];

  // Scrollable cards (excluding the first one)
  const scrollCards = cards.slice(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollCardsContainer = scrollCardsRef.current;
      
      if (!scrollCardsContainer || !container) return;
      
      // Get container position relative to viewport
      const containerRect = container.getBoundingClientRect();
      const scrollCardsRect = scrollCardsContainer.getBoundingClientRect();
      
      // Calculate when scroll cards enter viewport
      if (containerRect.top <= window.innerHeight * 0.3 && containerRect.bottom >= window.innerHeight * 0.7) {
        // Calculate scroll progress based on how much of the container is visible
        const viewportHeight = window.innerHeight;
        const startScroll = containerRect.top;
        const endScroll = containerRect.bottom - viewportHeight;
        const scrollRange = endScroll - startScroll;
        
        if (scrollRange > 0) {
          const currentScroll = window.scrollY;
          const containerTop = container.offsetTop;
          const progress = Math.min(Math.max((currentScroll - containerTop) / scrollRange, 0), 1);
          setScrollProgress(progress);
          
          // Calculate active card based on scroll progress
          const cardCount = scrollCards.length;
          const cardIndex = Math.floor(progress * cardCount);
          if (cardIndex < cardCount && !isScrolling) {
            setIsScrolling(true);
            setActiveCard(cardIndex);
            // Reset scrolling flag after a delay
            setTimeout(() => setIsScrolling(false), 100);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCards.length, isScrolling]);

  const handleNext = () => {
    if (activeCard < scrollCards.length - 1) {
      setActiveCard(prev => prev + 1);
      // Scroll to position for this card
      scrollToCard(activeCard + 1);
    }
  };

  const handlePrev = () => {
    if (activeCard > 0) {
      setActiveCard(prev => prev - 1);
      // Scroll to position for this card
      scrollToCard(activeCard - 1);
    }
  };

  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollCardsContainer = scrollCardsRef.current;
    const cardCount = scrollCards.length;
    
    if (index >= 0 && index < cardCount && scrollCardsContainer) {
      // Calculate scroll position based on card index
      const cardHeight = scrollCardsContainer.clientHeight / cardCount;
      const targetScroll = container.offsetTop + (index * cardHeight);
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-3 bg-[#EAE0D5]">
      <div
        ref={containerRef}
        className="flex flex-col rounded-3xl sm:rounded-4xl shadow-xl bg-[#5e503f]/70 w-full max-w-10xl xl:max-w-10xl min-h-[600px] relative overflow-hidden border border-[#C6AC8F]"
      >
        {/* Header Section */}
        <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl py-1 sm:py-2 lg:py-3 font-light tracking-wide uppercase">
                Core Services
              </h4>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-white font-bold leading-tight">
                Our Focus Areas
              </h1>
            </div>
            <button 
              onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} 
              className="text-xs w-30 h-30 sm:text-sm font-semibold border-2 border-[#C6AC8F] text-[#C6AC8F] py-4 px-4 sm:py-3 sm:px-3 rounded-full cursor-pointer hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-500 transform hover:scale-105 whitespace-nowrap self-start lg:self-auto"
            >
              LEARN MORE
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white/80 leading-relaxed sm:leading-loose max-w-4xl">
              At Orbit Craft, we are committed to shaping spaces that inspire and endure. Our ongoing projects span residential, commercial, and institutional developments—each designed with precision, functionality, and sustainability in mind.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 gap-6 sm:gap-8 lg:gap-10">
          {/* Static Main Card */}
          <div className="lg:w-2/3">
            <div className="bg-[#EAE0D5] shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-[#C6AC8F] h-full">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-full">
                {/* Text Content */}
                <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#5E503F] font-bold">
                      {mainCard.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#0A0908] font-bold leading-tight">
                      {mainCard.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0A0908] mt-2 sm:mt-4 lg:mt-6 leading-relaxed">
                    {mainCard.description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex items-center justify-center flex-1">
                  <img
                    src={mainCard.image}
                    alt={mainCard.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-xl lg:rounded-2xl shadow-lg border border-[#5E503F]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Scroll Cards Container */}
          <div className="lg:w-1/3">
            <div 
              ref={scrollCardsRef}
              className="relative h-96 sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden"
            >
              {/* Navigation Buttons - Top */}
              <div className="flex justify-end gap-3 sm:gap-4 mb-4">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300 text-sm sm:text-base"
                  aria-label="Previous card"
                  disabled={activeCard === 0}
                >
                  ←
                </button>
                <button 
                  onClick={handleNext}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[#C6AC8F] text-[#C6AC8F] rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition-all duration-300 text-sm sm:text-base"
                  aria-label="Next card"
                  disabled={activeCard === scrollCards.length - 1}
                >
                  →
                </button>
              </div>

              {/* Scrollable Cards */}
              <div className="relative h-full">
                <div 
                  className="absolute inset-0 transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateY(-${(activeCard / scrollCards.length) * 100}%)`,
                    height: `${scrollCards.length * 100}%`
                  }}
                >
                  {scrollCards.map((card, index) => (
                    <div
                      key={index}
                      className="h-full relative"
                      style={{ height: `${100 / scrollCards.length}%` }}
                    >
                      <div 
                        className={`absolute top-0 left-0 w-full h-5/6 bg-[#EAE0D5] shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 transition-all duration-300 ${
                          index === activeCard 
                            ? "border-[#C6AC8F] opacity-100 scale-100" 
                            : "border-transparent opacity-70 scale-95"
                        }`}
                      >
                        <div className="flex flex-col h-full">
                          <span className="text-sm sm:text-base md:text-lg text-[#5E503F] font-bold mb-2">
                            {card.number}
                          </span>
                          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0A0908] font-bold mb-3 sm:mb-4 leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-[#0A0908] flex-1 overflow-hidden">
                            {card.description}
                          </p>
                          <div className="mt-4">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg shadow-md border border-[#5E503F]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4 absolute bottom-4 left-0 right-0">
                {scrollCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCard(index);
                      scrollToCard(index);
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === activeCard ? "bg-[#C6AC8F] scale-125" : "bg-[#5E503F]"
                    }`}
                    aria-label={`Go to card ${index + 2}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;