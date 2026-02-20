// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeXrQBNCv4uUJ2Up3Br70A6Ag4Bken4I0",
    authDomain: "whatin-space.firebaseapp.com",
    projectId: "whatin-space",
    storageBucket: "whatin-space.firebasestorage.app",
    messagingSenderId: "871075566950",
    appId: "1:871075566950:web:354f238f513c8c500be4a7",
    measurementId: "G-YYDQRLQ3FM"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy, signInWithEmailAndPassword, onAuthStateChanged, signOut, where, serverTimestamp };
