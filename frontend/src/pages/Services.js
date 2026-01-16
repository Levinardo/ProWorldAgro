import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      image: '/services/1.png',
      title: "International Documentation & Conference Facilitation",
      description: "Official documentation for Sommet de l'Élevage (France), visa guidance & travel facilitation, international livestock & agriculture expo participation, and business matchmaking with global companies."
    },
    {
      image: '/services/2.png',
      title: "Veterinary & Agriculture Professional Mobility",
      description: "Registration of Pakistani veterinarians & agriculture experts, international job and training opportunities, global professional networking, and skill certification & profile verification."
    },
    {
      image: '/services/3.png',
      title: "Livestock & Agriculture Marketplace",
      description: "A secure trading platform for cattle, buffalo, goats, sheep, poultry & exotic breeds, dairy & meat products, seeds, fertilizers & farm inputs, and farm machinery & equipment."
    },
    {
      image: '/services/4.png',
      title: "Farm & Industry Services",
      description: "Farm consultancy, breeding & genetics support, feed and nutrition solutions, veterinary tele-support, and disease management guidance."
    },
    {
      image: '/services/5.png',
      title: "Knowledge & Training Hub",
      description: "Online workshops, international speaker sessions, modern farming techniques, and climate-smart agriculture guidance."
    },
    {
      image: '/services/6.png',
      title: "Additional Service 6",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    },
    {
      image: '/services/7.png',
      title: "Additional Service 7",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    },
    {
      image: '/services/8.png',
      title: "Additional Service 8",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    },
    {
      image: '/services/9.png',
      title: "Additional Service 9",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    },
    {
      image: '/services/10.png',
      title: "Additional Service 10",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    },
    {
      image: '/services/11.png',
      title: "Additional Service 11",
      description: "Comprehensive service offering for agricultural and livestock professionals."
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <section className="services-hero-section">
          <h1 className="services-page-title">Our Services</h1>
          <p className="services-page-subtitle">Comprehensive Solutions for Livestock & Agriculture Professionals</p>
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

