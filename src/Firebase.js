// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6kwM07UHvKWFHdXuX9Nnv0TiibHgM7O8",
  authDomain: "photo-gallery-5f4f2.firebaseapp.com",
  projectId: "photo-gallery-5f4f2",
  storageBucket: "photo-gallery-5f4f2.firebasestorage.app",
  messagingSenderId: "697128857243",
  appId: "1:697128857243:web:b39f8ec6e73edbd2ed603e",
  measurementId: "G-E0XNBK3KRW"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);