import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-bg text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide text-primary">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
          <li><Link to="/portraits" className="hover:text-primary transition">Portraits</Link></li>
          <li><Link to="/commercial" className="hover:text-primary transition">Commercial</Link></li>
          <li><Link to="/graduations" className="hover:text-primary transition">Graduations</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 text-sm font-medium bg-bg">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/portraits" onClick={toggleMenu}>Portraits</Link></li>
          <li><Link to="/commercial" onClick={toggleMenu}>Commercial</Link></li>
          <li><Link to="/graduations" onClick={toggleMenu}>Graduations</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
