// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTXH3OW1EUbee8yXt04YkC7zvTWfCt1Ts",
  authDomain: "myblog-aee44.firebaseapp.com",
  databaseURL: "https://myblog-aee44-default-rtdb.firebaseio.com",
  projectId: "myblog-aee44",
  storageBucket: "myblog-aee44.appspot.com",
  messagingSenderId: "851291435958",
  appId: "1:851291435958:web:24f2d6d6d3c0f9d8f74717",
  measurementId: "G-1TF3ZL051S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
