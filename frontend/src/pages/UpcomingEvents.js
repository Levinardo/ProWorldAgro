import React from 'react';
import { useTranslation } from 'react-i18next';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const { t } = useTranslation();

  // Sample upcoming events data - replace with actual data from your API
  const upcomingEvents = [
    {
      id: 1,
      title: 'Agricultural Innovation Summit 2024',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'Islamabad Convention Center',
      description: 'Join us for a comprehensive summit featuring the latest innovations in agricultural technology, sustainable farming practices, and networking opportunities with industry leaders.',
      category: 'Conference',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
      registrationRequired: true
    },
    {
      id: 2,
      title: 'Organic Farming Workshop',
      date: '2024-04-20',
      time: '10:00 AM',
      location: 'Lahore Agricultural University',
      description: 'Learn practical organic farming techniques from expert farmers. This hands-on workshop covers soil preparation, natural pest control, and organic certification processes.',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800',
      registrationRequired: true
    },
    {
      id: 3,
      title: 'Farmers Market & Exhibition',
      date: '2024-04-25',
      time: '08:00 AM',
      location: 'Karachi Expo Center',
      description: 'A vibrant marketplace showcasing local produce, agricultural equipment, and farm-to-table products. Open to all visitors with live demonstrations and tastings.',
      category: 'Exhibition',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      registrationRequired: false
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Webinar',
      date: '2024-05-01',
      time: '02:00 PM',
      location: 'Online Event',
      description: 'An interactive online session discussing climate-resilient farming practices, water conservation techniques, and sustainable crop management strategies.',
      category: 'Webinar',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72a?w=800',
      registrationRequired: true
    },
    {
      id: 5,
      title: 'Livestock Management Training',
      date: '2024-05-10',
      time: '09:00 AM',
      location: 'Faisalabad Agricultural Research Center',
      description: 'Comprehensive training on modern livestock management, including nutrition, health monitoring, and breeding best practices for dairy and meat production.',
      category: 'Training',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
      registrationRequired: true
    },
    {
      id: 6,
      title: 'Harvest Festival Celebration',
      date: '2024-05-15',
      time: '11:00 AM',
      location: 'Multan Agricultural Park',
      description: 'Celebrate the harvest season with traditional music, food, and cultural activities. A family-friendly event showcasing the rich agricultural heritage of the region.',
      category: 'Festival',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      registrationRequired: false
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
                      {formatDate(event.date)}
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



