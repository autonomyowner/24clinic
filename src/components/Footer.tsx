const Footer = () => {
  return (
    <footer className="glass-effect border-t border-purple-500/30">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/pics/logo.jpg" 
                  alt="Cinou Dental Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Cinou Dental</h3>
                <p className="premium-text text-sm">Clinic H24</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional dental care available 24/7 in Ben 'Aknoûn, Algeria. Your smile is our priority 
              with modern equipment and experienced professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cinou.dental" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-text hover:text-purple-300 transition-colors"
              >
                <span className="text-2xl">📘</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Ben 'Aknoûn, Algeria
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                24/7 Always Open
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                0698 17 34 27
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                cinou.dental@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Cinou Dental Clinic H24. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="tel:+213698173427" 
              className="premium-text hover:text-purple-300 transition-colors text-sm"
            >
              Book Appointment
            </a>
            <a 
              href="https://www.facebook.com/cinou.dental" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-text hover:text-purple-300 transition-colors text-sm"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 