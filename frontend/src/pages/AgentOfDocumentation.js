import React from 'react';
import { Link } from 'react-router-dom';
import './AgentOfDocumentation.css';

const AgentOfDocumentation = () => {
  return (
    <div className="agent-doc-page">
      {/* Services Section */}
      <section className="key-services-section">
        <div className="container">
          <h2 className="marketplace-title">Our Complete Service Package</h2>
          
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {/* Service 1 */}
            <div className="service-icon-card" style={{ textAlign: 'left', padding: '2rem' }}>
              <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>1</div>
              <h3 className="service-icon-title" style={{ marginBottom: '1rem' }}>Visa Documentation & Application Support</h3>
              <p style={{ fontSize: '0.95rem', color: '#7f8c8d', marginBottom: '1rem', lineHeight: '1.6' }}>
                We prepare and organise all documents required for a successful Schengen visa application:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Visa guidance and checklist
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Application form assistance
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Event invitation request letter
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Company/Business Introduction Letter
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Employer NOC / personal profession cover letter
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Bank statement formatting & financial documentation
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Travel itinerary
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Hotel booking & flight reservation
                </li>
                <li style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#1f5a3a' }}>•</span> Appointment booking & file review before submission
                </li>
              </ul>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e3f2fd', borderRadius: '8px', fontSize: '0.9rem', color: '#1f5a3a' }}>
                <strong>Objective:</strong> Increase your visa success rate with a professionally arranged file.
              </div>
            </div>

            {/* Service 2-8 - Similar structure */}
            {[2, 3, 4, 5, 6, 7, 8].map(num => (
              <div key={num} className="service-icon-card" style={{ textAlign: 'left', padding: '2rem' }}>
                <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{num}</div>
                <h3 className="service-icon-title" style={{ marginBottom: '1rem' }}>
                  {num === 2 ? "Sommet de l'Élevage Event Registration" :
                   num === 3 ? "Investor / Business Profile Preparation" :
                   num === 4 ? "Coordination With Event Organisers & Exhibitors" :
                   num === 5 ? "Travel & Logistics Documentation" :
                   num === 6 ? "Advisory for Pakistani Investors" :
                   num === 7 ? "Translation & Professional Communication" :
                   "Attendance Certificate & Reimbursement File"}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#7f8c8d', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {num === 2 ? "We complete all registration tasks on your behalf." :
                   num === 3 ? "We design a professional profile package for international networking." :
                   num === 4 ? "We act as your liaison to coordinate with event organisers and exhibitors." :
                   num === 5 ? "We prepare all travel-related paperwork." :
                   num === 6 ? "Customized guidance for Pakistani investors." :
                   num === 7 ? "We provide translation and professional communication services." :
                   "Full Participation Documentation File preparation."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="key-services-section">
        <div className="container">
          <h2 className="marketplace-title">Why Pakistani Investors Prefer Using an Agent of Documentation</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {['Saves time and confusion', 'Avoids mistakes in visa file', 'Professional guidance for a foreign event', 
              'Stronger business networking', 'Well-presented profiles improve credibility', 'Stress-free coordination and communication'].map((benefit, idx) => (
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
          <h2 className="marketplace-title">Extra Add-Ons (Optional)</h2>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {['Group travel management for Pakistani delegations', 'Media coverage or photography during event', 
              'WhatsApp guidance during travel', 'Support in applying for future livestock and agriculture events in Europe'].map((addon, idx) => (
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
              <strong>Ready to make your Sommet de l'Élevage visit a success?</strong><br />
              Let us handle all the documentation, coordination, and professional support so you can focus on 
              what matters most: building international partnerships and exploring investment opportunities.
            </p>
            <Link to="/registration" className="btn-gold">
              Register Now &gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentOfDocumentation;

