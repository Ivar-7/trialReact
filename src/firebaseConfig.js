// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFOpf36HtJihkeuv2rJ5Ae7J9yc1BmqWQ",
  authDomain: "chatroom-7e466.firebaseapp.com",
  projectId: "chatroom-7e466",
  storageBucket: "chatroom-7e466.appspot.com",
  messagingSenderId: "581156377002",
  appId: "1:581156377002:web:9e138373307fcea0fa9bd3",
  measurementId: "G-1PGQ48BW03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
