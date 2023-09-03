// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const {
  VITE_APIKEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGIN_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGIN_SENDER_ID,
  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // auth with email and password
export const providerGoogle = new GoogleAuthProvider(); // auth wieth google
