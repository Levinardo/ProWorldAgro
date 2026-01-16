import React from 'react';
import { useTranslation } from 'react-i18next';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const { t } = useTranslation();

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Sommet de l\'Élevage',
      date: '6-9 oct 2025',
      time: 'All Day',
      location: 'France',
      description: 'Join us for the premier international livestock exhibition featuring the latest innovations in agricultural technology, sustainable farming practices, and networking opportunities with industry leaders from around the world.',
      category: 'Exhibition',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
      registrationRequired: true
    }
  ];

  // Training programs data
  const trainingPrograms = [
    {
      title: "Online Workshops",
      items: [
        "Modern farming techniques",
        "Livestock management best practices",
        "Sustainable agriculture methods",
        "Digital farming tools"
      ]
    },
    {
      title: "International Speaker Sessions",
      items: [
        "Expert insights from global leaders",
        "Industry best practices",
        "Case studies and success stories",
        "Q&A sessions with professionals"
      ]
    },
    {
      title: "Professional Development",
      items: [
        "Skill certification programs",
        "Career advancement workshops",
        "Networking opportunities",
        "Mentorship programs"
      ]
    },
    {
      title: "Climate-Smart Agriculture",
      items: [
        "Adaptation strategies",
        "Resource management",
        "Environmental sustainability",
        "Climate-resilient practices"
      ]
    }
  ];

  return (
    <div className="upcoming-events">
      <div className="container">
        {/* Training Programs Section */}
        <section className="key-services-section">
          <div className="container">
            <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>Training Programs</h2>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {trainingPrograms.map((program, index) => (
                <div key={index} className="service-icon-card">
                  <div className="service-icon">{['💻', '🌍', '📚', '🌱'][index] || '📋'}</div>
                  <h3 className="service-icon-title">{program.title}</h3>
                  <ul className="service-items" style={{ marginTop: '1rem', textAlign: 'left', fontSize: '0.9rem', color: '#7f8c8d' }}>
                    {program.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '0.5rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="marketplace-section">
          <h2 className="marketplace-title">Upcoming Events</h2>
          <p className="marketplace-subtitle">Join us for these exciting opportunities</p>
          <div className="marketplace-cards">
            {upcomingEvents.map(event => (
              <div key={event.id} className="marketplace-card">
                <div className="marketplace-card-image">
                  <img src={event.image} alt={event.title} />
                  <div className="marketplace-card-overlay">
                    <h3 className="marketplace-card-title">{event.category}</h3>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#1f5a3a', marginBottom: '1rem', fontWeight: 700 }}>{event.title}</h2>
                  <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{event.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#7f8c8d', fontSize: '0.95rem' }}>
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#7f8c8d', fontSize: '0.95rem' }}>
                      <span>🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#7f8c8d', fontSize: '0.95rem' }}>
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.registrationRequired ? (
                    <a href="/registration" className="btn-gold marketplace-card-button">
                      {t('events.register')} &gt;
                    </a>
                  ) : (
                    <div className="btn-gold marketplace-card-button" style={{ background: '#4caf50', cursor: 'default' }}>
                      {t('events.openToAll')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {upcomingEvents.length === 0 && (
          <section className="marketplace-section">
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#7f8c8d' }}>
              <p style={{ fontSize: '1.2rem' }}>{t('events.noEvents')}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;




