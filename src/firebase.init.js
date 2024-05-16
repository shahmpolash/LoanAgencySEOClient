// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8wrj4kllMRCpjbR1OYY-0Xk37nsKKB-0",
  authDomain: "seoserviceforloanagency.firebaseapp.com",
  projectId: "seoserviceforloanagency",
  storageBucket: "seoserviceforloanagency.appspot.com",
  messagingSenderId: "188212005067",
  appId: "1:188212005067:web:771b0f9ffae1532070734e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;