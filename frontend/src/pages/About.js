import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <div className="about-hero glass-card">
          <h1>{t('about.title')}</h1>
          <p>{t('about.description')}</p>
        </div>
        
        <div className="about-content">
          <div className="about-card glass-card">
            <h2>Our Mission</h2>
            <p>To empower farmers and agricultural professionals with modern solutions and comprehensive support.</p>
          </div>
          <div className="about-card glass-card">
            <h2>Our Vision</h2>
            <p>To transform agriculture through innovation, technology, and sustainable practices.</p>
          </div>
          <div className="about-card glass-card">
            <h2>Our Values</h2>
            <p>Commitment to excellence, sustainability, and supporting the agricultural community worldwide.</p>
          </div>
        </div>

        <div className="about-map-section glass-card">
          <h2>Our Location</h2>
          <p>Visit us in Peshawar, Pakistan</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13255.123456789!2d71.5249!3d34.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xfdbfa1e903d251d1!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-md)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peshawar Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

