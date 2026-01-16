import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './OfficialPartner.css';
import EventCarousel from '../components/EventCarousel';

const OfficialPartner = () => {
  const { t } = useTranslation();

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Slideshow images from public/images folder - randomized on each page load
  const eventItems = useMemo(() => {
    const eventItemsBase = [
      {
        type: 'image',
        url: '/images/1.jpg',
        title: 'Sommet de l\'Élevage',
        description: 'International livestock exhibition',
        photographer: 'Lucas Herit Photo'
      },
      {
        type: 'image',
        url: '/images/2.jpg',
        title: 'Sommet de l\'Élevage',
        description: 'World-class agricultural event',
        photographer: 'Qui Plus Est - Nathalie Dubost'
      },
      {
        type: 'image',
        url: '/images/3.jpeg',
        title: 'Sommet de l\'Élevage',
        description: 'Connecting global agricultural professionals',
        photographer: ''
      },
      {
        type: 'image',
        url: '/images/4.jpeg',
        title: 'Sommet de l\'Élevage',
        description: 'Premier livestock showcase',
        photographer: ''
      },
      {
        type: 'image',
        url: '/images/5.jpeg',
        title: 'Sommet de l\'Élevage',
        description: 'Agricultural excellence and innovation',
        photographer: ''
      },
      {
        type: 'image',
        url: '/images/6.jpeg',
        title: 'Sommet de l\'Élevage',
        description: 'Sustainable livestock and agriculture',
        photographer: ''
      },
      {
        type: 'image',
        url: '/images/7.jpg',
        title: 'Sommet de l\'Élevage',
        description: 'Global agricultural networking',
        photographer: ''
      }
    ];
    return shuffleArray(eventItemsBase);
  }, []);
  
  return (
    <div className="official-partner-page">
      <section className="mission-vision-section container" id="op-details">
        <div className="mission-vision-grid">
          <div className="mission-vision-item">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🇵🇰</div>
            <h2 className="mission-vision-heading">Pakistan</h2>
            <p className="mission-vision-text" style={{ marginBottom: '1.5rem' }}>
              A strong and fast-growing livestock and agricultural market — ready for global partnerships,
              innovation, and international collaboration.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Trade & investment opportunities</li>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Livestock, dairy, beef, sheep & poultry focus</li>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Networking with international exhibitors</li>
            </ul>
          </div>

          <div className="mission-vision-item">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐄</div>
            <h2 className="mission-vision-heading">Sommet de l'Élevage</h2>
            <p className="mission-vision-text" style={{ marginBottom: '1.5rem' }}>
              A global platform for sustainable livestock, genetics, equipment, and agricultural innovation —
              connecting professionals from around the world.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Exhibitors, conferences & innovation</li>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Business meetings & guided tours</li>
              <li style={{ marginBottom: '0.5rem', color: '#7f8c8d' }}>✓ Professional networking ecosystem</li>
            </ul>
          </div>
        </div>

        <section className="key-services-section">
          <div className="container">
            <div className="services-grid">
              <div className="service-icon-card">
                <div className="service-icon">🤝</div>
                <h3 className="service-icon-title">Partnership</h3>
                <p className="service-icon-description">Pakistan × France</p>
              </div>
              <div className="service-icon-card">
                <div className="service-icon">🌾</div>
                <h3 className="service-icon-title">Focus</h3>
                <p className="service-icon-description">Sustainable livestock & agriculture</p>
              </div>
              <div className="service-icon-card">
                <div className="service-icon">🎯</div>
                <h3 className="service-icon-title">Goal</h3>
                <p className="service-icon-description">Connect investors, exhibitors & professionals</p>
              </div>
            </div>
          </div>
        </section>

        <section className="marketplace-section">
          <div className="container">
            <h2 className="marketplace-title">{t('officialPartner.roleTitle')}</h2>
            <div className="marketplace-separator"></div>
            <div className="marketplace-subtitle-wrapper">
              <p className="marketplace-subtitle">{t('officialPartner.roleKicker')}</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '2rem', lineHeight: '1.6' }}>
                {t('officialPartner.roleDescription')}
              </p>
              <div className="services-grid">
                <div className="service-icon-card">
                  <div className="service-icon">✓</div>
                  <h3 className="service-icon-title">{t('officialPartner.roleService1')}</h3>
                </div>
                <div className="service-icon-card">
                  <div className="service-icon">✓</div>
                  <h3 className="service-icon-title">{t('officialPartner.roleService2')}</h3>
                </div>
                <div className="service-icon-card">
                  <div className="service-icon">✓</div>
                  <h3 className="service-icon-title">{t('officialPartner.roleService3')}</h3>
                </div>
                <div className="service-icon-card">
                  <div className="service-icon">✓</div>
                  <h3 className="service-icon-title">{t('officialPartner.roleService4')}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Slideshow Section */}
      <section className="op-carousel-section container">
        <EventCarousel items={eventItems} />
      </section>
    </div>
  );
};

export default OfficialPartner;


