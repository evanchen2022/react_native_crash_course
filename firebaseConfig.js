// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";  // Import Firebase Storage
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKa9pdkdgIBkn68v8w3zX4CqUybW_8tkQ",
    authDomain: "react-app-1c479.firebaseapp.com",
    databaseURL: "https://react-app-1c479-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-app-1c479",
    storageBucket: "react-app-1c479.appspot.com",  // Adjusted storage bucket URL
    messagingSenderId: "21851626229",
    appId: "1:21851626229:web:c13186c46f00d2d265c3bc",
    measurementId: "G-PTTBN98H2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Initialize Firestore
const db = getFirestore(app);

// Export the initialized services you need
export { app, analytics, storage, db };
