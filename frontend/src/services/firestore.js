import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { sendInvitationEmail } from './emailService';
import { generateInvitationCardPDF } from './invitationCard';

// Check if Firebase is available
const isFirebaseAvailable = () => {
  if (!db) {
    console.error('Firebase is not initialized. Please check your environment variables.');
    return false;
  }
  return true;
};

// Collection names
export const COLLECTIONS = {
  REGISTRATIONS: 'registrations',
  WORKERS: 'workers',
  EVENTS: 'events',
  BLOGS: 'blogs',
  ADMINS: 'admins'
};

/**
 * Save a registration to Firestore
 */
export const saveRegistration = async (registrationData) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.REGISTRATIONS), {
      ...registrationData,
      status: 'submitted', // Default status for new registrations
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving registration:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all registrations
 */
export const getRegistrations = async () => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    const q = query(
      collection(db, COLLECTIONS.REGISTRATIONS),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const registrations = [];
    querySnapshot.forEach((doc) => {
      registrations.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: registrations };
  } catch (error) {
    console.error('Error getting registrations:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Get registrations with filtering
 */
export const getFilteredRegistrations = async (filters = {}) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    let q = collection(db, COLLECTIONS.REGISTRATIONS);

    // Apply status filter if provided
    if (filters.status && filters.status !== 'all') {
      q = query(q, where('status', '==', filters.status));
    }

    // Apply date range filters
    if (filters.startDate) {
      const startTimestamp = new Date(filters.startDate);
      startTimestamp.setHours(0, 0, 0, 0);
      q = query(q, where('createdAt', '>=', startTimestamp));
    }

    if (filters.endDate) {
      const endTimestamp = new Date(filters.endDate);
      endTimestamp.setHours(23, 59, 59, 999);
      q = query(q, where('createdAt', '<=', endTimestamp));
    }

    q = query(q, orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(q);
    const registrations = [];
    querySnapshot.forEach((doc) => {
      registrations.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: registrations };
  } catch (error) {
    console.error('Error getting filtered registrations:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Get registrations by email
 */
export const getRegistrationsByEmail = async (email) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    const q = query(
      collection(db, COLLECTIONS.REGISTRATIONS),
      where('email', '==', email),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const registrations = [];
    querySnapshot.forEach((doc) => {
      registrations.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: registrations };
  } catch (error) {
    console.error('Error getting registrations by email:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Save an event to Firestore
 */
export const saveEvent = async (eventData) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.EVENTS), {
      ...eventData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving event:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all events
 */
export const getEvents = async () => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    const q = query(
      collection(db, COLLECTIONS.EVENTS),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: events };
  } catch (error) {
    console.error('Error getting events:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Update a document
 */
export const updateDocument = async (collectionName, docId, data) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating document:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Update registration status
 */
export const updateRegistrationStatus = async (registrationId, status, adminNote = '') => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const updateData = {
      status,
      statusUpdatedAt: serverTimestamp(),
      adminNote: adminNote || null
    };
    
    const result = await updateDocument(COLLECTIONS.REGISTRATIONS, registrationId, updateData);
    
    // If status is 'accepted', send invitation email with PDF
    if (result.success && status === 'accepted') {
      try {
        // Get the registration data to send email
        const registrationDocRef = doc(db, COLLECTIONS.REGISTRATIONS, registrationId);
        const registrationDoc = await getDoc(registrationDocRef);
        
        if (registrationDoc.exists()) {
          const registrationData = {
            id: registrationId,
            ...registrationDoc.data()
          };
          
          // Generate invitation card PDF
          try {
            const pdfBase64 = await generateInvitationCardPDF(registrationData);
            
            // Send invitation email
            const emailResult = await sendInvitationEmail(registrationData, pdfBase64);
            
            if (emailResult.success) {
              console.log('Invitation email sent successfully');
            } else {
              console.warn('Failed to send invitation email:', emailResult.error);
              // Don't fail the status update if email fails
            }
          } catch (pdfError) {
            console.error('Error generating invitation card:', pdfError);
            // Try sending email without PDF attachment
            try {
              await sendInvitationEmail(registrationData, null);
            } catch (emailError) {
              console.error('Error sending email:', emailError);
            }
          }
        }
      } catch (emailError) {
        console.error('Error processing invitation email:', emailError);
        // Don't fail the status update if email fails
      }
    }
    
    return result;
  } catch (error) {
    console.error('Error updating registration status:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a document
 */
export const deleteDocument = async (collectionName, docId) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    await deleteDoc(doc(db, collectionName, docId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting document:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Admin authentication
 */
export const authenticateAdmin = async (email, password) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const q = query(
      collection(db, COLLECTIONS.ADMINS),
      where('email', '==', email),
      where('password', '==', password)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const admin = querySnapshot.docs[0].data();
      return { success: true, admin: { ...admin, id: querySnapshot.docs[0].id } };
    }
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    console.error('Error authenticating admin:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Initialize default admin (run this once to create admin user)
 */
export const initializeAdmin = async () => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const adminData = {
      email: 'admin@agentofdocumentation.pk',
      password: 'admin123',
      name: 'Super Admin',
      role: 'super_admin',
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.ADMINS), adminData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error initializing admin:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save a worker registration to Firestore
 */
export const saveWorkerRegistration = async (workerData) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.WORKERS), {
      ...workerData,
      status: 'submitted', // Default status for new worker registrations
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving worker registration:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all worker registrations
 */
export const getWorkers = async () => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    const q = query(
      collection(db, COLLECTIONS.WORKERS),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const workers = [];
    querySnapshot.forEach((doc) => {
      workers.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: workers };
  } catch (error) {
    console.error('Error getting workers:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Get workers with filtering
 */
export const getFilteredWorkers = async (filters = {}) => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.', data: [] };
  }

  try {
    let q = collection(db, COLLECTIONS.WORKERS);

    // Apply worker type filter if provided
    if (filters.workerType && filters.workerType !== 'all') {
      q = query(q, where('workerType', '==', filters.workerType));
    }

    // Apply status filter if provided
    if (filters.status && filters.status !== 'all') {
      q = query(q, where('status', '==', filters.status));
    }

    // Apply date range filters
    if (filters.startDate) {
      const startTimestamp = new Date(filters.startDate);
      startTimestamp.setHours(0, 0, 0, 0);
      q = query(q, where('createdAt', '>=', startTimestamp));
    }

    if (filters.endDate) {
      const endTimestamp = new Date(filters.endDate);
      endTimestamp.setHours(23, 59, 59, 999);
      q = query(q, where('createdAt', '<=', endTimestamp));
    }

    q = query(q, orderBy('createdAt', 'desc'));

    const querySnapshot = await getDocs(q);
    const workers = [];
    querySnapshot.forEach((doc) => {
      workers.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: workers };
  } catch (error) {
    console.error('Error getting filtered workers:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Update worker status
 */
export const updateWorkerStatus = async (workerId, status, adminNote = '') => {
  if (!isFirebaseAvailable()) {
    return { success: false, error: 'Database not available. Please check Firebase configuration.' };
  }

  try {
    const updateData = {
      status,
      statusUpdatedAt: serverTimestamp(),
      adminNote: adminNote || null
    };
    return await updateDocument(COLLECTIONS.WORKERS, workerId, updateData);
  } catch (error) {
    console.error('Error updating worker status:', error);
    return { success: false, error: error.message };
  }
};


