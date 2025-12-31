import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhyVisit.css';

const WhyVisit = () => {
  const { t } = useTranslation();

  return (
    <div className="why-visit-page">
      {/* Hero Section */}
      <section className="why-visit-hero">
        <div className="container">
          <div className="why-visit-hero-content glass-card">
            <h1 className="why-visit-title">{t('whyVisit.title')}</h1>
            <p className="why-visit-subtitle">{t('whyVisit.subtitle')}</p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Welcome VIP Services Section */}
        <section className="why-visit-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">👋</span>
              {t('whyVisit.welcome.title')}
            </h2>
          </div>
          <div className="vip-services-grid">
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🎫</div>
              <h3>{t('whyVisit.welcome.freeEntry')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🏢</div>
              <h3>{t('whyVisit.welcome.businessClub')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🌐</div>
              <h3>{t('whyVisit.welcome.multilingual')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🗣️</div>
              <h3>{t('whyVisit.welcome.interpreters')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🚶</div>
              <h3>{t('whyVisit.welcome.guidedTours')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🍽️</div>
              <h3>{t('whyVisit.welcome.foodArea')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">📶</div>
              <h3>{t('whyVisit.welcome.internet')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🏛️</div>
              <h3>{t('whyVisit.welcome.meetingRoom')}</h3>
            </div>
            <div className="vip-service-card glass-card">
              <div className="vip-service-icon">🕌</div>
              <h3>{t('whyVisit.welcome.prayerRoom')}</h3>
            </div>
          </div>
        </section>

        {/* French Livestock Excellence Section */}
        <section className="why-visit-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🏆</span>
              {t('whyVisit.livestock.title')}
            </h2>
          </div>
          <div className="livestock-stats-grid">
            <div className="stat-card glass-card">
              <div className="stat-number">2,000</div>
              <div className="stat-label">{t('whyVisit.livestock.eliteAnimals')}</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">70</div>
              <div className="stat-label">{t('whyVisit.livestock.breeds')}</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">2</div>
              <div className="stat-label">{t('whyVisit.livestock.competitions')}</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">🐄</div>
              <div className="stat-label">{t('whyVisit.livestock.auctions')}</div>
            </div>
          </div>
        </section>

        {/* Farm Tours Section */}
        <section className="why-visit-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🚜</span>
              {t('whyVisit.farmTours.title')}
            </h2>
          </div>
          <div className="farm-tours-content glass-card">
            <div className="farm-tours-list">
              <div className="farm-tour-item">
                <span className="tour-icon">🏡</span>
                <span>{t('whyVisit.farmTours.visits')}</span>
              </div>
              <div className="farm-tour-item">
                <span className="tour-icon">35</span>
                <span>{t('whyVisit.farmTours.guidedTours')}</span>
              </div>
              <div className="farm-tour-item">
                <span className="tour-icon">📍</span>
                <span>{t('whyVisit.farmTours.locations')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* High-Level Event Section */}
        <section className="why-visit-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">⭐</span>
              {t('whyVisit.event.title')}
            </h2>
          </div>
          <div className="event-stats-grid">
            <div className="event-stat-card glass-card">
              <div className="event-stat-number">1,770</div>
              <div className="event-stat-label">{t('whyVisit.event.exhibitors')}</div>
            </div>
            <div className="event-stat-card glass-card">
              <div className="event-stat-number">120,000</div>
              <div className="event-stat-label">{t('whyVisit.event.visitors')}</div>
            </div>
            <div className="event-stat-card glass-card">
              <div className="event-stat-number">6,000</div>
              <div className="event-stat-label">{t('whyVisit.event.international')}</div>
            </div>
            <div className="event-stat-card glass-card">
              <div className="event-stat-number">104</div>
              <div className="event-stat-label">{t('whyVisit.event.countries')}</div>
            </div>
            <div className="event-stat-card glass-card">
              <div className="event-stat-number">160+</div>
              <div className="event-stat-label">{t('whyVisit.event.conferences')}</div>
            </div>
            <div className="event-stat-card glass-card">
              <div className="event-stat-icon">🤝</div>
              <div className="event-stat-label">{t('whyVisit.event.b2b')}</div>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <section className="why-visit-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">✈️</span>
              {t('whyVisit.access.title')}
            </h2>
          </div>
          <div className="access-content glass-card">
            <div className="access-grid">
              <div className="access-item">
                <span className="access-icon">🛫</span>
                <div>
                  <h3>{t('whyVisit.access.airports')}</h3>
                  <p>{t('whyVisit.access.airportsDesc')}</p>
                </div>
              </div>
              <div className="access-item">
                <span className="access-icon">🚌</span>
                <div>
                  <h3>{t('whyVisit.access.shuttles')}</h3>
                  <p>{t('whyVisit.access.shuttlesDesc')}</p>
                </div>
              </div>
              <div className="access-item">
                <span className="access-icon">🏨</span>
                <div>
                  <h3>{t('whyVisit.access.accommodation')}</h3>
                  <p>{t('whyVisit.access.accommodationDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyVisit;

