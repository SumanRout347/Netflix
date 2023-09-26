// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4RL-dR-HhHQ8uBphrO9AAUUWikuNXKa0",
  authDomain: "netflixgpt-f7229.firebaseapp.com",
  projectId: "netflixgpt-f7229",
  storageBucket: "netflixgpt-f7229.appspot.com",
  messagingSenderId: "735735618874",
  appId: "1:735735618874:web:c4bf2d76772abd5d12c403",
  measurementId: "G-XG81QVSZHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()