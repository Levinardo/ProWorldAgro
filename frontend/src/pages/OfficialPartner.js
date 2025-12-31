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
      <section className="op-hero">
        <div className="op-hero-overlay" />
        <div className="op-hero-inner">
          <div className="op-badge">OFFICIAL PARTNER</div>
          <h1 className="op-title">Pakistan × Sommet de l’Élevage</h1>
          <p className="op-subtitle">
            Pakistan is the official partner with Sommet de l’Élevage — building stronger international
            connections in sustainable livestock and agriculture.
          </p>
          <div className="op-actions">
            <Link to="/registration" className="btn-modern">
              Registration
            </Link>
            <a href="#op-details" className="btn-glass">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="op-details container" id="op-details">
        <div className="op-panels">
          <div className="op-panel glass-card">
            <div className="op-panel-head">
              <div className="op-icon" aria-hidden="true">
                🇵🇰
              </div>
              <div>
                <h2 className="op-panel-title">Pakistan</h2>
                <p className="op-panel-kicker">Official Partner</p>
              </div>
            </div>
            <p className="op-panel-text">
              A strong and fast-growing livestock and agricultural market — ready for global partnerships,
              innovation, and international collaboration.
            </p>
            <ul className="op-list">
              <li>Trade & investment opportunities</li>
              <li>Livestock, dairy, beef, sheep & poultry focus</li>
              <li>Networking with international exhibitors</li>
            </ul>
          </div>

          <div className="op-panel glass-card">
            <div className="op-panel-head">
              <div className="op-icon" aria-hidden="true">
                🐄
              </div>
              <div>
                <h2 className="op-panel-title">Sommet de l’Élevage</h2>
                <p className="op-panel-kicker">World-class livestock show</p>
              </div>
            </div>
            <p className="op-panel-text">
              A global platform for sustainable livestock, genetics, equipment, and agricultural innovation —
              connecting professionals from around the world.
            </p>
            <ul className="op-list">
              <li>Exhibitors, conferences & innovation</li>
              <li>Business meetings & guided tours</li>
              <li>Professional networking ecosystem</li>
            </ul>
          </div>
        </div>

        <div className="op-showcase glass-card">
          <div className="op-showcase-grid">
            <div className="op-showcase-item">
              <div className="op-showcase-label">Partnership</div>
              <div className="op-showcase-value">Pakistan × France</div>
            </div>
            <div className="op-showcase-item">
              <div className="op-showcase-label">Focus</div>
              <div className="op-showcase-value">Sustainable livestock & agriculture</div>
            </div>
            <div className="op-showcase-item">
              <div className="op-showcase-label">Goal</div>
              <div className="op-showcase-value">Connect investors, exhibitors & professionals</div>
            </div>
          </div>
        </div>

        <div className="op-role-panel glass-card">
          <div className="op-role-panel-head">
            <div className="op-icon" aria-hidden="true">
              🎨
            </div>
            <div>
              <h2 className="op-panel-title">{t('officialPartner.roleTitle')}</h2>
              <p className="op-panel-kicker">{t('officialPartner.roleKicker')}</p>
            </div>
          </div>
          <p className="op-panel-text">
            {t('officialPartner.roleDescription')}
          </p>
          <ul className="op-list">
            <li>{t('officialPartner.roleService1')}</li>
            <li>{t('officialPartner.roleService2')}</li>
            <li>{t('officialPartner.roleService3')}</li>
            <li>{t('officialPartner.roleService4')}</li>
          </ul>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="op-carousel-section container">
        <EventCarousel items={eventItems} />
      </section>
    </div>
  );
};

export default OfficialPartner;


