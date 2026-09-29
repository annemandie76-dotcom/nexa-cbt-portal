import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYKyDGn3Qts4Rp5prrrXVxulGm0e_tpB4",
    authDomain: "nexa-cbt.firebaseapp.com",
    projectId: "nexa-cbt",
    storageBucket: "nexa-cbt.firebasestorage.app",
    messagingSenderId: "30313661684",
    appId: "1:30313661684:web:6c9e90d7ac43a9acda4aa1",
    measurementId: "G-HG1LK26MBQ"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
