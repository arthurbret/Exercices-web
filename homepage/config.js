// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfpvaWmjO4gHmTXspY9KGJounZ4fgzZ0",
  authDomain: "divid-ee21e.firebaseapp.com",
  databaseURL: "https://divid-ee21e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "divid-ee21e",
  storageBucket: "divid-ee21e.appspot.com",
  messagingSenderId: "1037703416215",
  appId: "1:1037703416215:web:d556136a8571eceba25cd2",
  measurementId: "G-9C44ZYW4L6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
alert("hello world");

const database = firebase.database();
database.ref("biens")
    .once("value", function(snapshot) {
        alert(snapshot.val());
    });









alert("hello world");