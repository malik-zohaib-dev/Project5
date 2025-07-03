// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGgrwD_Hj-_F_jDn6rQhEzEphZBJxJKJA",
  authDomain: "vite-contact-45393.firebaseapp.com",
  projectId: "vite-contact-45393",
  storageBucket: "vite-contact-45393.firebasestorage.app",
  messagingSenderId: "703961192059",
  appId: "1:703961192059:web:aebda664ec92d000e3b4de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);