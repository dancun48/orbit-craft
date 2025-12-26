import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import estate from "../assets/images/estate.jpg";
import build from "../assets/images/build.jpg";
import int from "../assets/images/int.jpg";
import resid from "../assets/images/resid.jpg";
import prod from "../assets/images/prod.jpg";

const Focus = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      number: "01",
      title: "Commercial Real Estate",
      description:
        "Use this space to promote the business, its products or its services.",
      image: estate,
    },
    {
      number: "02",
      title: "Aviation",
      description:
        "Infrastructure development and aviation-focused property solutions.",
      image: build,
    },
    {
      number: "03",
      title: "Residential Development",
      description:
        "High-quality residential and mixed-use developments.",
      image: resid,
    },
    {
      number: "04",
      title: "Interior & Product Design",
      description:
        "Thoughtfully designed interiors and custom-built products.",
      image: int,
    },
    {
      number: "05",
      title: "Construction & Management",
      description:
        "End-to-end construction and property management services.",
      image: prod,
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".focus-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#EAE0D5] px-6 lg:px-12 py-20">
      {/* Header */}
      <div className="mb-20 relative rounded-3xl overflow-hidden">
        <img
          src={build}
          alt=""
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-between px-10">
          <h2 className="text-white text-4xl font-semibold">
            Our Focus Areas
          </h2>
          <button
            onClick={() => navigate("/services")}
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            EXPLORE SECTORS
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* LEFT — Sticky text */}
        <div className="sticky top-32 h-fit">
          <span className="text-sm uppercase tracking-widest text-[#5E503F]">
            Sectors
          </span>

          <h3 className="text-4xl font-semibold mt-6 mb-10">
            {sections[activeIndex].title}
          </h3>

          <p className="text-lg text-[#5E503F] max-w-md">
            {sections[activeIndex].description}
          </p>
        </div>

        {/* RIGHT — Scroll images */}
        <div className="flex flex-col gap-32">
          {sections.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="focus-item transition-all duration-700"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-[420px] object-cover rounded-2xl shadow-xl transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-40 translate-y-10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;
