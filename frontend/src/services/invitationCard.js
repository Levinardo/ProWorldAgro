import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generate invitation card PDF
 * @param {Object} registrationData - Registration data
 * @returns {Promise<string>} Base64 encoded PDF string
 */
export const generateInvitationCardPDF = async (registrationData) => {
  // Create a temporary div element for the invitation card
  const cardElement = document.createElement('div');
  cardElement.style.width = '800px';
  cardElement.style.height = '600px';
  cardElement.style.padding = '40px';
  cardElement.style.backgroundColor = '#ffffff';
  cardElement.style.fontFamily = 'Arial, sans-serif';
  cardElement.style.position = 'absolute';
  cardElement.style.left = '-9999px';
  cardElement.style.top = '0';
  
  // Build the HTML content for the invitation card
  let eventDate = 'TBA';
  if (registrationData.eventDate) {
    try {
      const date = registrationData.eventDate instanceof Date 
        ? registrationData.eventDate 
        : new Date(registrationData.eventDate);
      if (!isNaN(date.getTime())) {
        eventDate = date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      }
    } catch (error) {
      console.warn('Error parsing event date:', error);
      eventDate = registrationData.eventDate || 'TBA';
    }
  }

  cardElement.innerHTML = `
    <div style="
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      padding: 50px;
      box-sizing: border-box;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    ">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="font-size: 48px; font-weight: bold; margin-bottom: 10px;">
          🇵🇰
        </div>
        <div style="font-size: 32px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">
          Sommet de l'Élevage
        </div>
        <div style="font-size: 18px; opacity: 0.9;">
          Official Invitation Card
        </div>
      </div>

      <!-- Main Content -->
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; text-align: center;">
        <div style="font-size: 24px; margin-bottom: 20px; font-weight: 300;">
          You are cordially invited to attend
        </div>
        <div style="font-size: 36px; font-weight: bold; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 1px;">
          ${registrationData.name} ${registrationData.surname}
        </div>
        <div style="font-size: 20px; margin-bottom: 15px; opacity: 0.95;">
          ${registrationData.institutionName ? registrationData.institutionName + '<br/>' : ''}
          ${registrationData.email}
        </div>
        <div style="
          width: 200px;
          height: 2px;
          background: white;
          margin: 30px auto;
          opacity: 0.5;
        "></div>
        <div style="font-size: 22px; font-weight: 600; margin-bottom: 10px;">
          Event Date: ${eventDate}
        </div>
        <div style="font-size: 18px; opacity: 0.9;">
          Clermont-Ferrand, France
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 30px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.3);">
        <div style="font-size: 16px; margin-bottom: 10px; opacity: 0.9;">
          Registration ID: ${registrationData.id || 'N/A'}
        </div>
        <div style="font-size: 14px; opacity: 0.8;">
          Agent of Documentation | Pakistan
        </div>
        <div style="font-size: 12px; opacity: 0.7; margin-top: 10px;">
          This is an official invitation. Please present this card at the event.
        </div>
      </div>
    </div>
  `;

  // Append to body temporarily
  document.body.appendChild(cardElement);

  try {
    // Convert to canvas
    const canvas = await html2canvas(cardElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      width: 800,
      height: 600
    });

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [800, 600]
    });

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, 800, 600);

    // Get PDF as base64 string
    const pdfBase64 = pdf.output('datauristring').split(',')[1];

    // Clean up
    document.body.removeChild(cardElement);

    return pdfBase64;
  } catch (error) {
    console.error('Error generating PDF:', error);
    document.body.removeChild(cardElement);
    throw error;
  }
};

/**
 * Generate and download invitation card PDF
 * @param {Object} registrationData - Registration data
 */
export const downloadInvitationCard = async (registrationData) => {
  try {
    const pdfBase64 = await generateInvitationCardPDF(registrationData);
    
    // Create download link
    const pdfBlob = base64ToBlob(pdfBase64, 'application/pdf');
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Invitation_${registrationData.name}_${registrationData.surname}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true, pdfBase64 };
  } catch (error) {
    console.error('Error downloading invitation card:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Convert base64 to Blob
 */
const base64ToBlob = (base64, mimeType) => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

const invitationCard = {
  generateInvitationCardPDF,
  downloadInvitationCard
};

export default invitationCard;

