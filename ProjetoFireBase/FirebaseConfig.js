// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBHtAq0D7vQ5oxLfP5D_1r8Z9KhzBjTFnw",
  authDomain: "mobile2026-b1a2f.firebaseapp.com",
  projectId: "mobile2026-b1a2f",
  storageBucket: "mobile2026-b1a2f.firebasestorage.app",
  messagingSenderId: "788619847313",
  appId: "1:788619847313:web:99c5152245ab174a1d4130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();