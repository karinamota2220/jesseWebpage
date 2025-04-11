import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/nav/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Commercial from './components/commercial/Commercial'
import Contact from './components/contact/Contact'
import Graduations from './components/graduations/graduations'
import Portraits from './components/portraits/Portraits'
import Services from './components/services/Services'

const Home = () => (
  <>
    <Header />
    <About />
    <Commercial />
    <Contact />
    <Graduations />
    <Portraits />
    <Services />
  </>
)

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/graduations" element={<Graduations />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
