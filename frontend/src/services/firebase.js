import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase config is properly set
const isFirebaseConfigured = Object.values(firebaseConfig).every(value =>
  value !== undefined && value !== null && value !== ''
);

let app, db, auth, analytics;

try {
  if (isFirebaseConfigured) {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize Firebase services
    db = getFirestore(app);
    auth = getAuth(app);
    analytics = getAnalytics(app);

    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase configuration incomplete. Some features may not work.');
    console.log('Missing environment variables:', Object.entries(firebaseConfig)
      .filter(([key, value]) => !value)
      .map(([key]) => key)
    );
  }
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
}

// Export Firebase services (may be undefined if not configured)
export { db, auth, analytics };

// Test Firebase connection
export const testFirebaseConnection = async () => {
  try {
    // Simple test to check if Firestore is accessible
    const testCollection = collection(db, 'test');
    await getDocs(testCollection);
    console.log('Firebase connection successful');
    return true;
  } catch (error) {
    console.error('Firebase connection failed:', error);
    return false;
  }
};

export default app;


