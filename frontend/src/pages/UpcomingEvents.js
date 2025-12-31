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

  return (
    <div className="upcoming-events">
      <div className="container">
        <div className="events-header glass-card">
          <h1 className="events-title">
            <span className="text-gradient">{t('events.title')}</span>
          </h1>
          <p className="events-subtitle">{t('events.subtitle')}</p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card glass-card">
              <div className="event-image-container">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="event-image"
                />
                <div className="event-category-badge">{event.category}</div>
              </div>
              
              <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail-item">
                    <span className="event-icon">📅</span>
                    <span className="event-detail-text">
                      {event.date}
                    </span>
                  </div>
                  <div className="event-detail-item">
                    <span className="event-icon">🕐</span>
                    <span className="event-detail-text">{event.time}</span>
                  </div>
                  <div className="event-detail-item">
                    <span className="event-icon">📍</span>
                    <span className="event-detail-text">{event.location}</span>
                  </div>
                </div>

                <div className="event-footer">
                  {event.registrationRequired ? (
                    <a 
                      href="/registration" 
                      className="btn-modern event-register-btn"
                    >
                      {t('events.register')}
                    </a>
                  ) : (
                    <span className="event-open-badge">
                      {t('events.openToAll')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {upcomingEvents.length === 0 && (
          <div className="events-empty glass-card">
            <p>{t('events.noEvents')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;




