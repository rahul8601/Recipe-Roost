// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8fPR34mv1_Urkqr9DJKhjbvgcvprQr68",
  authDomain: "reciperoost-4eb05.firebaseapp.com",
  projectId: "reciperoost-4eb05",
  storageBucket: "reciperoost-4eb05.appspot.com",
  messagingSenderId: "200360980026",
  appId: "1:200360980026:web:14fc2f5a04d61009e74f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)