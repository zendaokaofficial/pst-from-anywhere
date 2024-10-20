// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjWkmdYw0FWCfIi0Oiy0gjtVA6tx4tBaI",
  authDomain: "pstfromanywhere-700b9.firebaseapp.com",
  projectId: "pstfromanywhere-700b9",
  storageBucket: "pstfromanywhere-700b9.appspot.com",
  messagingSenderId: "1065324251200",
  appId: "1:1065324251200:web:94e3887d0079e85d67f7a5",
  measurementId: "G-5WH4JEW7DN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };