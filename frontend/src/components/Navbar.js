import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar glass-strong">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <img 
            src="/logo/logo.png" 
            alt="Livestock Professionals Logo" 
            className="brand-icon"
            loading="eager"
            decoding="async"
          />
          <div className="brand-text-container">
            <span className="brand-text">LIVESTOCK <span className="brand-text-brown">Professionals</span></span>
            <span className="brand-tagline">Pakistan's Gateway to Global Livestock & Agriculture</span>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Backdrop overlay */}
        <div 
          className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-label="Close menu"
        ></div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3 className="mobile-menu-title">Menu</h3>
            <button 
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <ul className="navbar-links">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? 'active' : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/marketplace" 
                className={isActive('/marketplace') ? 'active' : ''}
                onClick={closeMenu}
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link 
                to="/workforce" 
                className={isActive('/workforce') ? 'active' : ''}
                onClick={closeMenu}
              >
                Workforce
              </Link>
            </li>
            <li>
              <Link 
                to="/upcoming-events" 
                className={isActive('/upcoming-events') ? 'active' : ''}
                onClick={closeMenu}
              >
                Training Hub
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




