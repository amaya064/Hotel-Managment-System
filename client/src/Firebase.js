// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hotel-management-f0e33.firebaseapp.com",
  projectId: "hotel-management-f0e33",
  storageBucket: "hotel-management-f0e33.firebasestorage.app",
  messagingSenderId: "625019282082",
  appId: "1:625019282082:web:cba4ecf482c8bce39c6dfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);