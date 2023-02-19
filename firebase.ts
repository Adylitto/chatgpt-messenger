// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHe-rqbl7XO1V_cfW_MKYGK35UDO0IRZs",
  authDomain: "chatgpt-5bedd.firebaseapp.com",
  projectId: "chatgpt-5bedd",
  storageBucket: "chatgpt-5bedd.appspot.com",
  messagingSenderId: "643619472202",
  appId: "1:643619472202:web:8428853af173d68a4c37b3",
  measurementId: "G-MEERYEVP2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);