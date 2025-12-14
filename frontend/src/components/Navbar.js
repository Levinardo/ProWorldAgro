import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar glass-strong">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🌾</span>
          <span className="brand-text">ProWorldAgro</span>
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
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/agent-of-documentation" 
                className={isActive('/agent-of-documentation') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.agentOfDocumentation')}
              </Link>
            </li>
            <li>
              <Link 
                to="/registration" 
                className={isActive('/registration') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.registration')}
              </Link>
            </li>
            <li>
              <Link 
                to="/blogs" 
                className={isActive('/blogs') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.blogs')}
              </Link>
            </li>
            <li>
              <Link 
                to="/upcoming-events" 
                className={isActive('/upcoming-events') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.upcomingEvents')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
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




