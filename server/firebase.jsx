// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIxIdIR_Mg5LntnbWtDhdqyM4Ev1WFxCk",
  authDomain: "imex-tama.firebaseapp.com",
  projectId: "imex-tama",
  storageBucket: "imex-tama.appspot.com",
  messagingSenderId: "538028640922",
  appId: "1:538028640922:web:891f0dd6eadbd1158f6d23",
  measurementId: "G-27H6MQRT8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);