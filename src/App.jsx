import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import OurServices from './pages/OurServices';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  return (
    <div className='bg-[#EAE0D5] min-h-screen'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/sustainability-goals' element={<Solution />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </div>
      <WhatsAppFloat />
      <Footer /> 
    </div>
  )
}

export default App