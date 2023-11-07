import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6F9AZNYBj1Tr0oA19UkUdTLUxIOUpNxE",
  authDomain: "lawyer-project-9f9f6.firebaseapp.com",
  projectId: "lawyer-project-9f9f6",
  storageBucket: "lawyer-project-9f9f6.appspot.com",
  messagingSenderId: "864621457475",
  appId: "1:864621457475:web:c946687065fae96d3ae4f6",
  measurementId: "G-ZYZRDFXJ1X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, googleProvider, db };