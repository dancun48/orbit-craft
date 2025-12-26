import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";

const Focus = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const cards = [
    {
      number: "01",
      title: "Commercial Real Estate",
      description: "Use this space to promote the business, its products or services.",
      image: estate,
    },
    {
      number: "02",
      title: "Aviation",
      description: "Infrastructure development and aviation-focused property solutions.",
      image: build,
    },
    {
      number: "03",
      title: "Residential Development",
      description: "High-quality residential and mixed-use developments.",
      image: resid,
    },
    {
      number: "04",
      title: "Interior & Product Design",
      description: "Thoughtfully designed interiors and custom-built products.",
      image: int,
    },
    {
      number: "05",
      title: "Construction & Management",
      description: "End-to-end construction and property management services.",
      image: prod,
    },
  ];

  // Update window height on resize
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll handler
  useEffect(() => {
    const el = containerRef.current;

    const handleScroll = () => {
      setScrollTop(el.scrollTop);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-y-scroll overflow-x-hidden bg-[#5E503F] scroll-smooth"
    >
      {/* ================= MAIN STATIC CARD ================= */}
      <div className="sticky top-0 z-10 bg-[#5E503F]">
        <div className="flex flex-col p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
            <div>
              <h4 className="uppercase tracking-wide text-[#C6AC8F] text-sm sm:text-base">
                Core Services
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAE0D5]">
                Our Focus Areas
              </h1>
            </div>

            <button
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0);
              }}
              className="border-2 border-[#C6AC8F] text-[#C6AC8F] px-6 py-3 rounded-full hover:bg-[#C6AC8F] hover:text-[#0A0908] transition"
            >
              LEARN MORE
            </button>
          </div>

          <p className="text-base sm:text-lg text-[#EAE0D5] max-w-4xl">
            At Orbit Craft, we are committed to shaping spaces that inspire and
            endure through precision, functionality, and sustainability.
          </p>
        </div>
      </div>

      {/* ================= SLIDING CARDS ================= */}
      <div
        className="relative"
        style={{ height: `${cards.length * windowHeight}px` }} // enough scrollable space
      >
        {cards.map((card, index) => {
          const cardOffset = index * windowHeight;
          const cardHeight = windowHeight;

          const progress = Math.min(
            Math.max((scrollTop - cardOffset + cardHeight) / cardHeight, 0),
            1
          );

          // Responsive parallax offsets
          const textOffset = (1 - progress) * (window.innerWidth < 640 ? 10 : window.innerWidth < 1024 ? 15 : 20);
          const imageOffset = (1 - progress) * (window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 30 : 40);

          // Responsive card height
          const cardHeightPercent = window.innerWidth < 640 ? "95%" : window.innerWidth < 1024 ? "90%" : "80%";
          const cardTopPercent = window.innerWidth < 640 ? "2.5%" : window.innerWidth < 1024 ? "5%" : "10%";

          return (
            <section
              key={index}
              className="absolute inset-x-0 flex items-center justify-center w-full"
              style={{
                height: cardHeightPercent,
                top: cardTopPercent,
                transform: `translateY(${(1 - progress) * 100}%)`,
                opacity: progress,
                zIndex: 20 + index,
                transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
              }}
            >
              <div className="w-full h-full flex flex-col lg:flex-row gap-8 bg-[#EAE0D5] p-6 sm:p-8 rounded-xl shadow-2xl overflow-hidden">
                {/* Text Section */}
                <div
                  className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12"
                  style={{
                    transform: `translateY(${textOffset}px)`,
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <span className="text-base sm:text-lg font-bold text-[#5E503F]">
                    {card.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-4 text-[#0A0908]">
                    {card.title}
                  </h3>
                  <p className="mt-2 sm:mt-4 text-[#0A0908]">{card.description}</p>
                </div>

                {/* Image Section */}
                <div
                  className="flex-1 h-full"
                  style={{
                    transform: `translateY(${imageOffset}px)`,
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Focus;
