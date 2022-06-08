// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjAUOsZ0T1HuK45wGbrCfNNQeXiwYgm-o",
  authDomain: "tldrcomicbooks-26657.firebaseapp.com",
  projectId: "tldrcomicbooks-26657",
  storageBucket: "tldrcomicbooks-26657.appspot.com",
  messagingSenderId: "356032301832",
  appId: "1:356032301832:web:b9badc6e01334f72c9fabd",
  measurementId: "G-X2CPSYZ5ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}