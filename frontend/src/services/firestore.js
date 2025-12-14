import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

// Collection names
export const COLLECTIONS = {
  REGISTRATIONS: 'registrations',
  EVENTS: 'events',
  BLOGS: 'blogs',
  ADMINS: 'admins'
};

/**
 * Save a registration to Firestore
 */
export const saveRegistration = async (registrationData) => {
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
    return { success: false, error: error.message };
  }
};

/**
 * Get registrations with filtering
 */
export const getFilteredRegistrations = async (filters = {}) => {
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
    return { success: false, error: error.message };
  }
};

/**
 * Get registrations by email
 */
export const getRegistrationsByEmail = async (email) => {
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
    return { success: false, error: error.message };
  }
};

/**
 * Save an event to Firestore
 */
export const saveEvent = async (eventData) => {
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
    return { success: false, error: error.message };
  }
};

/**
 * Update a document
 */
export const updateDocument = async (collectionName, docId, data) => {
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
  try {
    const updateData = {
      status,
      statusUpdatedAt: serverTimestamp(),
      adminNote: adminNote || null
    };
    return await updateDocument(COLLECTIONS.REGISTRATIONS, registrationId, updateData);
  } catch (error) {
    console.error('Error updating registration status:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a document
 */
export const deleteDocument = async (collectionName, docId) => {
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


