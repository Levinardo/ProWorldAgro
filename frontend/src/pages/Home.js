import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import EventCarousel from '../components/EventCarousel';

const Home = () => {
  const { t } = useTranslation();

  // Sample event data - replace with actual data from your API
  const eventItems = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200',
      title: 'Agricultural Workshop',
      description: 'Farmers learning new techniques'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200',
      title: 'Harvest Festival',
      description: 'Celebrating a successful harvest season'
    },
    {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Farm Tour Video',
      description: 'A tour of our modern agricultural facilities'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200',
      title: 'Community Event',
      description: 'Bringing farmers together'
    }
  ];

  return (
    <div className="home">
      <div className="container">
        <div className="hero glass-card">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="text-gradient">{t('home.title')}</span>
            </h1>
            <p className="hero-subtitle">{t('home.subtitle')}</p>
            <div className="hero-buttons">
              <a href="#features" className="btn-modern">
                {t('common.explore') || 'Explore'}
              </a>
              <Link to="/registration" className="btn-glass">
                {t('nav.registration')}
              </Link>
            </div>
          </div>
        </div>

        <div className="features-section" id="features">
          <div className="feature-card glass-card">
            <div className="feature-icon">🌾</div>
            <h3>{t('home.feature1') || 'Modern Agriculture'}</h3>
            <p>{t('home.feature1Desc') || 'Advanced farming techniques and solutions'}</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">📊</div>
            <h3>{t('home.feature2') || 'Data Analytics'}</h3>
            <p>{t('home.feature2Desc') || 'Insights to improve your agricultural output'}</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">🤝</div>
            <h3>{t('home.feature3') || 'Community Support'}</h3>
            <p>{t('home.feature3Desc') || 'Connect with farmers and experts worldwide'}</p>
          </div>
        </div>

        <div className="carousel-section">
          <EventCarousel items={eventItems} />
        </div>

        {/* Agent of Documentation Section */}
        <section className="info-section agent-doc-section" id="agent-documentation">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📋</span>
              {t('nav.agentOfDocumentation') || 'Agent of Documentation'}
            </h2>
            <p className="section-subtitle">
              {t('home.agentDocSubtitle') || 'Professional Support for Pakistani Investors & Visitors'}
            </p>
          </div>
          <div className="info-content glass-card">
            <div className="info-grid">
              <div className="info-item-card">
                <div className="info-icon">✈️</div>
                <h3>{t('home.agentDocService1') || 'Visa Documentation'}</h3>
                <p>{t('home.agentDocService1Desc') || 'Complete visa application support and guidance'}</p>
              </div>
              <div className="info-item-card">
                <div className="info-icon">🎫</div>
                <h3>{t('home.agentDocService2') || 'Event Registration'}</h3>
                <p>{t('home.agentDocService2Desc') || 'Seamless registration for international livestock events'}</p>
              </div>
              <div className="info-item-card">
                <div className="info-icon">🤝</div>
                <h3>{t('home.agentDocService3') || 'Business Coordination'}</h3>
                <p>{t('home.agentDocService3Desc') || 'Professional networking and partnership facilitation'}</p>
              </div>
              <div className="info-item-card">
                <div className="info-icon">📄</div>
                <h3>{t('home.agentDocService4') || 'Documentation Support'}</h3>
                <p>{t('home.agentDocService4Desc') || 'Complete documentation package for your visit'}</p>
              </div>
            </div>
            <div className="section-cta">
              <Link to="/agent-of-documentation" className="btn-modern">
                {t('common.learnMore') || 'Learn More'}
              </Link>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="info-section registration-section" id="registration">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📝</span>
              {t('nav.registration') || 'Registration'}
            </h2>
            <p className="section-subtitle">
              {t('home.registrationSubtitle') || 'Register for our professional documentation services'}
            </p>
          </div>
          <div className="info-content glass-card">
            <div className="registration-benefits">
              <div className="benefit-item">
                <span className="checkmark">✅</span>
                <span>{t('home.regBenefit1') || 'Professional visa documentation support'}</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✅</span>
                <span>{t('home.regBenefit2') || 'Complete event registration assistance'}</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✅</span>
                <span>{t('home.regBenefit3') || 'Expert guidance for international events'}</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✅</span>
                <span>{t('home.regBenefit4') || 'Time-saving coordination services'}</span>
              </div>
              <div className="benefit-item">
                <span className="checkmark">✅</span>
                <span>{t('home.regBenefit5') || 'Increased visa success rate'}</span>
              </div>
            </div>
            <div className="section-cta">
              <Link to="/registration" className="btn-modern">
                {t('common.registerNow') || 'Register Now'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;




