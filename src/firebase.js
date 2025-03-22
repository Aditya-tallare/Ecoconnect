import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // For Realtime Database
import { getAuth } from "firebase/auth";          // For Authentication
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAnalytics } from "firebase/analytics";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwBhxewHPmypwELNXe__S8xRnf8nQEz58",
  authDomain: "ecoconnect-dc3bd.firebaseapp.com",
  databaseURL: "https://ecoconnect-dc3bd-default-rtdb.firebaseio.com",
  projectId: "ecoconnect-dc3bd",
  storageBucket: "ecoconnect-dc3bd.appspot.com",
  messagingSenderId: "634059554156",
  appId: "1:634059554156:web:ff0fee6f836c133c6b8749",
  measurementId: "G-CPG761Y581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);      // Initialize Realtime Database
const auth = getAuth(app);        // Initialize Authentication
const firestore = getFirestore(app); // Initialize Firestore

export { db, auth, firestore };
