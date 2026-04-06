import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, updateDoc, serverTimestamp, limit, orderBy, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrlOGp8Wo0wNdSnLJs5raXcZpaibGKimg",
  authDomain: "keyshop-42a6b.firebaseapp.com",
  projectId: "keyshop-42a6b",
  storageBucket: "keyshop-42a6b.firebasestorage.app",
  messagingSenderId: "1088363380634",
  appId: "1:1088363380634:web:cc8542a079586cb1d08423",
  measurementId: "G-CKM5L8FWYP"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, onAuthStateChanged, doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, updateDoc, serverTimestamp, limit, orderBy, deleteDoc };
