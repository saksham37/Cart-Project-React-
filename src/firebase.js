import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDGp93xUI5Huimwfzzo9u0XtHJ-Q6J-Q7E",
  
    authDomain: "cart-53a4f.firebaseapp.com",
  
    projectId: "cart-53a4f",
  
    storageBucket: "cart-53a4f.appspot.com",
  
    messagingSenderId: "586521425842",
  
    appId: "1:586521425842:web:802eff8d2e5d92d945d6ab"
  
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();