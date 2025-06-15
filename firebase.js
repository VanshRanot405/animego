import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF6L5TszvImzXKIujZMxK4wknU69dMkEA",
  authDomain: "animego-415de.firebaseapp.com",
  projectId: "animego-415de",
  storageBucket: "animego-415de.appspot.com",
  messagingSenderId: "1060051529365",
  appId: "1:1060051529365:web:99c494997bd6fe9dffb5dc",
  measurementId: "G-BNZRHVRVLWJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };