import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { saveRegistration } from '../services/firestore';
import { testFirebaseConnection } from '../services/firebase';
import './Registration.css';

const Registration = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    realLegalStatus: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    institutionName: '',
    requestType: '',
    eventDate: '',
    services: [],
    message: '',
    consentCommercial: false,
    consentPrivacy: false
  });

  const [additionalParticipants, setAdditionalParticipants] = useState([]);
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'services') {
        const serviceValue = value;
        setFormData(prev => ({
          ...prev,
          services: prev.services.includes(serviceValue)
            ? prev.services.filter(s => s !== serviceValue)
            : [...prev.services, serviceValue]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const addParticipant = () => {
    setAdditionalParticipants(prev => [
      ...prev,
      { id: Date.now(), name: '', passport: '' }
    ]);
  };

  const removeParticipant = (id) => {
    setAdditionalParticipants(prev => prev.filter(p => p.id !== id));
    // Clear errors for removed participant
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`participant_${id}_name`];
      delete newErrors[`participant_${id}_passport`];
      return newErrors;
    });
  };

  const handleParticipantChange = (id, field, value) => {
    setAdditionalParticipants(prev =>
      prev.map(p =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
    // Clear error when user starts typing
    const errorKey = `participant_${id}_${field}`;
    if (errors[errorKey]) {
      setErrors(prev => ({
        ...prev,
        [errorKey]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.realLegalStatus) {
      newErrors.realLegalStatus = t('registration.pleaseSelectStatus');
    }
    if (!formData.name.trim()) {
      newErrors.name = t('registration.pleaseFillField');
    }
    if (!formData.surname.trim()) {
      newErrors.surname = t('registration.pleaseFillField');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('registration.pleaseFillField');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('registration.pleaseFillField');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('registration.validEmail');
    }
    if (!formData.requestType) {
      newErrors.requestType = t('registration.pleaseSelectRequestType');
    }
    if (formData.services.length === 0) {
      newErrors.services = t('registration.selectAtLeastOne');
    }
    if (!formData.consentPrivacy) {
      newErrors.consentPrivacy = t('registration.acceptPrivacy');
    }

    // Validate additional participants
    additionalParticipants.forEach((participant) => {
      if (!participant.name.trim()) {
        newErrors[`participant_${participant.id}_name`] = t('registration.pleaseFillField');
      }
      if (!participant.passport.trim()) {
        newErrors[`participant_${participant.id}_passport`] = t('registration.pleaseFillField');
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      // Check Firebase connection before submitting
      if (firebaseConnected === false) {
        setErrors({ submit: 'Database connection failed. Please check your Firebase configuration.' });
        return;
      }

      setIsSubmitting(true);
      
      try {
      const submissionData = {
        ...formData,
          additionalParticipants: additionalParticipants,
          submittedAt: new Date().toISOString()
      };
        
        const result = await saveRegistration(submissionData);
        
        if (result.success) {
          // Show success toast notification
          toast.success(t('registration.successMessage') || 'Registration submitted successfully!', {
            duration: 5000,
            style: {
              background: 'rgba(76, 175, 80, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '8px',
              border: '1px solid rgba(76, 175, 80, 0.3)',
            },
          });

          // Reset form immediately
          setFormData({
            realLegalStatus: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            institutionName: '',
            requestType: '',
            eventDate: '',
            services: [],
            message: '',
            consentCommercial: false,
            consentPrivacy: false
          });
          setAdditionalParticipants([]);
        } else {
          // Show error toast notification
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

  const serviceOptions = [
    t('registration.service1'),
    t('registration.service2'),
    t('registration.service3'),
    t('registration.service4'),
    t('registration.service5'),
    t('registration.service6'),
    t('registration.service7'),
    t('registration.service8')
  ];

  return (
    <div className="registration-page">
      <div className="container">
        <div className="registration-header glass-card">
          <div className="header-row header-row-1">
            <div className="flag-emoji">🇵🇰</div>
            <h1>{t('registration.title')}</h1>
          </div>
          <div className="header-row header-row-2">
            <h2>{t('registration.subtitle')}</h2>
          </div>
          <div className="header-row header-row-3">
            <p className="subtitle">{t('registration.description')}</p>
          </div>
        </div>

        <div className="registration-content">
          <div className="registration-info">
            <div className="info-section glass-card">
              <h3 className="info-section-title">{t('registration.contactInfo')}</h3>
              <div className="info-items-grid">
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📍</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('registration.officeLocation')}</strong>
                    <p>Pakistan</p>
                  </div>
                </div>
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">✉️</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('registration.email')}</strong>
                    <p>info@sommet-elevage.pk</p>
                  </div>
                </div>
                <div className="info-item-card">
                  <div className="info-icon-wrapper">
                    <span className="info-icon">📞</span>
                  </div>
                  <div className="info-content-wrapper">
                    <strong>{t('registration.phone')}</strong>
                    <p>+92 XXX XXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section glass-card">
              <h3 className="info-section-title">{t('registration.whyRegister')}</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('registration.benefit1')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('registration.benefit2')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('registration.benefit3')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('registration.benefit4')}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <span>{t('registration.benefit5')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="registration-form-container glass-card">
            <h2 className="form-title">{t('registration.formTitle')}</h2>

            {/* Firebase Connection Status */}
            {firebaseConnected !== null && (
              <div className={`connection-status ${firebaseConnected ? 'connected' : 'disconnected'}`}>
                <span className="status-icon">
                  {firebaseConnected ? '🟢' : '🔴'}
                </span>
                <span className="status-text">
                  {firebaseConnected
                    ? 'Database Connected'
                    : 'Database Connection Failed - Environment variables may not be configured in Vercel'
                  }
                </span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="realLegalStatus">
                    {t('registration.realLegalStatus')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <select
                    id="realLegalStatus"
                    name="realLegalStatus"
                    value={formData.realLegalStatus}
                    onChange={handleChange}
                    className={errors.realLegalStatus ? 'error' : ''}
                  >
                    <option value="">{t('registration.selectStatus')}</option>
                    <option value="individual">{t('registration.individual')}</option>
                    <option value="business">{t('registration.business')}</option>
                    <option value="investor">{t('registration.investor')}</option>
                    <option value="visitor">{t('registration.visitor')}</option>
                  </select>
                  {errors.realLegalStatus && (
                    <span className="error-message">{errors.realLegalStatus}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="requestType">
                    {t('registration.requestType')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    className={errors.requestType ? 'error' : ''}
                  >
                    <option value="">{t('registration.selectRequestType')}</option>
                    <option value="visa-support">{t('registration.visaSupport')}</option>
                    <option value="event-registration">{t('registration.eventRegistration')}</option>
                    <option value="full-package">{t('registration.fullPackage')}</option>
                    <option value="consultation">{t('registration.consultation')}</option>
                    <option value="other">{t('registration.other')}</option>
                  </select>
                  {errors.requestType && (
                    <span className="error-message">{errors.requestType}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    {t('registration.name')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder={t('registration.name')}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="surname">
                    {t('registration.surname')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={errors.surname ? 'error' : ''}
                    placeholder={t('registration.surname')}
                  />
                  {errors.surname && (
                    <span className="error-message">{errors.surname}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="institutionName">
                    {t('registration.institutionName')}
                  </label>
                  <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    placeholder={t('registration.institutionName')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    {t('registration.emailAddress')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    {t('registration.phoneNumber')} <span className="required">{t('registration.required')}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="+92 XXX XXXXXXX"
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">
                    {t('registration.eventDate')}
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Additional Participants Section */}
              <div className="form-group full-width participants-section">
                <div className="participants-header">
                  <label>
                    {t('registration.additionalParticipants') || 'Additional Participants'}
                  </label>
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="add-participant-btn"
                  >
                    <span>+</span> {t('registration.addParticipant') || 'Add Participant'}
                  </button>
                </div>
                <p className="participants-description">
                  {t('registration.additionalParticipantsDesc') || 'Add other participants who will be attending with you. Include their full name and passport number.'}
                </p>

                {additionalParticipants.length > 0 && (
                  <div className="participants-list">
                    {additionalParticipants.map((participant, index) => (
                      <div key={participant.id} className="participant-card glass-card">
                        <div className="participant-header">
                          <h4>{t('registration.participant') || 'Participant'} {index + 1}</h4>
                          <button
                            type="button"
                            onClick={() => removeParticipant(participant.id)}
                            className="remove-participant-btn"
                            aria-label="Remove participant"
                          >
                            ×
                          </button>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor={`participant_${participant.id}_name`}>
                              {t('registration.participantName') || 'Full Name'} <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              id={`participant_${participant.id}_name`}
                              value={participant.name}
                              onChange={(e) => handleParticipantChange(participant.id, 'name', e.target.value)}
                              className={errors[`participant_${participant.id}_name`] ? 'error' : ''}
                              placeholder={t('registration.participantNamePlaceholder') || 'Enter full name'}
                            />
                            {errors[`participant_${participant.id}_name`] && (
                              <span className="error-message">
                                {errors[`participant_${participant.id}_name`]}
                              </span>
                            )}
                          </div>
                          <div className="form-group">
                            <label htmlFor={`participant_${participant.id}_passport`}>
                              {t('registration.passportNumber') || 'Passport Number'} <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              id={`participant_${participant.id}_passport`}
                              value={participant.passport}
                              onChange={(e) => handleParticipantChange(participant.id, 'passport', e.target.value)}
                              className={errors[`participant_${participant.id}_passport`] ? 'error' : ''}
                              placeholder={t('registration.passportPlaceholder') || 'Enter passport number'}
                            />
                            {errors[`participant_${participant.id}_passport`] && (
                              <span className="error-message">
                                {errors[`participant_${participant.id}_passport`]}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group full-width">
                <label>
                  {t('registration.servicesRequired')} <span className="required">{t('registration.required')}</span>
                </label>
                <div className="services-checkbox-group">
                  {serviceOptions.map((service, index) => (
                    <label key={index} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <span className="error-message">{errors.services}</span>
                )}
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">
                  {t('registration.specialRequest')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={t('registration.specialRequest')}
                />
              </div>

              <div className="form-group full-width">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consentCommercial"
                    checked={formData.consentCommercial}
                    onChange={handleChange}
                  />
                  <span>
                    {t('registration.commercialConsent')}
                  </span>
                </label>
              </div>

              <div className="form-group full-width">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consentPrivacy"
                    checked={formData.consentPrivacy}
                    onChange={handleChange}
                  />
                  <span>
                    {t('registration.privacyConsent')} 
                    <span className="required">{t('registration.required')}</span>
                  </span>
                </label>
                {errors.consentPrivacy && (
                  <span className="error-message">{errors.consentPrivacy}</span>
                )}
              </div>

              <button 
                type="submit" 
                className="submit-button btn-modern"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('common.loading') || 'Submitting...' : t('registration.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

