import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-purple-500/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/pics/logo.jpg" 
                alt="Cinou Dental Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Cinou Dental</h1>
              <p className="premium-text text-xs">Clinic H24</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/offer-for-you" 
              className={`transition-colors ${location.pathname === '/offer-for-you' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Our Services
            </Link>
            <a 
              href="tel:+213698173427" 
              className="btn-primary"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-purple-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/offer-for-you" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/offer-for-you' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <a 
                href="tel:+213698173427" 
                className="block px-3 py-2 btn-primary text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 