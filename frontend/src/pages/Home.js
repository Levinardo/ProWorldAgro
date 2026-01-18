import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const keyServices = [
    {
      sprite: '/icons/icons1.png',
      iconClass: 'icon-expos',
      title: 'Expos & Documentation',
      description: 'International event participation and documentation support'
    },
    {
      sprite: '/icons/icons2.png',
      iconClass: 'icon-veterinary',
      title: 'Veterinary Experts',
      description: 'Connect with certified veterinary professionals'
    },
    {
      sprite: '/icons/icons3.png',
      iconClass: 'icon-marketplace',
      title: 'Livestock Marketplace',
      description: 'Buy, sell, and trade livestock and agricultural products'
    },
    {
      sprite: '/icons/icons4.png',
      iconClass: 'icon-workforce',
      title: 'Skilled Workforce',
      description: 'Access to trained agricultural and livestock professionals'
    },
    {
      sprite: '/icons/icons5.png',
      iconClass: 'icon-training',
      title: 'Training Hub',
      description: 'Educational programs and professional development'
    },
    {
      sprite: '/icons/icons1.png',
      iconClass: 'icon-consultancy',
      title: 'Farm Consultancy',
      description: 'Expert advice for modern farming practices'
    }
  ];

  const marketplaceCategories = [
    {
      image: '/images/1.jpg',
      title: 'Cattle & Buffalo',
      buttonText: 'View Listings >'
    },
    {
      image: '/images/2.jpg',
      title: 'Seeds & Fertilizers',
      buttonText: 'Browse Products >'
    },
    {
      image: '/images/3.jpeg',
      title: 'Farm Equipment',
      buttonText: 'Explore Equipment >'
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
              <h1 className="hero-main-title">Connecting Pakistan's 
                <br />Livestock & Agriculture</h1>
              <p className="hero-brown-text">with the World</p>
              <p className="hero-subtitle">Official Documentation Partner - Sommet de l'Élevage - France</p>
            </div>
          </div>
        </div>
        <div className="hero-buttons-wrapper">
          <div className="hero-buttons">
            <Link to="/registration" className="btn-hero-green">
              Join as Professional &gt;
            </Link>
            <Link to="/marketplace" className="btn-hero-gold">
              Explore Marketplace &gt;
            </Link>
            <Link to="/registration" className="btn-hero-gold">
              Register as Worker &gt;
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
              <h2 className="mission-vision-heading">Our Mission</h2>
              <p className="mission-vision-text">Modernizing Pakistan's Livestock and Agriculture Industry</p>
            </div>
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">Our Vision</h2>
              <p className="mission-vision-text">South Asia's Leading Agri-Digital Platform</p>
              </div>
            </div>
          </div>
        </section>

      {/* Marketplace Section */}
      <section className="marketplace-section">
        <div className="container">
          <h2 className="marketplace-title">Livestock & Agriculture Marketplace</h2>
          <div className="marketplace-separator"></div>
          <div className="marketplace-subtitle-wrapper">
            <p className="marketplace-subtitle">Buy • Sell • Connect • Grow</p>
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
              Post a Listing &gt;
            </Link>
            <Link to="/marketplace" className="btn-gold">
              View All Listings &gt;
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
            <p className="membership-text">Become a Verified Member of Pakistan's Global Agriculture Network</p>
            <Link to="/registration" className="btn-gold">
              Get Verified Now &gt;
            </Link>
          </div>
              </div>
      </section>

      {/* Pakistani People at Sommet Section */}
      <section className="pakistani-participants-section">
        <div className="container">
          <div className="participants-content">
            <div className="participants-text-content">
              <h2 className="participants-title">Pakistani People at Sommet de l'Élevage</h2>
              <p className="participants-subtitle">Join Pakistan's Growing Presence at the World's Premier Livestock Event</p>
              <p className="participants-description">
                Pakistani professionals, farmers, and agricultural experts are making their mark at Sommet de l'Élevage in France. 
                Be part of this international platform and connect with global leaders in livestock and agriculture.
              </p>
              <Link to="/official-partner" className="btn-gold participants-cta">
                Learn More & Register &gt;
              </Link>
            </div>
            <div className="participants-image-content">
              <div className="participants-image-grid">
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">👨‍🌾</span>
                    <p>Pakistani Farmers</p>
                  </div>
                </div>
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">👨‍⚕️</span>
                    <p>Veterinary Experts</p>
                  </div>
                </div>
                <div className="participant-image-card">
                  <div className="participant-image-placeholder">
                    <span className="participant-icon">🌾</span>
                    <p>Agriculture Professionals</p>
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
        <div className="official-partner-flags">
          <div className="flag-container">
            <div className="flag-icon pakistan-flag">🇵🇰</div>
          </div>
          <div className="handshake-icon">🤝</div>
          <div className="flag-container">
            <div className="flag-icon france-flag">🇫🇷</div>
          </div>
        </div>
        <div className="official-partner-overlay">
          <div className="official-partner-banner">
            <div className="official-partner-label">
              <img 
                src={`${process.env.PUBLIC_URL}/logo/sommet_image.png`} 
                alt="Sommet de l'Élevage Logo" 
                className="official-partner-logo"
              />
              <p>Official Partner - Sommet de l'Élevage, France</p>
            </div>
            <Link to="/official-partner" className="btn-gold official-partner-button">
              Register for Sommet 2026 &gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
