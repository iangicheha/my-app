import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVUcotvNtQ9jflwhPXH_e7Aa9Ctqa2q4Y",
  authDomain: "mobidok-7e83e.firebaseapp.com",
  projectId: "mobidok-7e83e",
  storageBucket: "mobidok-7e83e.appspot.com",
  messagingSenderId: "184418866470",
  appId: "1:184418866470:web:38a4ddb58d651fb08edde7",
  measurementId: "G-BL4CHPMQGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth };
