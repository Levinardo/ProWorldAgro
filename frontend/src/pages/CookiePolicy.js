import React from 'react';
import { useTranslation } from 'react-i18next';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1 className="policy-title">{t('cookiePolicy.title', 'Cookie Policy')}</h1>
          <p className="policy-last-updated">
            {t('cookiePolicy.lastUpdated', 'Last Updated:')} {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section1.title', '1. What Are Cookies')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section1.content', 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section2.title', '2. How We Use Cookies')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section2.content', 'Livestock & Agriculture Professionals uses cookies to enhance your experience on our website. We use cookies for the following purposes:')}
            </p>
            <ul className="policy-list">
              <li>{t('cookiePolicy.section2.item1', 'To enable certain functions of the website')}</li>
              <li>{t('cookiePolicy.section2.item2', 'To provide analytics and track website usage')}</li>
              <li>{t('cookiePolicy.section2.item3', 'To store your preferences and settings')}</li>
              <li>{t('cookiePolicy.section2.item4', 'To improve website performance and user experience')}</li>
              <li>{t('cookiePolicy.section2.item5', 'To remember your language preferences')}</li>
              <li>{t('cookiePolicy.section2.item6', 'To maintain your session when logged in')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section3.title', '3. Types of Cookies We Use')}
            </h2>
            
            <h3 className="policy-subsection-title">
              {t('cookiePolicy.section3.subsection1', '3.1 Essential Cookies')}
            </h3>
            <p className="policy-text">
              {t('cookiePolicy.section3.subsection1Content', 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are essential for the website to work.')}
            </p>

            <h3 className="policy-subsection-title">
              {t('cookiePolicy.section3.subsection2', '3.2 Performance and Analytics Cookies')}
            </h3>
            <p className="policy-text">
              {t('cookiePolicy.section3.subsection2Content', 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works, for example, by ensuring that users find what they are looking for easily.')}
            </p>

            <h3 className="policy-subsection-title">
              {t('cookiePolicy.section3.subsection3', '3.3 Functionality Cookies')}
            </h3>
            <p className="policy-text">
              {t('cookiePolicy.section3.subsection3Content', 'These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, personalized features. They may also be used to provide services you have requested.')}
            </p>

            <h3 className="policy-subsection-title">
              {t('cookiePolicy.section3.subsection4', '3.4 Targeting/Advertising Cookies')}
            </h3>
            <p className="policy-text">
              {t('cookiePolicy.section3.subsection4Content', 'These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant content on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section4.title', '4. Third-Party Cookies')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section4.content', 'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party cookies may include:')}
            </p>
            <ul className="policy-list">
              <li>{t('cookiePolicy.section4.item1', 'Google Analytics for website analytics')}</li>
              <li>{t('cookiePolicy.section4.item2', 'Social media platforms for social sharing features')}</li>
              <li>{t('cookiePolicy.section4.item3', 'Payment processors for transaction processing')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section5.title', '5. Managing Cookies')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section5.content', 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings. Most web browsers allow some control of most cookies through the browser settings. However, please note that if you choose to reject cookies, you may not be able to use all features of our website.')}
            </p>
            
            <h3 className="policy-subsection-title">
              {t('cookiePolicy.section5.subsection1', 'Browser Settings')}
            </h3>
            <p className="policy-text">
              {t('cookiePolicy.section5.subsection1Content', 'To manage cookies in your browser, you can:')}
            </p>
            <ul className="policy-list">
              <li>{t('cookiePolicy.section5.item1', 'Chrome: Settings → Privacy and Security → Cookies and other site data')}</li>
              <li>{t('cookiePolicy.section5.item2', 'Firefox: Options → Privacy & Security → Cookies and Site Data')}</li>
              <li>{t('cookiePolicy.section5.item3', 'Safari: Preferences → Privacy → Cookies and website data')}</li>
              <li>{t('cookiePolicy.section5.item4', 'Edge: Settings → Privacy, search, and services → Cookies and site permissions')}</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section6.title', '6. Cookie Duration')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section6.content', 'Cookies can be either "session" or "persistent" cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. We use both types of cookies on our website.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section7.title', '7. Updates to This Cookie Policy')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section7.content', 'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date.')}
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-section-title">
              {t('cookiePolicy.section8.title', '8. Contact Us')}
            </h2>
            <p className="policy-text">
              {t('cookiePolicy.section8.content', 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at:')}
            </p>
            <div className="policy-contact">
              <p><strong>{t('cookiePolicy.section8.email', 'Email:')}</strong> info@livestockprofessionals.com</p>
              <p><strong>{t('cookiePolicy.section8.address', 'Address:')}</strong> Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

