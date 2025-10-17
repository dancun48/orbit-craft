import React, { useState } from "react";
import contactImage from "../assets/images/house9.jpg";
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import fb from '../assets/images/fb.png';
import ld from '../assets/images/ld.png';
import ig from '../assets/images/ig.png';
import tt from '../assets/images/tt.png';

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
    // Handle form submission here
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
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-xl bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] min-h-[600px]">
          {/* Left Section - Contact Form & Info */}
          <div className="flex flex-col p-6 lg:p-8 xl:p-12 w-full lg:w-1/2">
            {/* Header */}
            <div className="my-12">
              <h4 className="text-xl sm:text-2xl lg:text-2xl py-3 lg:py-4 text-amber-50 font-light tracking-wide">
                Get In Touch
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
                Let's Build Something Amazing Together
              </h1>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mb-8 lg:mb-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-amber-100 text-lg mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-amber-200/30 text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-300 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-amber-100 text-lg mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-amber-200/30 text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-300 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-amber-100 text-lg mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-amber-200/30 text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-300 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

            {/* Newsletter Subscription */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/20">
              <h3 className="text-xl font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-amber-100 mb-4">Subscribe to our newsletter for the latest projects and insights.</p>
              <form onSubmit={handleSubscription} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-amber-200/30 text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Contact Info & Image */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-12 mt-25">
            {/* Contact Image */}
            <div className="relative h-48 lg:h-64 mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={contactImage}
                alt="Contact OrbitCraft"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/40 to-transparent"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm"><ContactMailRoundedIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-amber-100 font-semibold">Address</h4>
                      <p className="text-amber-50">P.O Box 16023-00100<br />Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm"><PhoneCallbackRoundedIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-amber-100 font-semibold">Phone</h4>
                      <p className="text-amber-50">+254 745 119 904</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm"><EmailRoundedIcon /></span>
                    </div>
                    <div>
                      <h4 className="text-amber-100 font-semibold">Email</h4>
                      <p className="text-amber-50">info@orbitcraft.co.ke<br />hello@orbit-craft.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: "Facebook", icon: fb, url: "#" },
                    { name: "Instagram", icon: ig, url: "#" },
                    { name: "LinkedIn", icon: ld, url: "#" },
                    { name: "TikTok", icon: tt, url: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      aria-label={social.name}
                    >
                    <img src={social.icon} alt="" />
                      
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-amber-100">
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