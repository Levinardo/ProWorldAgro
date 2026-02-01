import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      image: '/services/1.png',
      title: t('servicesPage.service1Title'),
      description: t('servicesPage.service1Desc')
    },
    {
      image: '/services/2.png',
      title: t('servicesPage.service2Title'),
      description: t('servicesPage.service2Desc')
    },
    {
      image: '/services/3.png',
      title: t('servicesPage.service3Title'),
      description: t('servicesPage.service3Desc')
    },
    {
      image: '/services/4.png',
      title: t('servicesPage.service4Title'),
      description: t('servicesPage.service4Desc')
    },
    {
      image: '/services/5.png',
      title: t('servicesPage.service5Title'),
      description: t('servicesPage.service5Desc')
    },
    {
      image: '/services/6.png',
      title: t('servicesPage.service6Title'),
      description: t('servicesPage.service6Desc')
    },
    {
      image: '/services/7.png',
      title: t('servicesPage.service7Title'),
      description: t('servicesPage.service7Desc')
    },
    {
      image: '/services/8.png',
      title: t('servicesPage.service8Title'),
      description: t('servicesPage.service8Desc')
    },
    {
      image: '/services/9.png',
      title: t('servicesPage.service9Title'),
      description: t('servicesPage.service9Desc')
    },
    {
      image: '/services/10.png',
      title: t('servicesPage.service10Title'),
      description: t('servicesPage.service10Desc')
    },
    {
      image: '/services/11.png',
      title: t('servicesPage.service11Title'),
      description: t('servicesPage.service11Desc')
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <section className="services-hero-section">
          <h1 className="services-page-title">{t('servicesPage.title')}</h1>
          <p className="services-page-subtitle">{t('servicesPage.subtitle')}</p>
        </section>

        <section className="services-grid-section">
          <div className="services-masonry-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-container">
                  <img 
                    src={`${process.env.PUBLIC_URL}${service.image}`}
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

