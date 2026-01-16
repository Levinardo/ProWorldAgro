import React from 'react';
import './Marketplace.css';

const Marketplace = () => {

  return (
    <div className="marketplace-page">
      <section className="marketplace-hero-section">
        <div className="container">
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" stroke="#1f5a3a" strokeWidth="3" fill="none"/>
                <path d="M40 60 L55 75 L80 45" stroke="#1f5a3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="coming-soon-title">Marketplace Coming Soon</h1>
            <p className="coming-soon-subtitle">
              We're building an amazing platform for buying, selling, and trading livestock and agricultural products.
            </p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <h3>Cattle & Buffalo</h3>
                <p>Premium livestock trading</p>
              </div>
              <div className="feature-item">
                <h3>Seeds & Fertilizers</h3>
                <p>Quality agricultural inputs</p>
              </div>
              <div className="feature-item">
                <h3>Farm Equipment</h3>
                <p>Modern farming machinery</p>
              </div>
            </div>
            <div className="coming-soon-cta">
              <p className="notify-text">Get notified when we launch</p>
              <button className="btn-gold" onClick={() => window.location.href = '/contact'}>
                Contact Us &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;

