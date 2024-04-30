import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAH7fqs96QZKCTWb-jlZbelN7JE0RcdwwM",
  authDomain: "subodhians-b2398.firebaseapp.com",
  projectId: "subodhians-b2398",
  storageBucket: "subodhians-b2398.appspot.com",
  messagingSenderId: "349225959312",
  appId: "1:349225959312:web:6cfdd5839d8a263f0ffd15",
  measurementId: "G-V4QT0YSL32",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
