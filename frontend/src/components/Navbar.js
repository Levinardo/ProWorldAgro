import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

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
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/marketplace" 
                className={isActive('/marketplace') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link 
                to="/workforce" 
                className={isActive('/workforce') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Workforce
              </Link>
            </li>
            <li>
              <Link 
                to="/upcoming-events" 
                className={isActive('/upcoming-events') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Hub
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
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




