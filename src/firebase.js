import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASORHgrL6nMSzgitSwPLy-Ax24n6HlCyE",
    authDomain: "chatx-287c2.firebaseapp.com",
    projectId: "chatx-287c2",
    storageBucket: "chatx-287c2.appspot.com",
    messagingSenderId: "977556542561",
    appId: "1:977556542561:web:791ed1d8352691eadfc620",
    measurementId: "G-YLFP716E87"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;