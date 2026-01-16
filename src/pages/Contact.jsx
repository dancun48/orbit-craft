import React, { useState } from "react";
import { motion } from "framer-motion";

import contact from "../assets/images/contact.jpg";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

import fb from "../assets/images/fb.png";
import ig from "../assets/images/ig.png";
import tt from "../assets/images/tt.png";
import ld from "../assets/images/ld.png";

import WhatsAppFloat from "../components/WhatsAppFloat";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We'll get back to you shortly.");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto w-full">
      {/* CONSTRAINED BACKGROUND IMAGE */}
      <div
        className="relative mx-auto bg-cover bg-center rounded-3xl sm:rounded-3xl lg:rounded-4xl overflow-hidden"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-4 sm:p-6 lg:p-8 py-12 sm:py-16 lg:py-20"
        >
          <motion.div
            variants={stagger}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT – FORM */}
            <motion.div variants={stagger}>
              <motion.h4
                variants={fadeUp}
                className="text-[#C6AC8F] uppercase tracking-[0.25em] text-xs sm:text-sm"
              >
                Get In Touch
              </motion.h4>

              <motion.h1
                variants={fadeUp}
                className="text-responsive-lg font-thin text-[#EAE0D5] mt-2 sm:mt-4 mb-6 sm:mb-8 max-w-xl"
              >
                Let's create something <span className="text-[#C6AC8F]">thoughtful</span>, functional, and <span className="text-[#C6AC8F]">lasting</span>.
              </motion.h1>

              <motion.form
                onSubmit={handleSubmit}
                variants={stagger}
                className="space-y-4 sm:space-y-6 max-w-xl"
              >
                {["fullName", "email"].map((field) => (
                  <motion.input
                    key={field}
                    variants={fadeUp}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "Email address" : "Full name"}
                    required
                    className="w-full bg-white/5 backdrop-blur-md border border-white/25 px-4 py-3 rounded-lg sm:rounded-xl text-[#EAE0D5] placeholder-white/50 focus:outline-none focus:border-[#C6AC8F] transition text-sm sm:text-base"
                  />
                ))}

                <motion.textarea
                  variants={fadeUp}
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/25 px-4 py-3 rounded-lg sm:rounded-xl text-[#EAE0D5] placeholder-white/50 focus:outline-none focus:border-[#C6AC8F] transition resize-none text-sm sm:text-base"
                />

                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#C6AC8F] text-[#EAE0D5] font-medium tracking-wide hover:bg-[#C6AC8F]/10 transition text-sm sm:text-base mobile-touch"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>

            {/* RIGHT – INFO */}
            <motion.div variants={stagger} className="space-y-8 lg:space-y-12 mt-8 lg:mt-0">
              <motion.h3
                variants={fadeUp}
                className="text-responsive-base font-semibold text-[#EAE0D5]"
              >
                Contact Information
              </motion.h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <BusinessTwoToneIcon className="text-lg sm:text-xl" />,
                    title: "Address",
                    text: "P.O Box 16023-00100, Nairobi, Kenya"
                  },
                  {
                    icon: <PhoneInTalkTwoToneIcon className="text-lg sm:text-xl" />,
                    title: "Phone",
                    text: "+254 745 119 904"
                  },
                  {
                    icon: <EmailTwoToneIcon className="text-lg sm:text-xl" />,
                    title: "Email",
                    text: "hello@orbit-craft.co.ke"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C6AC8F] flex items-center justify-center text-[#C6AC8F] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#C6AC8F] text-xs sm:text-sm uppercase tracking-wide">
                        {item.title}
                      </p>
                      <p className="text-[#EAE0D5] text-sm sm:text-base mt-1">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SOCIALS */}
              <motion.div variants={fadeUp} className="flex gap-3 sm:gap-4 pt-4">
                {[fb, ig, ld, tt].map((icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center hover:border-[#C6AC8F] transition mobile-touch"
                    href="#"
                  >
                    <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
