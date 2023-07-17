// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxb5hta2X0ZUAyWnC07dFnBIgEdVgCdOE",
    authDomain: "hondaimart.firebaseapp.com",
    projectId: "hondaimart",
    storageBucket: "hondaimart.appspot.com",
    messagingSenderId: "515872107494",
    appId: "1:515872107494:web:fd5323eaa39b9b3d858427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;