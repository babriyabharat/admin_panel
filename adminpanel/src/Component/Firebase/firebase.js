 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj55vTn9cMvmV-gY8wy7UaxclC1E_9m0g",
  authDomain: "admin-auth-15b91.firebaseapp.com",
  projectId: "admin-auth-15b91",
  storageBucket: "admin-auth-15b91.appspot.com",
  messagingSenderId: "193992990417",
  appId: "1:193992990417:web:c6ad6bb3ba5d577f32eff0",
  measurementId: "G-BL13SM4ESF"
};

// Initialize Firebase
const MyFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(MyFirebase);
export const db = getFirestore(MyFirebase)