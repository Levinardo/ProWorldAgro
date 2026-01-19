import React from 'react';
import './About.css';

const About = () => {

  const coreServices = [
    {
      title: "International Documentation & Conference Facilitation",
      items: [
        "Official documentation for Sommet de l'Élevage (France)",
        "Visa guidance & travel facilitation",
        "International livestock & agriculture expo participation",
        "Business matchmaking with global companies"
      ]
    },
    {
      title: "Veterinary & Agriculture Professional Mobility",
      items: [
        "Registration of Pakistani veterinarians & agriculture experts",
        "International job and training opportunities",
        "Global professional networking",
        "Skill certification & profile verification"
      ]
    },
    {
      title: "Livestock & Agriculture Marketplace",
      items: [
        "A secure trading platform for:",
        "• Cattle, buffalo, goats, sheep, poultry & exotic breeds, pets",
        "• Dairy & meat products",
        "• Seeds, fertilizers & farm inputs, medicines",
        "• Farm machinery & equipment",
        "(Buy • Sell • Advertise • Connect)"
      ]
    },
    {
      title: "Farm & Industry Services",
      items: [
        "Farm consultancy",
        "Breeding & genetics support",
        "Feed and nutrition solutions",
        "Veterinary tele-support",
        "Disease management guidance"
      ]
    },
    {
      title: "Knowledge & Training Hub",
      items: [
        "Online workshops",
        "International speaker sessions",
        "Modern farming techniques",
        "Climate-smart agriculture guidance"
      ]
    }
  ];

  const benefits = [
    "Trusted International Partner",
    "Verified Buyers & Sellers",
    "Professional Authentication System",
    "Pakistan-focused but Globally Connected",
    "Secure & Transparent Operations",
    "Multi-language Support",
    "Modern Digital Experience"
  ];

  const whoCanJoin = [
    "Farmers",
    "Veterinarians",
    "Agriculture Experts",
    "Exporters & Importers",
    "Equipment Suppliers",
    "Investors",
    "Students & Researchers"
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Our Mission */}
        <section className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">Our Mission</h2>
              <p className="mission-vision-text">
                To modernize Pakistan's livestock and agriculture sector by providing international exposure, 
                professional mobility, trusted trade solutions, knowledge exchange, and digital market access.
              </p>
              <p className="mission-vision-text" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                We aim to make Pakistan a recognized participant in the global livestock and agriculture industry.
              </p>
            </div>
            <div className="mission-vision-item">
              <h2 className="mission-vision-heading">Our Vision</h2>
              <p className="mission-vision-text">
                To become South Asia's leading digital ecosystem for livestock, veterinary services, 
                agriculture trade, global conferences, and professional exchange.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="key-services-section">
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>Core Services</h2>
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
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>Why Livestock & Agriculture Professionals?</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="service-icon-card">
                <div className="service-icon">✔</div>
                <h3 className="service-icon-title">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Join */}
        <section className="key-services-section">
          <h2 className="marketplace-title" style={{ marginBottom: '3rem' }}>Who Can Join?</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {whoCanJoin.map((item, index) => (
              <div key={index} className="service-icon-card">
                <div className="service-icon">{['👨‍🌾', '👨‍⚕️', '🌾', '📦', '🔧', '💰', '🎓'][index] || '👤'}</div>
                <h3 className="service-icon-title">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="marketplace-section">
          <h2 className="marketplace-title">Our Location</h2>
          <p className="marketplace-subtitle">Visit us in Peshawar, Pakistan</p>
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




