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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar glass-strong">
        <div className="navbar-content">
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <Link to="/" className="navbar-brand">
            <img 
              src="/logo/logo.png" 
              alt="Livestock Professionals Logo" 
              className="brand-icon"
              loading="eager"
              decoding="async"
            />
            <div className="brand-text-container">
              <span className="brand-text">{t('navbar.brandText')}</span>
              <span className="brand-tagline">{t('navbar.brandTagline')}</span>
            </div>
          </Link>

          <div className="navbar-menu-desktop">
            <ul className="navbar-links">
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''}
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''}
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={isActive('/services') ? 'active' : ''}
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/marketplace" 
                  className={isActive('/marketplace') ? 'active' : ''}
                >
                  {t('nav.marketplace')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/workforce" 
                  className={isActive('/workforce') ? 'active' : ''}
                >
                  {t('nav.workforce')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/upcoming-events" 
                  className={isActive('/upcoming-events') ? 'active' : ''}
                >
                  {t('nav.trainingHub')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Backdrop overlay - at parent level */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-label="Close menu"
      ></div>

      {/* Mobile Drawer - at parent level */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.services')}
            </Link>
          </li>
          <li>
            <Link 
              to="/marketplace" 
              className={isActive('/marketplace') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.marketplace')}
            </Link>
          </li>
          <li>
            <Link 
              to="/workforce" 
              className={isActive('/workforce') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.workforce')}
            </Link>
          </li>
          <li>
            <Link 
              to="/upcoming-events" 
              className={isActive('/upcoming-events') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.trainingHub')}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
        <div className="mobile-drawer-language">
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};

export default Navbar;




