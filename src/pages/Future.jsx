import React from "react";
import house5 from "../assets/images/house5.jpg";
import world from "../assets/images/world.jpg";

const Future = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] min-h-[600px] p-4 sm:p-6 lg:p-8 xl:p-10">
          {/* right Section - Now on left side */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-10">
            <div className="flex-1 text-center lg:text-left w-full items-center pt-20">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl pb-4 sm:pb-6 lg:pb-8 xl:pb-10 font-bold text-white leading-tight">
                Future Vision & Expansion Plans
              </h1>
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={house5}
                  alt="Sustainable Construction"
                  className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* left section - Now on right side */}
          <div className="flex flex-col w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-10">
            <div className="w-full">
              <img
                src={world}
                className="w-full h-32 sm:h-40 lg:h-48 xl:h-56 object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="w-full mt-4 sm:mt-6 lg:mt-8 xl:mt-10 p-3 sm:p-4 text-black/40 text-justify bg-gray-50 rounded-xl">
              <p className="text-sm sm:text-base lg:text-lg">
                Orbit craft's journey began with a strong foundation in design
                consultancy-helping individuals, organizations, and communities
                turn ideas into spaces that inspire. Along the way, we expanded
                into small-scale construction projects, where our designs came
                to life in tangible form. These experiences have shaped our
                identity: a company rooted in creativity, craftsmanship, and the
                pursuit of excellence. But this is only the beginning of our
                story. Looking ahead, Orbit Craft envisions a future where our
                impact stretches across the built environment and beyond. We are
                preparing to intensify our construction capabilities, scaling
                from small projects to larger, more complex developments that
                will redefine residential and commercial spaces. Our growth will
                also be anchored in real estate development and property agency
                services, where we aim to connect people not only with
                well-designed spaces but with investments that add long-term
                value. By bridging design, construction, and real estate, Orbit
                Craft will become a one-stop solution for clients seeking
                holistic property and lifestyle solutions. At the same time, we
                are deeply inspired by the evolving needs of modern living. This
                fuels our plans to venture into contemporary product design for
                interiors and outdoor spaces—creating functional, stylish, and
                sustainable pieces that complement the environments we build.
                Orbit Craft's future is about more than projects; it's about
                shaping experiences, influencing lifestyles, and leaving a mark
                on communities across Kenya and beyond. Every plan we make today
                is a step toward becoming a leading force in design,
                construction, and real estate innovation—crafting not just
                structures, but a legacy of timeless value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;