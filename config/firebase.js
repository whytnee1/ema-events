import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbaAH0dqTL5UJ1cfpjOM44AuPym9pX360",
  authDomain: "ema-events-c9187.firebaseapp.com",
  projectId: "ema-events-c9187",
  storageBucket: "ema-events-c9187.firebasestorage.app",
  messagingSenderId: "911000107017",
  appId: "1:911000107017:web:5fbb665b335f4b534be0d8",
};

// Prevent Firebase from initializing multiple times
const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;