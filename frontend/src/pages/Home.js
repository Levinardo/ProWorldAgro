import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VisitorStats from '../components/VisitorStats';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const keyServices = [
    {
      sprite: '/icons/icons1.png',
      iconClass: 'icon-expos',
      title: t('homePage.service1'),
      description: t('homePage.service1Desc')
    },
    {
      sprite: '/icons/icons2.png',
      iconClass: 'icon-veterinary',
      title: t('homePage.service2'),
      description: t('homePage.service2Desc')
    },
    {
      sprite: '/icons/icons3.png',
      iconClass: 'icon-marketplace',
      title: t('homePage.service3'),
      description: t('homePage.service3Desc')
    },
    {
      sprite: '/icons/icons4.png',
      iconClass: 'icon-workforce',
      title: t('homePage.service4'),
      description: t('homePage.service4Desc')
    },
    {
      sprite: '/icons/icons5.png',
      iconClass: 'icon-training',
      title: t('homePage.service5'),
      description: t('homePage.service5Desc')
    },
    {
      sprite: '/icons/icons1.png',
      iconClass: 'icon-consultancy',
      title: t('homePage.service6'),
      description: t('homePage.service6Desc')
    },
    {
      sprite: '/icons/icons2.png',
      iconClass: 'icon-agriculture-experts',
      title: t('homePage.service7'),
      description: t('homePage.service7Desc')
    }
  ];

  const marketplaceCategories = [
    {
      image: '/cowseeds/1.png',
      title: t('homePage.category1'),
      buttonText: t('homePage.category1Button')
    },
    {
      image: '/cowseeds/2.png',
      title: t('homePage.category2'),
      buttonText: t('homePage.category2Button')
    },
    {
      image: '/cowseeds/3.png',
      title: t('homePage.category3'),
      buttonText: t('homePage.category3Button')
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo/background.jpg)` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-globe-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-main-title">{t('homePage.heroTitle')}</h1>
              <p className="hero-brown-text">{t('homePage.heroSubtitle')}</p>
              <p className="hero-subtitle">{t('homePage.heroDescription')}</p>
            </div>
          </div>
        </div>
        <div className="hero-buttons-wrapper">
          <div className="hero-buttons">
            <Link to="/registration" className="btn-hero-green">
              {t('homePage.registerSommet')}
            </Link>
            <span className="btn-hero-gold" style={{ cursor: 'default' }}>
              {t('homePage.exploreMarketplace')}
            </span>
            <Link to="/workforce" className="btn-hero-gold">
              {t('homePage.registerWorker')}
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services/Features Section */}
      <section className="key-services-section">
      <div className="container">
          <div className="services-grid">
            {keyServices.map((service, index) => (
              <div key={index} className="service-icon-card">
                <div 
                  className={`service-icon ${service.iconClass}`}
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL}${service.sprite})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="service-icon-title">{service.title}</h3>
              </div>
            ))}
          </div>
          </div>
        </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">{t('homePage.missionTitle')}</h2>
              <p className="mission-vision-text">{t('homePage.missionText')}</p>
            </div>
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">{t('homePage.visionTitle')}</h2>
              <p className="mission-vision-text">{t('homePage.visionText')}</p>
              </div>
            </div>
          </div>
        </section>

      {/* Marketplace Section */}
      <section className="marketplace-section">
        <div className="container">
          <h2 className="marketplace-title">{t('homePage.marketplaceTitle')}</h2>
          <div className="marketplace-separator"></div>
          <div className="marketplace-subtitle-wrapper">
            <p className="marketplace-subtitle">{t('homePage.marketplaceSubtitle')}</p>
          </div>
          <div className="marketplace-cards">
            {marketplaceCategories.map((category, index) => (
              <div key={index} className="marketplace-card">
                <div className="marketplace-card-image">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="marketplace-card-overlay">
                    <h3 className="marketplace-card-title">{category.title} &gt;</h3>
          </div>
                </div>
                <Link to="/marketplace" className="btn-gold marketplace-card-button">
                  {category.buttonText}
                </Link>
              </div>
            ))}
          </div>
          <div className="marketplace-cta-buttons">
            <Link to="/marketplace" className="btn-gold">
              {t('homePage.postListing')}
            </Link>
            <Link to="/marketplace" className="btn-gold">
              {t('homePage.viewAllListings')}
            </Link>
          </div>
          </div>
        </section>

      {/* Membership Section */}
      <section className="membership-section">
        <div 
          className="membership-background"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo/background.jpg)` }}
        ></div>
        <div className="container">
          <div className="membership-content">
            <p className="membership-text">{t('homePage.membershipText')}</p>
            {/* <Link to="/registration" className="btn-gold">
              Get Verified Now &gt;
            </Link> */}
          </div>
              </div>
      </section>

      {/* Pakistani People at Sommet Section */}
      <section className="pakistani-participants-section">
        <div className="container">
          <div className="participants-content">
            <div className="participants-text-content">
              <h2 className="participants-title">{t('homePage.pakistaniParticipantsTitle')}</h2>
              <p className="participants-subtitle">{t('homePage.pakistaniParticipantsSubtitle')}</p>
              <p className="participants-description">
                {t('homePage.pakistaniParticipantsDesc')}
              </p>
              <Link to="/official-partner" className="btn-gold participants-cta">
                {t('homePage.learnMoreRegister')}
              </Link>
            </div>
            <div className="participants-image-content">
              <div className="participants-image-grid">
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">👨‍🌾</span>
                    <p>{t('homePage.pakistaniFarmers')}</p>
                  </div>
                </div>
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">👨‍⚕️</span>
                    <p>{t('homePage.veterinaryExperts')}</p>
                  </div>
                </div>
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">🌾</span>
                    <p>{t('homePage.agricultureProfessionals')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Partner Section */}
      <section className="official-partner-section">
        <div className="official-partner-backgrounds">
          <div 
            className="official-partner-background-left"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo/sommet.jpg)` }}
          ></div>
          <div 
            className="official-partner-background-right"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo/sommet.jpg)` }}
          ></div>
          <div className="official-partner-diagonal-separator"></div>
        </div>
        <div className="official-partner-features">
          <ul className="official-partner-features-list">
            <li>✓ {t('homePage.feature1')}</li>
            <li>✓ {t('homePage.feature2')}</li>
            <li>✓ {t('homePage.feature3')}</li>
          </ul>
        </div>
        <div className="official-partner-overlay">
          <div className="official-partner-banner">
            <div className="official-partner-label">
              <img 
                src={`${process.env.PUBLIC_URL}/logo/sommet_image.png`} 
                alt="Sommet de l'Élevage Logo" 
                className="official-partner-logo"
              />
              <p>{t('homePage.officialPartnerLabel')}</p>
            </div>
            <Link to="/official-partner" className="btn-gold official-partner-button">
              {t('homePage.registerSommet2026')}
            </Link>
          </div>
        </div>
      </section>

      {/* Visitor Statistics Section */}
      <section className="visitor-stats-section">
        <VisitorStats />
      </section>
    </div>
  );
};

export default Home;
