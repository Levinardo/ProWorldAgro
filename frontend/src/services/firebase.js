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

// Make environment variables available globally for debugging
window.FIREBASE_DEBUG = {
  isConfigured: isFirebaseConfigured,
  config: {
    apiKey: firebaseConfig.apiKey ? '***SET***' : 'NOT SET',
    authDomain: firebaseConfig.authDomain ? '***SET***' : 'NOT SET',
    projectId: firebaseConfig.projectId ? '***SET***' : 'NOT SET',
    storageBucket: firebaseConfig.storageBucket ? '***SET***' : 'NOT SET',
    messagingSenderId: firebaseConfig.messagingSenderId ? '***SET***' : 'NOT SET',
    appId: firebaseConfig.appId ? '***SET***' : 'NOT SET',
    measurementId: firebaseConfig.measurementId ? '***SET***' : 'NOT SET'
  },
  environment: process.env.NODE_ENV,
  rawApiKey: process.env.REACT_APP_FIREBASE_API_KEY ? 'EXISTS' : 'MISSING',
  allEnvVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
};

console.log('🔥 Firebase Configuration Status:', window.FIREBASE_DEBUG);

let app, db, auth, analytics;

try {
  if (isFirebaseConfigured) {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize Firebase services
    db = getFirestore(app);
    auth = getAuth(app);

    // Only initialize analytics in production to avoid development warnings
    if (process.env.NODE_ENV === 'production') {
      analytics = getAnalytics(app);
    }

    console.log('✅ Firebase initialized successfully');
    console.log('📊 Firestore database reference:', db ? 'Available' : 'Not available');
  } else {
    console.warn('⚠️ Firebase configuration incomplete. Some features may not work.');
    const missingVars = Object.entries(firebaseConfig)
      .filter(([key, value]) => !value || value === undefined || value === null || value === '')
      .map(([key]) => key);
    console.error('❌ Missing environment variables:', missingVars);
    console.error('📋 All config values:', Object.entries(firebaseConfig).map(([key, value]) => ({
      key,
      hasValue: !!value,
      valueLength: value ? value.length : 0
    })));
  }
} catch (error) {
  console.error('❌ Failed to initialize Firebase:', error);
  console.error('Error details:', {
    message: error.message,
    code: error.code,
    name: error.name,
    stack: error.stack
  });
}

// Export Firebase services (may be undefined if not configured)
export { db, auth, analytics };

// Test Firebase connection
export const testFirebaseConnection = async () => {
  try {
    if (!isFirebaseConfigured) {
      console.error('Firebase connection failed: Configuration not complete');
      return false;
    }

    if (!db) {
      console.error('Firebase connection failed: Firestore not initialized');
      return false;
    }

    // Simple test to check if Firestore is accessible
    const testCollection = collection(db, 'test');
    await getDocs(testCollection);
    console.log('✅ Firebase connection successful');
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      name: error.name
    });
    return false;
  }
};

export default app;


