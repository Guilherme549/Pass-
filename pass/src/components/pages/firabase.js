// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAW-OHwSaz2hLO1nSvZB0ln3I74UFGEOMg",
  authDomain: "passpluss-92916.firebaseapp.com",
  projectId: "passpluss-92916",
  storageBucket: "passpluss-92916.appspot.com",
  messagingSenderId: "940022911220",
  appId: "1:940022911220:web:2be0291761ca9639640ea1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google");
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export { auth, googleProvider, signInWithGoogle };
