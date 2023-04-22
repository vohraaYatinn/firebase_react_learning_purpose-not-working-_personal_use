import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_ljRcMqfLrt_ZB195cn8IGMtrmKskkGg",
  authDomain: "react-netflix-425ce.firebaseapp.com",
  projectId: "react-netflix-425ce",
  storageBucket: "react-netflix-425ce.appspot.com",
  messagingSenderId: "295683938718",
  appId: "1:295683938718:web:e126f7e307f5f1d40e5e8f",
  measurementId: "G-Y5H2YPW0XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);