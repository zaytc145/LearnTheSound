import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuhoxmbos9s2J4KgLh1AqMs7m2WTXR1SY",
  authDomain: "learnthesound.firebaseapp.com",
  projectId: "learnthesound",
  storageBucket: "learnthesound.appspot.com",
  messagingSenderId: "851159730123",
  appId: "1:851159730123:web:52aa04c8a7d7fbcae7d84e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const usersCollection = db.collection("usersCollection");
const chatsCollection = db.collection("chatsCollection");

export { db, auth, usersCollection, chatsCollection };
