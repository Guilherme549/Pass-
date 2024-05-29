import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7v_y4YZz9HW_A-4geMopHnxIvl3--2SY",
  authDomain: "pass-82f2e.firebaseapp.com",
  projectId: "pass-82f2e",
  storageBucket: "pass-82f2e",
  messagingSenderId: "616461168688",
  appId: "1:616461168688:web:8ed08fa84a72455bb1fdf5",
  measurementId: "G-F4XB39HK08"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export { auth, googleProvider, signInWithGoogle };
