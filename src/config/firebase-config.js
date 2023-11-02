import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // GoogleAuthProvider
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDin_5azBFqfcAfNjVfJ4G4hC5OntuzGm8",
  authDomain: "lawyer-bb0b9.firebaseapp.com",
  projectId: "lawyer-bb0b9",
  storageBucket: "lawyer-bb0b9.appspot.com",
  messagingSenderId: "777198224770",
  appId: "1:777198224770:web:0b6f6bef9dcb3f518cfb9b",
  measurementId: "G-FCKE8561L7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore();