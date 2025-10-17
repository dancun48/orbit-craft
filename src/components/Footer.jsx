import React from 'react';
import logo from '../assets/images/logo_gray.jpg';
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Company",
      links: ["Home", "About", "Projects", "Solutions", "Contact"]
    },
    {
      title: "Services",
      links: ["Construction", "Consulting", "Design", "Management", "Sustainability"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Whitepapers", "FAQ", "Support"]
    },
    {
      title: "Connect",
      links: ["Careers", "Partnerships", "Investors", "News", "Events"]
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className='bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] rounded-xl shadow-xl w-full'>
        <div className='px-6 lg:px-12 py-8 lg:py-12'>
          {/* Main Footer Content */}
          <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8'>
            {/* Company Info */}
            <div className='flex flex-col lg:flex-1'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6'>
                <img 
                  src={logo} 
                  alt="OrbitCraft Consultants Ltd" 
                  className='size-16 lg:size-20 rounded-lg shadow-lg'
                />
                <div className='text-white'>
                  <h3 className='text-xl lg:text-2xl font-bold'>ORBIT-CRAFT</h3>
                  <p className='text-lg lg:text-xl text-amber-100'>Consultants Ltd.</p>
                </div>
              </div>
              <p className='text-amber-50 text-base lg:text-lg leading-relaxed'>
                Building a sustainable future through innovative construction solutions and expert consulting services.
              </p>
            </div>

            {/* Footer Links Grid */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:flex-2'>
              {footerSections.map((section, index) => (
                <div key={index} className='flex flex-col'>
                  <h4 className='text-white text-lg lg:text-xl font-semibold mb-4 border-b border-amber-200/30 pb-2'>
                    {section.title}
                  </h4>
                  <ul className='flex flex-col gap-3'>
                    {section.links.map((link, linkIndex) => (
                      <li 
                        key={linkIndex}
                        onClick={() => handleNavigation(link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`)}
                        className='text-amber-100 cursor-pointer hover:text-white hover:underline transition-all duration-300 text-base lg:text-lg'
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-amber-200/30'>
            <div className='text-center md:text-left'>
              <h5 className='text-white font-semibold mb-2'>Address</h5>
              <p className='text-amber-100'>P.O Box 16023-00100<br />Nairobi, Kenya</p>
            </div>
            <div className='text-center md:text-left'>
              <h5 className='text-white font-semibold mb-2'>Contact</h5>
              <p className='text-amber-100'>+254 745 119 904<br />hello@orbit-craft.co.ke</p>
            </div>
            <div className='text-center md:text-left'>
              <h5 className='text-white font-semibold mb-2'>Hours</h5>
              <p className='text-amber-100'>Mon - Fri: 8:00 - 17:00<br />Sat: 9:00 - 13:00</p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 border-t border-amber-200/30 pt-6'>
            <p className='text-amber-100 text-sm lg:text-base text-center lg:text-left'>
              &copy; 2025 OrbitCraft Consultants Limited. All rights reserved.
            </p>
            
            <div className='flex flex-wrap justify-center gap-4 lg:gap-6'>
              <a 
                href="#" 
                className='text-amber-100 hover:text-white transition-all duration-300 text-sm lg:text-base'
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className='text-amber-100 hover:text-white transition-all duration-300 text-sm lg:text-base'
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.ozyntria.co.ke" 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-amber-100 hover:text-white transition-all duration-300 text-sm lg:text-base'
              >
                Designed by Ozyntria Tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;