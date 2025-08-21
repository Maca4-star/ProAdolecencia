// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfskAISSZIoLXVJ-eXNV9NMIGwDbpVEVI",
  authDomain: "proaadolecencia.firebaseapp.com",
  projectId: "proaadolecencia",
  storageBucket: "proaadolecencia.firebasestorage.app",
  messagingSenderId: "1064308287093",
  appId: "1:1064308287093:web:81ee350be5be9bbc243a3c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 