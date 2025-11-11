// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4P1xu-hSdvcTE4FASc4CpWCj_qp2MGs0",
  authDomain: "sign-in-with-demo.firebaseapp.com",
  projectId: "sign-in-with-demo",
  storageBucket: "sign-in-with-demo.firebasestorage.app",
  messagingSenderId: "657966894577",
  appId: "1:657966894577:web:b69a43e208db9910af0850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);