// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOElkMTcMEvFh0uuVk9ZVsDgA3eFVmrE",
  authDomain: "blog-project-9921d.firebaseapp.com",
  projectId: "blog-project-9921d",
  storageBucket: "blog-project-9921d.appspot.com",
  messagingSenderId: "161921284758",
  appId: "1:161921284758:web:098b02ddefebeb0e4ce0b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore();
