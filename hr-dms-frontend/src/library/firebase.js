import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "hrm-dms.firebaseapp.com",
  projectId: "hrm-dms",
  storageBucket: "hrm-dms.appspot.com",
  messagingSenderId: "219760288968",
  appId: "1:219760288968:web:8fe82407f6a5c51b12f1fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();