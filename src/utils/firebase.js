// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ncwp2ugPIC5J3hn8yNgEDBM8zzd15T4",
  authDomain: "netflixgpt-6d237.firebaseapp.com",
  projectId: "netflixgpt-6d237",
  storageBucket: "netflixgpt-6d237.appspot.com",
  messagingSenderId: "387853787241",
  appId: "1:387853787241:web:2f9e8b30d9274a32f842f8",
  measurementId: "G-C93073FP76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

