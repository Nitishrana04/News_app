// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDlIKb8Lqjc1Tdhvoyp9eD0y0lIuGjgV0",
    authDomain: "my-app-563e4.firebaseapp.com",
    projectId: "my-app-563e4",
    storageBucket: "my-app-563e4.appspot.com",
    messagingSenderId: "1079507431975",
    appId: "1:1079507431975:web:32ab09ee7fb5c8389c1402",
    measurementId: "G-5TD65N00NJ"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;