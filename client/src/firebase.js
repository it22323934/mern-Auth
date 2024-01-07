// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-6a2f4.firebaseapp.com",
  projectId: "mernauth-6a2f4",
  storageBucket: "mernauth-6a2f4.appspot.com",
  messagingSenderId: "501005883373",
  appId: "1:501005883373:web:13342ef2d2672fceea79e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);