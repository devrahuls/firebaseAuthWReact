// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ylpRR8O23aH2hw02gASgbxOIGgOST7M",
  authDomain: "regform-3828f.firebaseapp.com",
  projectId: "regform-3828f",
  storageBucket: "regform-3828f.appspot.com",
  messagingSenderId: "883631202501",
  appId: "1:883631202501:web:b2bc535cbc6788387550ac",
  measurementId: "G-1ZW7KQFQF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;