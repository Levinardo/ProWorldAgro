import { collection, doc, getDoc, setDoc, updateDoc, increment, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Track a visitor visit
export const trackVisit = async () => {
  try {
    // Get visitor's country using a free geolocation API
    const countryData = await fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .catch(() => ({ country_name: 'Unknown', country_code: 'XX' }));

    const country = countryData.country_name || 'Unknown';
    const countryCode = (countryData.country_code || 'XX').toUpperCase();
    const timestamp = new Date().toISOString();

    // Update total visitors count
    const statsRef = doc(db, 'visitorStats', 'total');
    const statsDoc = await getDoc(statsRef);
    
    if (statsDoc.exists()) {
      await updateDoc(statsRef, {
        count: increment(1),
        lastUpdated: timestamp
      });
    } else {
      await setDoc(statsRef, {
        count: 1,
        lastUpdated: timestamp
      });
    }

    // Update country-specific count (use country code as document ID for reliability)
    const countryDocId = countryCode !== 'XX' ? `country_${countryCode}` : 'country_Unknown';
    const countryRef = doc(db, 'visitorStats', countryDocId);
    const countryDoc = await getDoc(countryRef);
    
    if (countryDoc.exists()) {
      await updateDoc(countryRef, {
        count: increment(1),
        countryCode: countryCode,
        lastUpdated: timestamp
      });
    } else {
      await setDoc(countryRef, {
        count: 1,
        countryCode: countryCode,
        countryName: country,
        lastUpdated: timestamp
      });
    }

    // Store individual visit record (optional, for detailed analytics)
    const visitRef = doc(collection(db, 'visits'));
    await setDoc(visitRef, {
      country: country,
      countryCode: countryCode,
      timestamp: timestamp,
      userAgent: navigator.userAgent
    });

    return { success: true, country };
  } catch (error) {
    console.error('Error tracking visit:', error);
    return { success: false, error: error.message };
  }
};

// Get total visitor count
export const getTotalVisitors = async () => {
  try {
    const statsRef = doc(db, 'visitorStats', 'total');
    const statsDoc = await getDoc(statsRef);
    
    if (statsDoc.exists()) {
      return statsDoc.data().count || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error getting total visitors:', error);
    return 0;
  }
};

// Get visitors by country
export const getVisitorsByCountry = async (limitCount = 10) => {
  try {
    const countriesRef = collection(db, 'visitorStats');
    const querySnapshot = await getDocs(countriesRef);
    
    const countries = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Skip the 'total' document and only include country documents
      if (doc.id !== 'total' && data.countryName) {
        countries.push({
          id: doc.id,
          ...data
        });
      }
    });
    
    // Sort by count descending and limit
    countries.sort((a, b) => (b.count || 0) - (a.count || 0));
    return countries.slice(0, limitCount);
  } catch (error) {
    console.error('Error getting visitors by country:', error);
    return [];
  }
};

// Get all visitor statistics
export const getVisitorStats = async () => {
  try {
    const [total, countries] = await Promise.all([
      getTotalVisitors(),
      getVisitorsByCountry(10)
    ]);
    
    return {
      total,
      countries
    };
  } catch (error) {
    console.error('Error getting visitor stats:', error);
    return {
      total: 0,
      countries: []
    };
  }
};

