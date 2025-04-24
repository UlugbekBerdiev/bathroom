import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaInstagram } from 'react-icons/fa'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Gallery', to: 'gallery' },
    { label: 'Reviews', to: 'reviews' },
    { label: 'Quote', to: 'quote' },
    { label: 'Contact', to: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-primary text-center w-full md:w-auto md:text-left flex items-center gap-2">
            <img 
              src="/logoClear.png" 
              alt="Beka Solutions Logo" 
              className="h-10 w-auto"
            />
            Beka Solutions
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-lg font-semibold text-gray-800 hover:text-primary cursor-pointer transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            <li className="flex items-center gap-2">
              <a 
                href="tel:+14435370266"
                className="flex items-center justify-center w-10 h-10 bg-white text-green-500 rounded-full hover:bg-green-50 transition-colors"
                aria-label="Call us"
              >
                <FaPhone size={18} />
              </a>
              <a 
                href="https://www.instagram.com/bathroom.remodeling"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <a 
              href="tel:+14435370266"
              className="flex items-center justify-center w-10 h-10 bg-white text-green-500 rounded-full hover:bg-green-50 transition-colors"
              aria-label="Call us"
            >
              <FaPhone size={18} />
            </a>
            <a 
              href="https://www.instagram.com/bathroom.remodeling"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            
            <button 
              className="block text-gray-800 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`block md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
        }`}
      >
        <ul className="container py-4 space-y-4 text-center">
          {navItems.map((item) => (
            <li key={item.to} className="flex justify-center">
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block font-semibold text-gray-800 hover:text-primary cursor-pointer py-2"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
} 