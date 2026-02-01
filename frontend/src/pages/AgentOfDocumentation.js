import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AgentOfDocumentation.css';

const AgentOfDocumentation = () => {
  const { t } = useTranslation();
  return (
    <div className="agent-doc-page">
      {/* Services Section */}
      <section className="key-services-section">
        <div className="container">
          <h2 className="marketplace-title">{t('agentOfDocumentationPage.servicesTitle')}</h2>
          
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {/* Service 1 */}
            <div className="service-icon-card" style={{ textAlign: 'left', padding: '2rem' }}>
              <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>1</div>
              <h3 className="service-icon-title" style={{ marginBottom: '1rem' }}>{t('agentOfDocumentationPage.service1Title')}</h3>
              <p style={{ fontSize: '0.95rem', color: '#7f8c8d', marginBottom: '1rem', lineHeight: '1.6' }}>
                {t('agentOfDocumentationPage.service1Desc')}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item1')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item2')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item3')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item4')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item5')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item6')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item7')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item8')}
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> {t('agentOfDocumentationPage.service1Item9')}
                </li>
              </ul>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e3f2fd', borderRadius: '8px', fontSize: '0.9rem', color: '#1f5a3a' }}>
                <strong>{t('agentOfDocumentationPage.service1Objective')}</strong> {t('agentOfDocumentationPage.service1ObjectiveText')}
              </div>
            </div>

            {/* Service 2-8 - Similar structure */}
            {[2, 3, 4, 5, 6, 7, 8].map(num => (
              <div key={num} className="service-icon-card" style={{ textAlign: 'left', padding: '2rem' }}>
                <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{num}</div>
                <h3 className="service-icon-title" style={{ marginBottom: '1rem' }}>
                  {num === 2 ? t('agentOfDocumentationPage.service2Title') :
                   num === 3 ? t('agentOfDocumentationPage.service3Title') :
                   num === 4 ? t('agentOfDocumentationPage.service4Title') :
                   num === 5 ? t('agentOfDocumentationPage.service5Title') :
                   num === 6 ? t('agentOfDocumentationPage.service6Title') :
                   num === 7 ? t('agentOfDocumentationPage.service7Title') :
                   t('agentOfDocumentationPage.service8Title')}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#7f8c8d', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {num === 2 ? t('agentOfDocumentationPage.service2Desc') :
                   num === 3 ? t('agentOfDocumentationPage.service3Desc') :
                   num === 4 ? t('agentOfDocumentationPage.service4Desc') :
                   num === 5 ? t('agentOfDocumentationPage.service5Desc') :
                   num === 6 ? t('agentOfDocumentationPage.service6Desc') :
                   num === 7 ? t('agentOfDocumentationPage.service7Desc') :
                   t('agentOfDocumentationPage.service8Desc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="key-services-section">
        <div className="container">
          <h2 className="marketplace-title">{t('agentOfDocumentationPage.whyTitle')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              t('agentOfDocumentationPage.why1'),
              t('agentOfDocumentationPage.why2'),
              t('agentOfDocumentationPage.why3'),
              t('agentOfDocumentationPage.why4'),
              t('agentOfDocumentationPage.why5'),
              t('agentOfDocumentationPage.why6')
            ].map((benefit, idx) => (
              <div key={idx} className="service-icon-card">
                <div className="service-icon">✅</div>
                <h3 className="service-icon-title">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="key-services-section">
        <div className="container">
          <h2 className="marketplace-title">{t('agentOfDocumentationPage.addonsTitle')}</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              t('agentOfDocumentationPage.addon1'),
              t('agentOfDocumentationPage.addon2'),
              t('agentOfDocumentationPage.addon3'),
              t('agentOfDocumentationPage.addon4')
            ].map((addon, idx) => (
              <div key={idx} className="service-icon-card">
                <div className="service-icon">🎯</div>
                <h3 className="service-icon-title">{addon}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="membership-section">
        <div className="container">
          <div className="membership-content">
            <p className="membership-text">
              <strong>{t('agentOfDocumentationPage.contactTitle')}</strong><br />
              {t('agentOfDocumentationPage.contactText')}
            </p>
            <Link to="/registration" className="btn-gold">
              {t('agentOfDocumentationPage.registerNow')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentOfDocumentation;

