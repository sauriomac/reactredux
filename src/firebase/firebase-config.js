import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDEr_yb3911tEHFkSUjfpaD-vL-sTDClis",
  authDomain: "react-app-9cc1e.firebaseapp.com",
  projectId: "react-app-9cc1e",
  storageBucket: "react-app-9cc1e.appspot.com",
  messagingSenderId: "892024911535",
  appId: "1:892024911535:web:3a6561b0a759e1a04e865a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}