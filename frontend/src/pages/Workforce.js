import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { saveWorkerRegistration } from '../services/firestore';
import { testFirebaseConnection } from '../services/firebase';
import './Workforce.css';

const Workforce = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    workerType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passportCnic: '',
    rvmpNumber: '',
    address: '',
    city: '',
    province: '',
    country: 'Pakistan',
    experience: '',
    skills: '',
    availability: '',
    additionalInfo: ''
  });

  const [educationEntries, setEducationEntries] = useState([{ id: Date.now(), value: '' }]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firebaseConnected, setFirebaseConnected] = useState(null);

  // Test Firebase connection on component mount
  useEffect(() => {
    const checkFirebaseConnection = async () => {
      const isConnected = await testFirebaseConnection();
      setFirebaseConnected(isConnected);
    };
    checkFirebaseConnection();
  }, []);

  const workerTypes = [
    { value: 'farmer', label: 'Farmer', image: '/workforce/1.png' },
    { value: 'vet', label: 'Veterinarian', image: '/workforce/2.png' },
    { value: 'seeds', label: 'Seeds Specialist', image: '/workforce/3.png' },
    { value: 'livestock', label: 'Livestock & Agriculture Manager', image: '/workforce/4.png' },
    { value: 'agriculture', label: 'Agriculture Expert', image: '/workforce/5.png' },
    { value: 'dairy', label: 'Dairy Specialist', image: '/workforce/6.png' },
    { value: 'labour', label: 'Labour Worker', image: '/images/8.png' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const addEducation = () => {
    setEducationEntries(prev => [
      ...prev,
      { id: Date.now(), value: '' }
    ]);
  };

  const removeEducation = (id) => {
    if (educationEntries.length > 1) {
      setEducationEntries(prev => prev.filter(edu => edu.id !== id));
      // Clear errors for removed education
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`education_${id}`];
        return newErrors;
      });
    }
  };

  const handleEducationChange = (id, value) => {
    setEducationEntries(prev =>
      prev.map(edu =>
        edu.id === id ? { ...edu, value } : edu
      )
    );
    // Clear error when user starts typing
    const errorKey = `education_${id}`;
    if (errors[errorKey]) {
      setErrors(prev => ({
        ...prev,
        [errorKey]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.workerType) {
      newErrors.workerType = t('workforcePage.selectWorkerType');
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('workforcePage.firstNameRequired');
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('workforcePage.lastNameRequired');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('workforcePage.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('workforcePage.validEmail');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('workforcePage.phoneRequired');
    }
    if (!formData.address.trim()) {
      newErrors.address = t('workforcePage.addressRequired');
    }
    if (!formData.city.trim()) {
      newErrors.city = t('workforcePage.cityRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      // Check Firebase connection before submitting
      if (firebaseConnected === false) {
        setErrors({ submit: t('workforcePage.dbError') });
        return;
      }

      setIsSubmitting(true);
      
      try {
        const submissionData = {
          ...formData,
          education: educationEntries.map(edu => edu.value).filter(val => val.trim() !== ''),
          submittedAt: new Date().toISOString()
        };
        
        const result = await saveWorkerRegistration(submissionData);
        
        if (result.success) {
          toast.success('Registration submitted successfully!', {
            duration: 5000,
            style: {
              background: 'rgba(76, 175, 80, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '8px',
              border: '1px solid rgba(76, 175, 80, 0.3)',
            },
          });

          // Reset form
          setFormData({
            workerType: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            passportCnic: '',
            rvmpNumber: '',
            address: '',
            city: '',
            province: '',
            country: 'Pakistan',
            experience: '',
            skills: '',
            availability: '',
            additionalInfo: ''
          });
          setEducationEntries([{ id: Date.now(), value: '' }]);
        } else {
          toast.error(result.error || 'Failed to submit registration. Please try again.', {
            duration: 5000,
            style: {
              background: 'rgba(244, 67, 54, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '8px',
              border: '1px solid rgba(244, 67, 54, 0.3)',
            },
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('An error occurred. Please try again later.', {
          duration: 5000,
          style: {
            background: 'rgba(244, 67, 54, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            borderRadius: '8px',
            border: '1px solid rgba(244, 67, 54, 0.3)',
          },
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="workforce-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo/background2.jpg)` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-globe-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-main-title">{t('workforcePage.heroTitle')}</h1>
              <p className="hero-brown-text">{t('workforcePage.heroSubtitle')}</p>
              <p className="hero-subtitle">{t('workforcePage.heroDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="workforce-content">
          <div className="workforce-info">
            <div className="info-section glass-card">
              <h3 className="info-section-title">{t('workforcePage.joinTitle')}</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('workforcePage.benefit1')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('workforcePage.benefit2')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('workforcePage.benefit3')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('workforcePage.benefit4')}</span>
                </div>
              </div>
            </div>

            <div className="info-section glass-card">
              <h3 className="info-section-title">{t('workforcePage.contactInfo')}</h3>
              <div className="info-items-grid">
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📍</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('workforcePage.officeLocation')}</strong>
                    <p>Pakistan</p>
                  </div>
                </div>
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">✉️</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('workforcePage.email')}</strong>
                    <p>info@livestockprofessionals.com</p>
                  </div>
                </div>
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📞</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('workforcePage.phone')}</strong>
                    <p>+92 333 3132333</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workforce-form-container glass-card">
            <h2 className="form-title">{t('workforcePage.formTitle')}</h2>

            <form onSubmit={handleSubmit} className="workforce-form">
              <div className="form-group full-width">
                <label htmlFor="workerType">
                  {t('workforcePage.workerType')} <span className="required">*</span>
                </label>
                <div className="worker-type-grid">
                  {workerTypes.map(type => (
                    <label
                      key={type.value}
                      className={`worker-type-card ${formData.workerType === type.value ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="workerType"
                        value={type.value}
                        checked={formData.workerType === type.value}
                        onChange={handleChange}
                      />
                      <img 
                        src={type.image} 
                        alt={type.label}
                        className="worker-type-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </label>
                  ))}
                </div>
                {errors.workerType && (
                  <span className="error-message">{errors.workerType}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    {t('workforcePage.firstName')} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                    placeholder={t('workforcePage.enterFirstName')}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    {t('workforcePage.lastName')} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                    placeholder={t('workforcePage.enterLastName')}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    {t('workforcePage.emailAddress')} <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder={t('workforcePage.enterEmail')}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    {t('workforcePage.phoneNumber')} <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder={t('workforcePage.enterPhone')}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="passportCnic">
                    {t('workforcePage.passportCnic')}
                  </label>
                  <input
                    type="text"
                    id="passportCnic"
                    name="passportCnic"
                    value={formData.passportCnic}
                    onChange={handleChange}
                    placeholder={t('workforcePage.enterPassport')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rvmpNumber">
                    {t('workforcePage.rvmpNumber')}
                  </label>
                  <input
                    type="text"
                    id="rvmpNumber"
                    name="rvmpNumber"
                    value={formData.rvmpNumber}
                    onChange={handleChange}
                    placeholder={t('workforcePage.enterRVMP')}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">
                  {t('workforcePage.address')} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error' : ''}
                  placeholder={t('workforcePage.enterAddress')}
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">
                    {t('workforcePage.city')} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'error' : ''}
                    placeholder={t('workforcePage.enterCity')}
                  />
                  {errors.city && (
                    <span className="error-message">{errors.city}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="province">{t('workforcePage.province')}</label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    placeholder={t('workforcePage.enterProvince')}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="country">{t('workforcePage.country')}</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder={t('workforcePage.enterCountry')}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">{t('workforcePage.experience')}</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder={t('workforcePage.enterExperience')}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <div className="education-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label htmlFor="education">{t('workforcePage.education')}</label>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="add-education-btn"
                    style={{
                      background: 'var(--btn-primary-bg)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.4rem 0.8rem',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontWeight: 600
                    }}
                  >
                    <span>+</span> {t('workforcePage.addEducation')}
                  </button>
                </div>
                {educationEntries.map((education, index) => (
                  <div key={education.id} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <input
                      type="text"
                      value={education.value}
                      onChange={(e) => handleEducationChange(education.id, e.target.value)}
                      placeholder={t('workforcePage.enterEducation')}
                      style={{ flex: 1 }}
                      className={errors[`education_${education.id}`] ? 'error' : ''}
                    />
                    {educationEntries.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEducation(education.id)}
                        style={{
                          background: '#f44336',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.5rem 0.8rem',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          minWidth: '40px'
                        }}
                        aria-label="Remove education"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="form-group full-width">
                <label htmlFor="skills">{t('workforcePage.skills')}</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows="3"
                  placeholder={t('workforcePage.enterSkills')}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="availability">{t('workforcePage.availability')}</label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder={t('workforcePage.enterAvailability')}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="additionalInfo">{t('workforcePage.additionalInfo')}</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  placeholder={t('workforcePage.enterAdditionalInfo')}
                />
              </div>

              {errors.submit && (
                <div className="error-message full-width">{errors.submit}</div>
              )}

              <button 
                type="submit" 
                className="submit-button btn-modern"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('workforcePage.submitting') : t('workforcePage.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workforce;

