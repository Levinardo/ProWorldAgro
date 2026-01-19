import emailjs from '@emailjs/browser';

// Initialize EmailJS (you'll need to set up EmailJS account and get these IDs)
// Get your service ID, template ID, and public key from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send invitation email with PDF attachment
 * @param {Object} registrationData - Registration data
 * @param {string} pdfBase64 - Base64 encoded PDF data
 * @returns {Promise<Object>} Result object with success status
 */
export const sendInvitationEmail = async (registrationData, pdfBase64) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS is not configured. Please set up environment variables.');
    return {
      success: false,
      error: 'Email service is not configured. Please contact administrator.'
    };
  }

  try {
    const templateParams = {
      to_name: `${registrationData.name} ${registrationData.surname}`,
      to_email: registrationData.email,
      user_name: registrationData.name,
      user_surname: registrationData.surname,
      event_name: 'Sommet de l\'Élevage',
      event_date: registrationData.eventDate || 'TBA',
      registration_id: registrationData.id || 'N/A',
      message: `Dear ${registrationData.name} ${registrationData.surname},\n\nWe are pleased to inform you that your registration has been accepted!\n\nPlease find your invitation card attached.\n\nBest regards,\nAgent of Documentation Team`,
      // Note: EmailJS free tier doesn't support attachments directly
      // For production, you'll need to use a service that supports attachments
      // or host the PDF and send a download link
      pdf_url: pdfBase64 ? `data:application/pdf;base64,${pdfBase64}` : null
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      messageId: response.text,
      message: 'Invitation email sent successfully'
    };
  } catch (error) {
    console.error('Error sending invitation email:', error);
    return {
      success: false,
      error: error.text || error.message || 'Failed to send email'
    };
  }
};

/**
 * Alternative: Send email with PDF download link (for services that don't support attachments)
 * This would require uploading the PDF to a storage service first
 */
export const sendInvitationEmailWithLink = async (registrationData, pdfDownloadUrl) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS is not configured. Please set up environment variables.');
    return {
      success: false,
      error: 'Email service is not configured. Please contact administrator.'
    };
  }

  try {
    const templateParams = {
      to_name: `${registrationData.name} ${registrationData.surname}`,
      to_email: registrationData.email,
      user_name: registrationData.name,
      user_surname: registrationData.surname,
      event_name: 'Sommet de l\'Élevage',
      event_date: registrationData.eventDate || 'TBA',
      registration_id: registrationData.id || 'N/A',
      download_link: pdfDownloadUrl,
      message: `Dear ${registrationData.name} ${registrationData.surname},\n\nWe are pleased to inform you that your registration has been accepted!\n\nPlease download your invitation card using the link below.\n\nBest regards,\nAgent of Documentation Team`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      messageId: response.text,
      message: 'Invitation email sent successfully'
    };
  } catch (error) {
    console.error('Error sending invitation email:', error);
    return {
      success: false,
      error: error.text || error.message || 'Failed to send email'
    };
  }
};

const emailService = {
  sendInvitationEmail,
  sendInvitationEmailWithLink
};

export default emailService;


