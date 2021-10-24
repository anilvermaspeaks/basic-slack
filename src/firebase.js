import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
    databaseURL: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

