import React from 'react';
import { useTranslation } from 'react-i18next';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">{t('privacyPolicy.title', 'Privacy Policy')}</h1>
          <p className="policy-last-updated">
            {t('privacyPolicy.lastUpdated', 'Last Updated:')} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section1.title', '1. Introduction')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section1.content', 'Livestock & Agriculture Professionals ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services related to livestock, agriculture, and international documentation services.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section2.title', '2. Information We Collect')}
            </h2>
            <h3 className="policy-subsection-title">
              {t('privacyPolicy.section2.subsection1', '2.1 Personal Information')}
            </h3>
            <p className="policy-text">
              {t('privacyPolicy.section2.subsection1Content', 'We may collect personal information that you provide directly to us, including:')}
            </p>
            <ul className="policy-list">
              <li>{t('privacyPolicy.section2.item1', 'Name, email address, phone number, and postal address')}</li>
              <li>{t('privacyPolicy.section2.item2', 'Passport information and identification documents for visa and documentation services')}</li>
              <li>{t('privacyPolicy.section2.item3', 'Business information, including company name, registration details, and professional credentials')}</li>
              <li>{t('privacyPolicy.section2.item4', 'Payment information for service transactions')}</li>
              <li>{t('privacyPolicy.section2.item5', 'Event registration and participation information')}</li>
            </ul>

            <h3 className="policy-subsection-title">
              {t('privacyPolicy.section2.subsection2', '2.2 Automatically Collected Information')}
            </h3>
            <p className="policy-text">
              {t('privacyPolicy.section2.subsection2Content', 'When you visit our website, we may automatically collect certain information about your device, including:')}
            </p>
            <ul className="policy-list">
              <li>{t('privacyPolicy.section2.item6', 'IP address and browser type')}</li>
              <li>{t('privacyPolicy.section2.item7', 'Pages visited and time spent on pages')}</li>
              <li>{t('privacyPolicy.section2.item8', 'Referring website addresses')}</li>
              <li>{t('privacyPolicy.section2.item9', 'Device identifiers and operating system information')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section3.title', '3. How We Use Your Information')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section3.content', 'We use the information we collect to:')}
            </p>
            <ul className="policy-list">
              <li>{t('privacyPolicy.section3.item1', 'Provide, maintain, and improve our services, including documentation, visa support, and event registration')}</li>
              <li>{t('privacyPolicy.section3.item2', 'Process transactions and send related information, including confirmations and invoices')}</li>
              <li>{t('privacyPolicy.section3.item3', 'Send administrative information, updates, and marketing communications')}</li>
              <li>{t('privacyPolicy.section3.item4', 'Respond to your inquiries, comments, and requests')}</li>
              <li>{t('privacyPolicy.section3.item5', 'Monitor and analyze trends, usage, and activities')}</li>
              <li>{t('privacyPolicy.section3.item6', 'Detect, prevent, and address technical issues and fraudulent activities')}</li>
              <li>{t('privacyPolicy.section3.item7', 'Comply with legal obligations and protect our rights')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section4.title', '4. Information Sharing and Disclosure')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section4.content', 'We may share your information in the following circumstances:')}
            </p>
            <ul className="policy-list">
              <li>{t('privacyPolicy.section4.item1', 'With service providers who assist us in operating our website and conducting our business')}</li>
              <li>{t('privacyPolicy.section4.item2', 'With government authorities and embassies for visa and documentation processing')}</li>
              <li>{t('privacyPolicy.section4.item3', 'With event organizers (e.g., Sommet de l\'Élevage) for registration and participation purposes')}</li>
              <li>{t('privacyPolicy.section4.item4', 'When required by law or to protect our rights and safety')}</li>
              <li>{t('privacyPolicy.section4.item5', 'In connection with a business transfer, merger, or acquisition')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section5.title', '5. Data Security')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section5.content', 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section6.title', '6. Your Rights')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section6.content', 'Depending on your location, you may have the following rights regarding your personal information:')}
            </p>
            <ul className="policy-list">
              <li>{t('privacyPolicy.section6.item1', 'Access and receive a copy of your personal data')}</li>
              <li>{t('privacyPolicy.section6.item2', 'Rectify inaccurate or incomplete data')}</li>
              <li>{t('privacyPolicy.section6.item3', 'Request deletion of your personal data')}</li>
              <li>{t('privacyPolicy.section6.item4', 'Object to processing of your personal data')}</li>
              <li>{t('privacyPolicy.section6.item5', 'Request restriction of processing')}</li>
              <li>{t('privacyPolicy.section6.item6', 'Data portability')}</li>
              <li>{t('privacyPolicy.section6.item7', 'Withdraw consent at any time')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section7.title', '7. Cookies and Tracking Technologies')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section7.content', 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our Cookie Policy.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section8.title', '8. International Data Transfers')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section8.content', 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to these locations.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section9.title', '9. Children\'s Privacy')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section9.content', 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section10.title', '10. Changes to This Privacy Policy')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section10.content', 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('privacyPolicy.section11.title', '11. Contact Us')}
            </h2>
            <p className="policy-text">
              {t('privacyPolicy.section11.content', 'If you have any questions about this Privacy Policy, please contact us at:')}
            </p>
            <div className="policy-contact">
              <p><strong>{t('privacyPolicy.section11.email', 'Email:')}</strong> info@livestockprofessionals.com</p>
              <p><strong>{t('privacyPolicy.section11.address', 'Address:')}</strong> Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

