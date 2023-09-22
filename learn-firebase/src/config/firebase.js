// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: "disney-plus-clone-b0bd4.firebaseapp.com",
  projectId: "disney-plus-clone-b0bd4",
  storageBucket: "disney-plus-clone-b0bd4.appspot.com",
  messagingSenderId: "843817639922",
  appId: "1:843817639922:web:7022ca3f2575ec025d556b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gooogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);