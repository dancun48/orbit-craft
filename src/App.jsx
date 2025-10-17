import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className='bg-[#D8D1C5] min-h-screen'>
      <Navbar/>
      <div className="pt-10"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/solutions' element={<Solution />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer /> 
    </div>
  )
}

export default App