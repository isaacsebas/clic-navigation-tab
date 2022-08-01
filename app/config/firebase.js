// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPINrFLQrowfSLAEmU59ofj-3cEtkD_hM",
  authDomain: "autentication--clic-app.firebaseapp.com",
  projectId: "autentication--clic-app",
  storageBucket: "autentication--clic-app.appspot.com",
  messagingSenderId: "356344514616",
  appId: "1:356344514616:web:8f913056370a616d27fecd"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);