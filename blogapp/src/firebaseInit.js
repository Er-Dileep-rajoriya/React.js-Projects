// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwLzfc5Bop8ianUyBXvLaJguqPBzyWzm8",
  authDomain: "blogging-app-ac1b2.firebaseapp.com",
  projectId: "blogging-app-ac1b2",
  storageBucket: "blogging-app-ac1b2.appspot.com",
  messagingSenderId: "1074401976460",
  appId: "1:1074401976460:web:513753d3855bfade951ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);