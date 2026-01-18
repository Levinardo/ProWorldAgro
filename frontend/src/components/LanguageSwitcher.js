import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'ur' ? 'active' : ''}`}
        onClick={() => changeLanguage('ur')}
        aria-label="Switch to Urdu"
      >
        اردو
      </button>
    </div>
  );
};

export default LanguageSwitcher;











