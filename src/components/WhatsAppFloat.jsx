import React from 'react';
import './WhatsAppFloat.css';
import whatsapp from '../assets/images/wa.png'

const WhatsAppFloat = () => {
  const phoneNumber = '+254745119904';
  const message = 'Hello! I need help';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float relative sm:text-sm sm:mb-0">
    <span className='text-md left-0 mb-10 text-white md:mr-4 lg:mr-4 xl:mr-4 sm:mr-0'>Chat with us!</span>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
      
        <img 
          src={whatsapp}
          alt="WhatsApp" 
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppFloat;