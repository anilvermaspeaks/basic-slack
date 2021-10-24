import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBAc7Kxges6cmGZgPQFvjL9pMgaETVYKOU",
    authDomain: "react-chat-app-a5633.firebaseapp.com",
    projectId: "react-chat-app-a5633",
    storageBucket: "react-chat-app-a5633.appspot.com",
    messagingSenderId: "638442158432",
    appId: "1:638442158432:web:981cb245d2307b5ac10605",
    measurementId: "G-2021M7E1XT",
    databaseURL: "react-chat-app-a5633-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

