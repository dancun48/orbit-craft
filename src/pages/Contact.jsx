import React, { useState } from "react";
import contactImage from "../assets/images/house11.jpg";
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import fb from '../assets/images/fb.png';
import ig from '../assets/images/ig.png';
import tt from '../assets/images/tt.png';
import ld from '../assets/images/ld.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", message: "" });
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-3 bg-[#EAE0D5] mt-16">
      <div className="w-full max-w-10xl">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-lg bg-[#22333B] min-h-[600px] border border-[#C6AC8F]">
          <div className="flex flex-col p-6 lg:p-8 xl:p-12 w-full lg:w-1/2">
            <div className="mb-8 lg:mb-12">
              <h4 className="text-xl sm:text-2xl lg:text-2xl py-3 lg:py-4 text-[#C6AC8F] font-light tracking-wide uppercase">
                Get In Touch
              </h4>
              <h1 className="text-4xl text-[#EAE0D5] font-bold leading-tight">
                Let's Build Something Amazing Together
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="mb-8 lg:mb-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-[#C6AC8F] text-md mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0908] border border-[#C6AC8F] text-[#EAE0D5] placeholder-[#5E503F] focus:outline-none focus:border-[#EAE0D5] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#C6AC8F] text-md mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0908] border border-[#C6AC8F] text-[#EAE0D5] placeholder-[#5E503F] focus:outline-none focus:border-[#EAE0D5] transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#C6AC8F] text-md mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0908] border border-[#C6AC8F] text-[#EAE0D5] placeholder-[#5E503F] focus:outline-none focus:border-[#EAE0D5] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-[40%] bg-[#C6AC8F] hover:bg-[#EAE0D5] text-[#0A0908] py-1 px-2 rounded-full font-semibold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-[#C6AC8F]"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

            <div className="bg-[#0A0908] p-6 rounded-2xl border border-[#C6AC8F]">
              <h3 className="text-xl font-semibold text-[#EAE0D5] mb-3">Stay Updated</h3>
              <p className="text-[#C6AC8F] mb-4">Subscribe to our newsletter for the latest projects and insights.</p>
              <form onSubmit={handleSubscription} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-[#22333B] border border-[#C6AC8F] text-[#EAE0D5] placeholder-[#5E503F] focus:outline-none focus:border-[#EAE0D5]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#C6AC8F] hover:bg-[#EAE0D5] text-[#0A0908] px-4 py-2 rounded-lg font-semibold transition-all duration-300 border-2 border-[#C6AC8F]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-12">
            <div className="relative h-48 lg:h-64 mb-8 rounded-2xl overflow-hidden shadow-2xl border border-[#C6AC8F]">
              <img
                src={contactImage}
                alt="Contact Orbit Craft"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0A0908]/40"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#EAE0D5] mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C6AC8F] rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#0A0908] text-sm"><BusinessTwoToneIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-[#C6AC8F] font-semibold">Address</h4>
                      <p className="text-[#EAE0D5]">P.O Box 16023-00100,<br />Nairobi, Kenya.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C6AC8F] rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#0A0908] text-sm"><PhoneInTalkTwoToneIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-[#C6AC8F] font-semibold">Phone</h4>
                      <p className="text-[#EAE0D5]">+254 745 119 904</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C6AC8F] rounded-full flex items-center justify-center mt-1">
                      <span className="text-[#0A0908] text-sm"><EmailTwoToneIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-[#C6AC8F] font-semibold">Email</h4>
                      <p className="text-[#EAE0D5]">hello@orbit-craft.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#EAE0D5] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: "Facebook", icon: fb, url: "https://www.facebook.com" },
                    { name: "Instagram", icon: ig, url: "https://www.instagram.com" },
                    { name: "LinkedIn", icon: ld, url: "https://www.linkedin.com" },
                    { name: "TikTok", icon: tt, url: "https://www.tiktok.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url} target="_blank"
                      className="w-12 h-12 bg-[#C6AC8F] hover:bg-[#EAE0D5] rounded-full flex items-center justify-center text-[#0A0908] text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-[#C6AC8F]"
                      aria-label={social.name}
                    >
                    <img src={social.icon} alt="" className="w-7 h-7" />
                      
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#EAE0D5] mb-2">Business Hours</h3>
                <p className="text-[#C6AC8F]">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;