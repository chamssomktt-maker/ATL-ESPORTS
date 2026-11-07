import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgLzH7LVpVP0RE6bqzmMTCHKLwQUgmWSw',
    authDomain: 'atl-esports.firebaseapp.com',
      projectId: 'atl-esports',
        storageBucket: 'atl-esports.firebasestorage.app',
          messagingSenderId: '855997770460',
            appId: '1:855997770460:web:f19bac23a16a01d15f2219',
            };

            const app = initializeApp(firebaseConfig);

            export const db = getFirestore(app);