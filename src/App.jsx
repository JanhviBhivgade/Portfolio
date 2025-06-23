import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from './components/Skills'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* You can add more pages like Contact later */}
      </Routes>
      <About/>
      <Services/>
      <Skills/>
      <Footer/>
    </div>

    
  )
}

export default App
