// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvmNOoumVF1bf47VBEcUEPiM4iLim7UoA",
  authDomain: "innovyasa-70521.firebaseapp.com",
  projectId: "innovyasa-70521",
  storageBucket: "innovyasa-70521.appspot.com",
  messagingSenderId: "621129941084",
  appId: "1:621129941084:web:5638f27091c4503261a699",
  measurementId: "G-FT79VMWQZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);