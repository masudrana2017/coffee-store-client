// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH3mS2cEYzTlX0JiSAxpjqy2S_YHpGZUw",
  authDomain: "coffee-store-23e8e.firebaseapp.com",
  projectId: "coffee-store-23e8e",
  storageBucket: "coffee-store-23e8e.appspot.com",
  messagingSenderId: "441899420711",
  appId: "1:441899420711:web:fca673d2e9f4087a8c1202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth