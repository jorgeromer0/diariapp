// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXTAM41mXNGbwJef7SYjTNquWYKiNhMWs",
  authDomain: "react-954db.firebaseapp.com",
  projectId: "react-954db",
  storageBucket: "react-954db.appspot.com",
  messagingSenderId: "731378321962",
  appId: "1:731378321962:web:847e0dc63ae4f2eb145153"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);