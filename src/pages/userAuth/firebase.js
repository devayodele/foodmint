import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNL4rbCxzy14JlN9S8Du-STWAGHLCmfj8",
  authDomain: "foodmint-e062a.firebaseapp.com",
  projectId: "foodmint-e062a",
  storageBucket: "foodmint-e062a.appspot.com",
  messagingSenderId: "380394429471",
  appId: "1:380394429471:web:b952fe243031cb924b492a",
  measurementId: "G-PMJ2ZYR7HH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (auth, googleProvider) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", "user.uid"));
    const docs = getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (auth, email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("password rest link sent!");
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  }
};

const logOut = async (auth) => {
  signOut(auth);
};

export {
  auth,
  googleProvider,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};
