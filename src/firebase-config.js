import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALMKIgzzztOgynhfWCy3jGXe3IKUrNXz0",
  authDomain: "note-app-f941b.firebaseapp.com",
  projectId: "note-app-f941b",
  storageBucket: "note-app-f941b.appspot.com",
  messagingSenderId: "653864112477",
  appId: "1:653864112477:web:434f3f27547559090458b4",
};

//initialize firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);

//initialize auth
export const auth = getAuth(app);

//initialize goolge auth
export const provider = new GoogleAuthProvider();
