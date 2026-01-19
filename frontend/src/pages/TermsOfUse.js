import React from 'react';
import { useTranslation } from 'react-i18next';
import './TermsOfUse.css';

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">{t('termsOfUse.title', 'Terms of Use')}</h1>
          <p className="policy-last-updated">
            {t('termsOfUse.lastUpdated', 'Last Updated:')} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section1.title', '1. Acceptance of Terms')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section1.content', 'By accessing and using the Livestock & Agriculture Professionals website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section2.title', '2. Description of Services')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section2.content', 'Livestock & Agriculture Professionals provides the following services:')}
            </p>
            <ul className="policy-list">
              <li>{t('termsOfUse.section2.item1', 'Official documentation services for international livestock and agriculture events (e.g., Sommet de l\'Élevage)')}</li>
              <li>{t('termsOfUse.section2.item2', 'Visa guidance and travel facilitation')}</li>
              <li>{t('termsOfUse.section2.item3', 'Event registration and coordination')}</li>
              <li>{t('termsOfUse.section2.item4', 'Professional networking and business matchmaking')}</li>
              <li>{t('termsOfUse.section2.item5', 'Livestock and agriculture marketplace services')}</li>
              <li>{t('termsOfUse.section2.item6', 'Veterinary and agriculture professional mobility services')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section3.title', '3. User Accounts and Registration')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section3.content', 'To access certain features of our services, you may be required to register for an account. You agree to:')}
            </p>
            <ul className="policy-list">
              <li>{t('termsOfUse.section3.item1', 'Provide accurate, current, and complete information during registration')}</li>
              <li>{t('termsOfUse.section3.item2', 'Maintain and promptly update your account information')}</li>
              <li>{t('termsOfUse.section3.item3', 'Maintain the security of your password and account')}</li>
              <li>{t('termsOfUse.section3.item4', 'Accept responsibility for all activities that occur under your account')}</li>
              <li>{t('termsOfUse.section3.item5', 'Notify us immediately of any unauthorized use of your account')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section4.title', '4. User Conduct')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section4.content', 'You agree not to:')}
            </p>
            <ul className="policy-list">
              <li>{t('termsOfUse.section4.item1', 'Use the service for any illegal purpose or in violation of any laws')}</li>
              <li>{t('termsOfUse.section4.item2', 'Transmit any harmful, offensive, or inappropriate content')}</li>
              <li>{t('termsOfUse.section4.item3', 'Impersonate any person or entity or falsely state your affiliation')}</li>
              <li>{t('termsOfUse.section4.item4', 'Interfere with or disrupt the service or servers')}</li>
              <li>{t('termsOfUse.section4.item5', 'Attempt to gain unauthorized access to any portion of the service')}</li>
              <li>{t('termsOfUse.section4.item6', 'Collect or store personal data about other users without permission')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section5.title', '5. Payment Terms')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section5.content', 'For services requiring payment:')}
            </p>
            <ul className="policy-list">
              <li>{t('termsOfUse.section5.item1', 'All fees are stated in the currency specified at the time of purchase')}</li>
              <li>{t('termsOfUse.section5.item2', 'Payment must be made in full before services are rendered, unless otherwise agreed')}</li>
              <li>{t('termsOfUse.section5.item3', 'Refunds are subject to our refund policy and may vary by service type')}</li>
              <li>{t('termsOfUse.section5.item4', 'We reserve the right to change our pricing at any time, with notice to existing customers')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section6.title', '6. Intellectual Property')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section6.content', 'All content on this website, including text, graphics, logos, images, and software, is the property of Livestock & Agriculture Professionals or its content suppliers and is protected by international copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section7.title', '7. Limitation of Liability')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section7.content', 'Livestock & Agriculture Professionals shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. While we strive to provide accurate information and reliable services, we do not guarantee that our services will be uninterrupted, secure, or error-free.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section8.title', '8. Third-Party Services')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section8.content', 'Our services may include links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party services. Your interactions with third-party services are solely between you and the third party.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section9.title', '9. Service Modifications')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section9.content', 'We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section10.title', '10. Termination')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section10.content', 'We may terminate or suspend your account and access to the service immediately, without prior notice, for any breach of these Terms of Use. Upon termination, your right to use the service will cease immediately.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section11.title', '11. Governing Law')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section11.content', 'These Terms of Use shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section12.title', '12. Changes to Terms')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section12.content', 'We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by posting the updated terms on this page and updating the "Last Updated" date. Your continued use of the service after such modifications constitutes acceptance of the updated terms.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('termsOfUse.section13.title', '13. Contact Information')}
            </h2>
            <p className="policy-text">
              {t('termsOfUse.section13.content', 'If you have any questions about these Terms of Use, please contact us at:')}
            </p>
            <div className="policy-contact">
              <p><strong>{t('termsOfUse.section13.email', 'Email:')}</strong> info@livestockprofessionals.com</p>
              <p><strong>{t('termsOfUse.section13.address', 'Address:')}</strong> Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

