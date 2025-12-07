import React from 'react';
import { Link } from 'react-router-dom';
import './AgentOfDocumentation.css';

const AgentOfDocumentation = () => {
  return (
    <div className="agent-doc-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content glass-card">
            <div className="flag-emoji">🇵🇰</div>
            <h1>Agent of Documentation – Pakistan</h1>
            <h2>Professional Support for Pakistani Investors & Visitors Attending Sommet de l'Élevage (France)</h2>
            <p className="hero-subtitle">Your Complete Gateway to Europe's Premier Livestock Exhibition</p>
            <p className="hero-description">
              We provide seamless documentation, guidance, and coordination services for Pakistani businesspersons, 
              livestock investors, and industry visitors who wish to attend the <strong>Sommet de l'Élevage</strong>, 
              one of the world's leading livestock exhibitions.
            </p>
            <p className="hero-purpose">
              <strong>Our purpose:</strong> Ensure that your entire visit — from planning to participation — 
              is smooth, well-documented, and professionally managed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">📦 Our Complete Service Package</h2>
          
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card glass-card">
              <div className="service-number">1</div>
              <h3>Visa Documentation & Application Support</h3>
              <p>We prepare and organise all documents required for a successful Schengen visa application:</p>
              <ul>
                <li>Visa guidance and checklist</li>
                <li>Application form assistance</li>
                <li>Event invitation request letter</li>
                <li>Company/Business Introduction Letter</li>
                <li>Employer NOC / personal profession cover letter</li>
                <li>Bank statement formatting & financial documentation</li>
                <li>Travel itinerary</li>
                <li>Hotel booking & flight reservation</li>
                <li>Appointment booking & file review before submission</li>
              </ul>
              <div className="service-objective">
                <strong>Objective:</strong> Increase your visa success rate with a professionally arranged file.
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card glass-card">
              <div className="service-number">2</div>
              <h3>Sommet de l'Élevage Event Registration</h3>
              <p>We complete all registration tasks on your behalf:</p>
              <ul>
                <li>Standard or VIP visitor registration</li>
                <li>Badge confirmation and QR code issuance</li>
                <li>Providing event maps, schedules, and hall plans</li>
                <li>Printing and arranging a visitor pack (if needed)</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card glass-card">
              <div className="service-number">3</div>
              <h3>Investor / Business Profile Preparation</h3>
              <p>We design a professional profile package for international networking:</p>
              <ul>
                <li>Company profile (2–4 pages)</li>
                <li>Investor profile introduction</li>
                <li>Areas of interest (dairy, beef, sheep, poultry, genetics, machinery, etc.)</li>
                <li>Business cards (optional)</li>
                <li>Professional email templates to contact exhibitors</li>
              </ul>
              <div className="service-highlight">
                This helps you build credibility in France and attract potential partners.
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card glass-card">
              <div className="service-number">4</div>
              <h3>Coordination With Event Organisers & Exhibitors</h3>
              <p>We act as your liaison to:</p>
              <ul>
                <li>Arrange meetings with exhibitors</li>
                <li>Fix appointments with farm managers, genetics companies, equipment manufacturers</li>
                <li>Organise group visits from Pakistan</li>
                <li>Request guided tours or business briefing sessions</li>
                <li>Provide exhibitor lists and recommended contacts</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="service-card glass-card">
              <div className="service-number">5</div>
              <h3>Travel & Logistics Documentation</h3>
              <p>We prepare all travel-related paperwork:</p>
              <ul>
                <li>Hotel booking documents</li>
                <li>Flight reservation (optional)</li>
                <li>Travel insurance guidance</li>
                <li>Local transport guidance (trains, buses, taxis)</li>
                <li>Full day-by-day event plan</li>
                <li>Airport security document pack</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="service-card glass-card">
              <div className="service-number">6</div>
              <h3>Advisory for Pakistani Investors</h3>
              <p>Customized guidance:</p>
              <ul>
                <li>Which halls/booths are most relevant to your investment</li>
                <li>Dairy & beef genetics companies to visit</li>
                <li>Machinery & equipment suppliers</li>
                <li>Livestock nutrition, breeding, and technology exhibitors</li>
                <li>Tips for building international business partnerships</li>
                <li>Cultural etiquette & communication guidance</li>
              </ul>
            </div>

            {/* Service 7 */}
            <div className="service-card glass-card">
              <div className="service-number">7</div>
              <h3>Translation & Professional Communication</h3>
              <p>We provide:</p>
              <ul>
                <li>French & English email drafting</li>
                <li>Assistance with exhibitor communication</li>
                <li>Translation of brochures or meeting notes</li>
                <li>Support for filling French forms or correspondence</li>
              </ul>
            </div>

            {/* Service 8 */}
            <div className="service-card glass-card">
              <div className="service-number">8</div>
              <h3>Attendance Certificate & Reimbursement File</h3>
              <p>If required for company reimbursement, government programs, Chamber of Commerce, or future visa applications, we prepare a full Participation Documentation File, including:</p>
              <ul>
                <li>Event attendance proofs</li>
                <li>Business meetings summary</li>
                <li>Travel expense list</li>
                <li>Copies of registration & documents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">⭐ Why Pakistani Investors Prefer Using an Agent of Documentation</h2>
          <div className="benefits-grid">
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Saves time and confusion</span>
            </div>
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Avoids mistakes in visa file</span>
            </div>
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Professional guidance for a foreign event</span>
            </div>
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Stronger business networking</span>
            </div>
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Well-presented profiles improve credibility</span>
            </div>
            <div className="benefit-item glass-card">
              <span className="checkmark">✅</span>
              <span>Stress-free coordination and communication</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="addons-section">
        <div className="container">
          <h2 className="section-title">🎯 Extra Add-Ons (Optional)</h2>
          <div className="addons-list">
            <div className="addon-item glass-card">Group travel management for Pakistani delegations</div>
            <div className="addon-item glass-card">Media coverage or photography during event</div>
            <div className="addon-item glass-card">WhatsApp guidance during travel</div>
            <div className="addon-item glass-card">Support in applying for future livestock events in Europe</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">📞 Contact Us</h2>
          <div className="contact-content">
            <p className="contact-headline">
              <strong>Ready to make your Sommet de l'Élevage visit a success?</strong>
            </p>
            <p className="contact-description">
              Let us handle all the documentation, coordination, and professional support so you can focus on 
              what matters most: building international partnerships and exploring investment opportunities in 
              the global livestock industry.
            </p>
            <div className="tagline glass-card">
              <em>Agent of Documentation – Pakistan</em><br />
              <em>Your Trusted Partner for International Livestock Events</em>
            </div>
            <Link to="/registration" className="register-button">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentOfDocumentation;

