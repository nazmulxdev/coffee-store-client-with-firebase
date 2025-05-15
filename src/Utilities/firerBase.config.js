// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL1lVpruPxwDVg96ZWJZH2pcanz6D4CRU",
  authDomain: "coffee-store-app-e5883.firebaseapp.com",
  projectId: "coffee-store-app-e5883",
  storageBucket: "coffee-store-app-e5883.firebasestorage.app",
  messagingSenderId: "804434332446",
  appId: "1:804434332446:web:ae8804fe6adefa7c88570f",
  measurementId: "G-9D30V046HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
