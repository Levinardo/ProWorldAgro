import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const whatToExpectCards = [
    {
      number: 1,
      title: 'Visa Documentation & Application Support',
      summary:
        'Schengen visa file preparation: checklist, letters, itinerary, bookings, appointment support.'
    },
    {
      number: 2,
      title: "Sommet de l'Élevage Event Registration",
      summary:
        'Standard/VIP registration, badge & QR confirmation, plus event maps, schedules, and hall plans.'
    },
    {
      number: 3,
      title: 'Investor / Business Profile Preparation',
      summary:
        'Company & investor profile pack, areas of interest, and ready-to-send templates to contact exhibitors.'
    },
    {
      number: 4,
      title: 'Coordination With Event Organisers & Exhibitors',
      summary:
        'Meeting setup with exhibitors and key contacts, group visit coordination, and guided tour requests.'
    },
    {
      number: 5,
      title: 'Travel & Logistics Documentation',
      summary:
        'Hotel/flight documents, insurance guidance, local transport tips, and a day-by-day event plan.'
    },
    {
      number: 6,
      title: 'Advisory for Pakistani Investors',
      summary:
        'What to visit, which suppliers to meet, partnership tips, and cultural etiquette guidance.'
    },
    {
      number: 7,
      title: 'Translation & Professional Communication',
      summary:
        'French/English email drafting, exhibitor communication support, and translation for brochures/forms.'
    },
    {
      number: 8,
      title: 'Attendance Certificate & Reimbursement File',
      summary:
        'Participation documentation file: attendance proofs, meetings summary, expense list, and copies of documents.'
    }
  ];


  // Video showcase data - similar to Sommet de l'Élevage
  const videoShowcase = [
    {
      title: 'International Livestock Exhibitions',
      description: 'Experience the world\'s premier agricultural events',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200'
    },
    {
      title: 'Agricultural Innovation',
      description: 'Discover cutting-edge farming technologies',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200'
    },
    {
      title: 'Global Networking',
      description: 'Connect with agricultural professionals worldwide',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200'
    }
  ];

  return (
    <div className="home">
      {/* Full Width Video Hero Section */}
      <section className="video-hero-section">
        <div className="video-hero-container">
          <video 
            className="video-hero-background"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-hero-overlay"></div>
          <div className="video-hero-content">
            <h1 className="video-hero-title">
              <span className="text-gradient">Livestock Professionals</span>
            </h1>
            <h2 className="video-hero-subtitle">A platform to the world sustainable livestock & agricultural shows</h2>
            <p className="video-hero-event-title">World's n°1 sustainable livestock show</p>
            <p className="video-hero-event-date">6-9 October 2026 | Clermont-Ferrand - France</p>
            <div className="video-hero-buttons">
              <Link to="/official-partner" className="btn-modern">
                {t('nav.officialPartner') || 'Official Partner'}
              </Link>
              <Link to="/registration" className="btn-glass">
                {t('nav.registration')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">

        {/* What to Expect Section - Detailed Services */}
        <section className="what-to-expect-section" id="what-awaits">
          <div className="expect-header">
            <div className="expect-line"></div>
            <div className="expect-header-content">
              <h2 className="expect-title">What to Expect</h2>
              <p className="expect-subtitle">A diverse program for a personalized experience</p>
            </div>
            <div className="expect-line"></div>
          </div>
          
          <div className="expect-cards-grid">
            {whatToExpectCards.map((card) => (
              <div key={card.number} className="expect-card glass-card">
                <div className="expect-card-badge">{card.number}</div>
                <div className="expect-card-header">
                  <h3 className="expect-card-title">{card.title}</h3>
                </div>
                <p className="expect-card-summary">{card.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section - "THE LIVESTOCK SUMMIT IN FIGURES" */}
        <section className="livestock-figures-section">
          <div className="figures-header">
            <div className="figures-line"></div>
            <h2 className="figures-title">THE LIVESTOCK SUMMIT IN FIGURES</h2>
            <div className="figures-line"></div>
          </div>
          <div className="figures-grid">
            <div className="figure-column">
              <div className="figure-item">
                <div className="figure-number">220,000 m²</div>
                <div className="figure-label">of exhibition space</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">+160</div>
                <div className="figure-label">conferences</div>
              </div>
            </div>
            <div className="figure-column">
              <div className="figure-item">
                <div className="figure-number">99,000 m²</div>
                <div className="figure-label">of stand floorspace</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">1,770</div>
                <div className="figure-label">exhibitors</div>
              </div>
            </div>
            <div className="figure-column">
              <div className="figure-item">
                <div className="figure-number">2,000</div>
                <div className="figure-label">elite animals</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">70</div>
                <div className="figure-label">breeds</div>
              </div>
            </div>
            <div className="figure-column">
              <div className="figure-item">
                <div className="figure-number">120,000</div>
                <div className="figure-label">visitors</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">+100</div>
                <div className="figure-label">countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section - Similar to Sommet de l'Élevage */}
        <section className="video-showcase-section">
          <div className="video-showcase-header">
            <div className="video-showcase-line"></div>
            <div className="video-showcase-title-content">
              <h2 className="video-showcase-title">Your Livestock Professionals Experience in Video</h2>
              <p className="video-showcase-subtitle">Discover our services and events through video</p>
            </div>
            <div className="video-showcase-line"></div>
          </div>
          <div className="video-grid">
            {videoShowcase.map((video, index) => (
              <div key={index} className="video-card glass-card">
                <div className="video-wrapper">
                  <video 
                    className="showcase-video"
                    src={video.videoUrl}
                    poster={video.thumbnail}
                    controls
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is Livestock Professionals Section - Similar to "Le Sommet de l'élevage, c'est quoi ?" */}
        <section className="about-section">
          <div className="about-section-header">
            <div className="about-section-line"></div>
            <h2 className="about-section-title">What is Livestock Professionals?</h2>
            <div className="about-section-line"></div>
          </div>
          <div className="about-content glass-card">
            <p className="about-description">
              Livestock Professionals is your gateway to the world of sustainable agriculture and livestock exhibitions. 
              We are the premier platform connecting Pakistani investors and visitors to international agricultural events, 
              providing comprehensive documentation services, visa support, and professional coordination.
            </p>
            <p className="about-description">
              Our mission is to promote sustainable agricultural practices, facilitate international partnerships, 
              and support the growth of the agricultural sector through professional networking and expert guidance. 
              Livestock Professionals, where excellence meets innovation in the agricultural sector.
            </p>
          </div>
        </section>


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
      </div>
    </div>
  );
};

export default Home;




