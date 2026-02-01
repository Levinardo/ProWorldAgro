import React from 'react';
import { useTranslation } from 'react-i18next';
import './Marketplace.css';

const Marketplace = () => {
  const { t } = useTranslation();

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
            <h1 className="coming-soon-title">{t('marketplacePage.comingSoon')}</h1>
            <p className="coming-soon-subtitle">
              {t('marketplacePage.subtitle')}
            </p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <h3>{t('marketplacePage.feature1Title')}</h3>
                <p>{t('marketplacePage.feature1Desc')}</p>
              </div>
              <div className="feature-item">
                <h3>{t('marketplacePage.feature2Title')}</h3>
                <p>{t('marketplacePage.feature2Desc')}</p>
              </div>
              <div className="feature-item">
                <h3>{t('marketplacePage.feature3Title')}</h3>
                <p>{t('marketplacePage.feature3Desc')}</p>
              </div>
            </div>
            <div className="coming-soon-cta">
              <p className="notify-text">{t('marketplacePage.notifyText')}</p>
              <button className="btn-gold" onClick={() => window.location.href = '/contact'}>
                {t('marketplacePage.contactUs')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;

