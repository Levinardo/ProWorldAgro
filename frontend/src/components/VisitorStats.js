import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getVisitorStats, trackVisit } from '../services/visitorTracking';
import './VisitorStats.css';

// Helper function to get flag emoji from country code
const getCountryFlag = (countryCode) => {
  if (!countryCode || countryCode === 'XX' || countryCode.length !== 2) {
    return '🌍'; // Default globe emoji for unknown
  }
  
  // Convert country code to flag emoji using Unicode regional indicator symbols
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  
  return String.fromCodePoint(...codePoints);
};

const VisitorStats = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ total: 0, countries: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Track the current visit
    trackVisit();

    // Load visitor statistics
    const loadStats = async () => {
      try {
        setLoading(true);
        const data = await getVisitorStats();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error loading visitor stats:', err);
        setError(t('visitorStats.error'));
      } finally {
        setLoading(false);
      }
    };

    loadStats();

    // Refresh stats every 30 seconds
    const interval = setInterval(loadStats, 30000);

    return () => clearInterval(interval);
  }, [t]);

  if (loading && stats.total === 0) {
    return (
      <div className="visitor-stats-container">
        <div className="visitor-stats-loading">{t('visitorStats.loading')}</div>
      </div>
    );
  }

  if (error && stats.total === 0) {
    return (
      <div className="visitor-stats-container">
        <div className="visitor-stats-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="visitor-stats-container">
      <div className="visitor-stats-header">
        <h2 className="visitor-stats-title">{t('visitorStats.title')}</h2>
        <div className="visitor-stats-total">
          <span className="visitor-stats-number">{stats.total.toLocaleString()}</span>
          <span className="visitor-stats-label">{t('visitorStats.totalVisitors')}</span>
        </div>
      </div>

      {stats.countries.length > 0 && (
        <div className="visitor-stats-countries">
          <h3 className="visitor-stats-subtitle">{t('visitorStats.visitorsByCountry')}</h3>
          <div className="visitor-stats-list">
            {stats.countries.map((country, index) => (
              <div key={country.id || index} className="visitor-stats-country-item">
                <div className="visitor-stats-country-info">
                  <span className="visitor-stats-country-flag">
                    {getCountryFlag(country.countryCode)}
                  </span>
                  <span className="visitor-stats-country-name">
                    {country.countryName || country.id}
                  </span>
                </div>
                <div className="visitor-stats-country-count">
                  {country.count.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {stats.countries.length === 0 && !loading && (
        <div className="visitor-stats-empty">
          {t('visitorStats.noData')}
        </div>
      )}
    </div>
  );
};

export default VisitorStats;

