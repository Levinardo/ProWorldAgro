import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      title: t('contactPage.contact1.title'),
      name: t('contactPage.contact1.name'),
      phone: t('contactPage.contact1.phone'),
      email: t('contactPage.contact1.email')
    },
    {
      title: t('contactPage.contact2.title'),
      name: t('contactPage.contact2.name'),
      phone: t('contactPage.contact2.phone'),
      email: t('contactPage.contact2.email')
    },
    {
      title: t('contactPage.contact3.title'),
      name: t('contactPage.contact3.name'),
      phone: t('contactPage.contact3.phone'),
      email: t('contactPage.contact3.email')
    },
    {
      title: t('contactPage.contact4.title'),
      name: t('contactPage.contact4.name'),
      phone: t('contactPage.contact4.phone'),
      email: t('contactPage.contact4.email')
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">{t('contactPage.title')}</h1>
          <button className="contact-cta-button">
            {t('contactPage.ctaButton')}
          </button>
        </div>
        
        <div className="contact-cards-grid">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <h3 className="contact-card-title">{contact.title}</h3>
              <h4 className="contact-card-name">{contact.name}</h4>
              <div className="contact-card-info">
                {contact.phone && (
                  <div className="contact-info-item">
                    <span className="contact-icon phone-icon">📞</span>
                    <span className="contact-info-text">{contact.phone}</span>
                  </div>
                )}
                <div className="contact-info-item">
                  <span className="contact-icon email-icon">✉️</span>
                  <a href={`mailto:${contact.email}`} className="contact-info-text contact-email">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Map */}
        <section className="contact-map-section">
          <h2 className="contact-map-title">{t('contactPage.locationTitle')}</h2>
          <p className="contact-map-subtitle">{t('contactPage.locationSubtitle')}</p>
          <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13255.123456789!2d71.5249!3d34.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xfdbfa1e903d251d1!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peshawar Location Map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

