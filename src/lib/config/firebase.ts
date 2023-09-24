// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaJqc3_VRpjq9TqQbp4OPWfAqioPq2dk",
  authDomain: "toptopic-d0cf1.firebaseapp.com",
  projectId: "toptopic-d0cf1",
  storageBucket: "toptopic-d0cf1.appspot.com",
  messagingSenderId: "240142574607",
  appId: "1:240142574607:web:9261634b9a2ac614d92f7a",
  measurementId: "G-1L50919CFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);