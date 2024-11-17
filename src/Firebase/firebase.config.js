// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJLSmW40MMDWAqSEFnQEBPgvfChHSErjU",
    authDomain: "assignment-nine-906cd.firebaseapp.com",
    projectId: "assignment-nine-906cd",
    storageBucket: "assignment-nine-906cd.firebasestorage.app",
    messagingSenderId: "811994758657",
    appId: "1:811994758657:web:648bdc80b1f2f5063e0a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
