import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  const coreServices = [
    {
      title: t('aboutPage.service1Title'),
      items: [
        t('aboutPage.service1Item1'),
        t('aboutPage.service1Item2'),
        t('aboutPage.service1Item3'),
        t('aboutPage.service1Item4')
      ]
    },
    {
      title: t('aboutPage.service2Title'),
      items: [
        t('aboutPage.service2Item1'),
        t('aboutPage.service2Item2'),
        t('aboutPage.service2Item3'),
        t('aboutPage.service2Item4')
      ]
    },
    {
      title: t('aboutPage.service3Title'),
      items: [
        t('aboutPage.service3Item1'),
        t('aboutPage.service3Item2'),
        t('aboutPage.service3Item3'),
        t('aboutPage.service3Item4'),
        t('aboutPage.service3Item5'),
        t('aboutPage.service3Item6')
      ]
    },
    {
      title: t('aboutPage.service4Title'),
      items: [
        t('aboutPage.service4Item1'),
        t('aboutPage.service4Item2'),
        t('aboutPage.service4Item3'),
        t('aboutPage.service4Item4'),
        t('aboutPage.service4Item5')
      ]
    },
    {
      title: t('aboutPage.service5Title'),
      items: [
        t('aboutPage.service5Item1'),
        t('aboutPage.service5Item2'),
        t('aboutPage.service5Item3'),
        t('aboutPage.service5Item4')
      ]
    }
  ];


  return (
    <div className="about">
      <div className="container">
        {/* Our Mission */}
        <section className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">{t('aboutPage.missionTitle')}</h2>
              <p className="mission-vision-text">
                {t('aboutPage.missionText')}
              </p>
              <p className="mission-vision-text" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                {t('aboutPage.missionSubtext')}
              </p>
            </div>
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">{t('aboutPage.visionTitle')}</h2>
              <p className="mission-vision-text">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="key-services-section">
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>{t('aboutPage.coreServicesTitle')}</h2>
          <div className="services-vertical-layout">
            {coreServices.map((service, index) => (
              <React.Fragment key={index}>
                <div className="service-vertical-item">
                  <div className="service-vertical-content">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">{['📄', '👨‍⚕️', '🏪', '🌾', '🎓'][index] || '📋'}</div>
                    </div>
                    <div className="service-text-content">
                      <h3 className="service-icon-title">{service.title}</h3>
                      <ul className="service-items">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < coreServices.length - 1 && (
                  <div className="horizontal-separator">
                    <div className="separator-line-left"></div>
                    <div className="separator-pointer">▶</div>
                    <div className="separator-line-right"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Why Livestock Professionals */}
        <section className="key-services-section">
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>{t('aboutPage.whyTitle')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              t('aboutPage.benefit1'),
              t('aboutPage.benefit2'),
              t('aboutPage.benefit3'),
              t('aboutPage.benefit4'),
              t('aboutPage.benefit5'),
              t('aboutPage.benefit6'),
              t('aboutPage.benefit7')
            ].map((benefit, index) => (
              <div key={index} className="service-icon-card">
                <div className="service-icon">✔</div>
                <h3 className="service-icon-title">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Join */}
        <section className="key-services-section">
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>{t('aboutPage.whoCanJoinTitle')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              t('aboutPage.who1'),
              t('aboutPage.who2'),
              t('aboutPage.who3'),
              t('aboutPage.who4'),
              t('aboutPage.who5'),
              t('aboutPage.who6'),
              t('aboutPage.who7')
            ].map((item, index) => (
              <div key={index} className="service-icon-card">
                <div className="service-icon">{['👨‍🌾', '👨‍⚕️', '🌾', '📦', '🔧', '💰', '🎓'][index] || '👤'}</div>
                <h3 className="service-icon-title">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="marketplace-section">
          <h2 className="marketplace-title">{t('aboutPage.locationTitle')}</h2>
          <p className="marketplace-subtitle">{t('aboutPage.locationSubtitle')}</p>
          <div className="map-container" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
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

export default About;




