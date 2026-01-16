import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhyVisit.css';

const WhyVisit = () => {
  const { t } = useTranslation();

  return (
    <div className="why-visit-page">
      <div className="container">
        {/* Welcome VIP Services Section */}
        <section className="key-services-section">
          <h2 className="marketplace-title">{t('whyVisit.welcome.title')}</h2>
          <div className="services-grid">
            <div className="service-icon-card">
              <div className="service-icon">🎫</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.freeEntry')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🏢</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.businessClub')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🌐</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.multilingual')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🗣️</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.interpreters')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🚶</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.guidedTours')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🍽️</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.foodArea')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">📶</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.internet')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🏛️</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.meetingRoom')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🕌</div>
              <h3 className="service-icon-title">{t('whyVisit.welcome.prayerRoom')}</h3>
            </div>
          </div>
        </section>

        {/* French Livestock Excellence Section */}
        <section className="key-services-section">
          <h2 className="marketplace-title">{t('whyVisit.livestock.title')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>2,000</div>
              <h3 className="service-icon-title">{t('whyVisit.livestock.eliteAnimals')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>70</div>
              <h3 className="service-icon-title">{t('whyVisit.livestock.breeds')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>2</div>
              <h3 className="service-icon-title">{t('whyVisit.livestock.competitions')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🐄</div>
              <h3 className="service-icon-title">{t('whyVisit.livestock.auctions')}</h3>
            </div>
          </div>
        </section>

        {/* Farm Tours Section */}
        <section className="key-services-section">
          <h2 className="marketplace-title">{t('whyVisit.farmTours.title')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="service-icon-card">
              <div className="service-icon">🏡</div>
              <h3 className="service-icon-title">{t('whyVisit.farmTours.visits')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>35</div>
              <h3 className="service-icon-title">{t('whyVisit.farmTours.guidedTours')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">📍</div>
              <h3 className="service-icon-title">{t('whyVisit.farmTours.locations')}</h3>
            </div>
          </div>
        </section>

        {/* High-Level Event Section */}
        <section className="key-services-section">
          <h2 className="marketplace-title">{t('whyVisit.event.title')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>1,770</div>
              <h3 className="service-icon-title">{t('whyVisit.event.exhibitors')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>120,000</div>
              <h3 className="service-icon-title">{t('whyVisit.event.visitors')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>6,000</div>
              <h3 className="service-icon-title">{t('whyVisit.event.international')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>104</div>
              <h3 className="service-icon-title">{t('whyVisit.event.countries')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1f5a3a' }}>160+</div>
              <h3 className="service-icon-title">{t('whyVisit.event.conferences')}</h3>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🤝</div>
              <h3 className="service-icon-title">{t('whyVisit.event.b2b')}</h3>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <section className="key-services-section">
          <h2 className="marketplace-title">{t('whyVisit.access.title')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="service-icon-card">
              <div className="service-icon">🛫</div>
              <h3 className="service-icon-title">{t('whyVisit.access.airports')}</h3>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.5rem' }}>{t('whyVisit.access.airportsDesc')}</p>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🚌</div>
              <h3 className="service-icon-title">{t('whyVisit.access.shuttles')}</h3>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.5rem' }}>{t('whyVisit.access.shuttlesDesc')}</p>
            </div>
            <div className="service-icon-card">
              <div className="service-icon">🏨</div>
              <h3 className="service-icon-title">{t('whyVisit.access.accommodation')}</h3>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.5rem' }}>{t('whyVisit.access.accommodationDesc')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyVisit;





