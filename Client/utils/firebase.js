// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shifraai-553ca.firebaseapp.com",
  projectId: "shifraai-553ca",
  storageBucket: "shifraai-553ca.firebasestorage.app",
  messagingSenderId: "491322163878",
  appId: "1:491322163878:web:b5ac1f6593a8970d03aa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };