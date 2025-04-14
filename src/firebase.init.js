// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXr12CpQ7IJ3f78wFFleHpRTq3DUlXY8I",
  authDomain: "fir-new-b77b9.firebaseapp.com",
  projectId: "fir-new-b77b9",
  storageBucket: "fir-new-b77b9.firebasestorage.app",
  messagingSenderId: "774368937774",
  appId: "1:774368937774:web:3b350b48bccf3db4b5dcbf",
  measurementId: "G-2B8MHGQ3FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;