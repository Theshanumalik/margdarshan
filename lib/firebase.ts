import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "349225959312",
  appId: "1:349225959312:web:6cfdd5839d8a263f0ffd15",
  measurementId: "G-V4QT0YSL32",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
