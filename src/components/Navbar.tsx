import { useState, useEffect } from 'react';
import { config } from '../config';
import DaanveerLogo from '../../media/daanveer_logo.png';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#impact' },
  { label: 'Download', href: '#download' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Navbar Component
 * 
 * Sticky navigation with logo and links.
 * Collapses to hamburger menu on mobile.
 */
export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
            aria-label="Daanveer Home"
          >
            <img 
              src={DaanveerLogo} 
              alt="Daanveer Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-daanveer-black">
              Daanveer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-daanveer-black/80 font-medium hover:text-daanveer-green transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-daanveer-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href={config.APK_DOWNLOAD_URL}
              download
              className="btn-primary text-sm py-2 px-4"
              aria-label="Download Daanveer APK"
            >
              Download APK
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-daanveer-gray-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-daanveer-black transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-daanveer-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-daanveer-black transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="py-3 px-4 text-daanveer-black/80 font-medium hover:text-daanveer-green hover:bg-daanveer-gray-light rounded-lg transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={handleNavClick}
            className="btn-primary text-center mt-2"
            aria-label="Download Daanveer APK"
          >
            Download APK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
