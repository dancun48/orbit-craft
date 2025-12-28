import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Customer = () => {
  const customerJourney = [
    {
      number: "01",
      title: "Initial Contact & Consultation",
      text: "First conversations to understand client needs and vision.",
    },
    {
      number: "02",
      title: "Concept Development",
      text: "Design ideas, sketches, and preliminary proposals.",
    },
    {
      number: "03",
      title: "Detailed Development",
      text: "Detailed drawings, approvals, budgets, and contracts finalized.",
    },
    {
      number: "04",
      title: "Execution & Delivery",
      text: "Construction, inspection build, or real estate service delivered with precision.",
    },
    {
      number: "05",
      title: "Handover & Aftercare",
      text: "Final project handover, ongoing support, and long-term relationship building.",
    },
  ];

  return (
    <section className="bg-[#EAE0D5] px-4 sm:px-6 lg:px-10 py-5">
      <div className="max-w-10xl mx-auto bg-[#eae5df] rounded-3xl border border-[#C6AC8F] shadow-xl px-6 sm:px-10 lg:px-16 py-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="uppercase tracking-widest text-sm text-[#5E503F] mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0908]">
            Customer Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#5E503F] origin-left"
          />

          {/* Steps */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
          >
            {customerJourney.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group bg-[#0A0908] rounded-2xl p-6 border border-[#5E503F] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-[#5E503F] border border-[#C6AC8F] flex items-center justify-center text-[#EAE0D5] font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#EAE0D5] text-center mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#EAE0D5]/80 text-center leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-[#5E503F]"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#5E503F] mb-5">
              Bringing Together the Best of Private Living and Investment
            </h3>
            <p className="text-base sm:text-lg text-[#0A0908]/80 leading-relaxed">
              Our comprehensive approach maximizes land use while creating sustainable income streams,
              delivering lifestyle and investment value in every development we undertake.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Customer;
