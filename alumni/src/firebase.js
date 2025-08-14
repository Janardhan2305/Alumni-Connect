// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBIhrNUaUgUKQFF4EZNwhj6SaJ8cTsUjs",
  authDomain: "alumni-connect-487b3.firebaseapp.com",
  projectId: "alumni-connect-487b3",
  storageBucket: "alumni-connect-487b3.firebasestorage.app",
  messagingSenderId: "240964438421",
  appId: "1:240964438421:web:063e96eef374dbf3a10e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);