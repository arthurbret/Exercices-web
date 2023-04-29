// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfpvaWmjO4gHmTXspY9KGJounZ4fgzZ0",
  authDomain: "divid-ee21e.firebaseapp.com",
  projectId: "divid-ee21e",
  storageBucket: "divid-ee21e.appspot.com",
  messagingSenderId: "1037703416215",
  appId: "1:1037703416215:web:d556136a8571eceba25cd2",
  measurementId: "G-9C44ZYW4L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const docRef = (db, "biens");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}









alert("hello world");