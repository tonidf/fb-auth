import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4d53Pn2Tx1q47nYuJzeAbNu8sjcTS76g",
    authDomain: "fir-auth-50a38.firebaseapp.com",
    projectId: "fir-auth-50a38",
    storageBucket: "fir-auth-50a38.firebasestorage.app",
    messagingSenderId: "18960080691",
    appId: "1:18960080691:web:0a167ba806d97e25822846"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }