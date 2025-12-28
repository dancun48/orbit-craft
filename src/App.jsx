import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import OurServices from './pages/OurServices';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import OurStory from './components/OurStory';

const App = () => {
  return (
    <div className='bg-[#EAE0D5] min-h-screen py-10'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<OurStory />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </div>
      <WhatsAppFloat />
      <Footer /> 
      <ScrollToTop />
    </div>
  )
}

export default App