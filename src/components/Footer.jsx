import React from 'react';
import logo from '../assets/images/logo_gray.jpg';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Company",
      links: ["Home", "About Us", "Projects", "Solutions", "Contact Us"]
    },
    {
      title: "Services",
      links: ["Construction", "Consulting", "Real Estate", "Project Management", "Sustainability"]
    },
    {
      title: "Projects",
      links: ["Residential", "Commercial", "Institutional", "Religious Centers", "Ongoing Projects"]
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
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 bg-[#EAE0D5]">
      <div className='bg-[#22333B] rounded-xl shadow-xl w-full max-w-10xl border border-[#C6AC8F]'>
        <div className='px-6 lg:px-12 py-8 lg:py-12'>
          <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8'>
            <div className='flex flex-col lg:flex-1'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6'>
                <img 
                  src={logo} 
                  alt="Orbit Craft - Consulting, Construction, Real Estate" 
                  className='size-16 lg:size-20 rounded-lg shadow-lg border border-[#C6AC8F]'
                />
                <div className='text-[#EAE0D5]'>
                  <h3 className='text-lg font-bold'>ORBIT CRAFT</h3>
                  <p className='text-sm text-[#C6AC8F]'>CONSULTING • CONSTRUCTION • REAL ESTATE</p>
                </div>
              </div>
              <p className='text-[#EAE0D5]/80 text-sm leading-relaxed max-w-md'>
                Building a sustainable future through innovative construction solutions and expert consulting services.
              </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:flex-2'>
              {footerSections.map((section, index) => (
                <div key={index} className='flex flex-col'>
                  <h4 className='text-[#C6AC8F] text-lg font-semibold mb-4 border-b border-[#C6AC8F] pb-2'>
                    {section.title}
                  </h4>
                  <ul className='flex flex-col gap-3'>
                    {section.links.map((link, linkIndex) => (
                      <li 
                        key={linkIndex}
                        onClick={() => handleNavigation(link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`)}
                        className='text-[#EAE0D5]/80 cursor-pointer hover:text-[#C6AC8F] transition-all duration-300 text-sm hover:pl-2'
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-[#5E503F] text-sm'>
            <div className='text-center md:text-left'>
              <h5 className='text-[#C6AC8F] font-semibold mb-2'>Address</h5>
              <p className='text-[#EAE0D5]'>P.O Box 16023-00100,<br />Nairobi, Kenya</p>
            </div>
            <div className='text-center md:text-left'>
              <h5 className='text-[#C6AC8F] font-semibold mb-2'>Contact</h5>
              <p className='text-[#EAE0D5]'><span className='text-white/80'>Phone: </span>+254 745 119 904<br /><span className='text-white/80'>Email: </span>hello@orbit-craft.co.ke</p>
            </div>
            <div className='text-center md:text-left'>
              <h5 className='text-[#C6AC8F] font-semibold mb-2'>Business Hours</h5>
              <p className='text-[#EAE0D5]'>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 border-t border-[#5E503F] pt-6 text-[0.8rem]'>
            <p className='text-[#EAE0D5]/60 text-center lg:text-left'>
              &copy; 2025 Orbit Craft. All rights reserved.
            </p>
            
            <div className='flex flex-wrap justify-center gap-4 lg:gap-6'>
              <a 
                href="#" 
                className='text-[#EAE0D5]/60 hover:text-[#C6AC8F] transition-all duration-300 hover:underline'
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className='text-[#EAE0D5]/60 hover:text-[#C6AC8F] transition-all duration-300 hover:underline'
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.ozyntria.co.ke" 
                target='_blank' 
                rel='noopener noreferrer'
                className='text-[#EAE0D5]/70 hover:text-[#C6AC8F] transition-all duration-300 hover:underline'
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