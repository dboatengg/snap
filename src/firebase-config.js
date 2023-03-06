import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyUbqR8LAR4Z2eTQV3tk2O_dq18NmNYZ4",
  authDomain: "snap-9a847.firebaseapp.com",
  projectId: "snap-9a847",
  storageBucket: "snap-9a847.appspot.com",
  messagingSenderId: "721896370628",
  appId: "1:721896370628:web:92fadbd7111677db763491",
};

//initialize firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);

//initialize auth
export const auth = getAuth(app);

//initialize goolge auth
export const provider = new GoogleAuthProvider();
