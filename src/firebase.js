import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-vm5KF8-jw7wfwAhd_SHM56uN6i8N_UA",
    authDomain: "fir-343c7.firebaseapp.com",
    projectId: "fir-343c7",
    storageBucket: "fir-343c7.appspot.com",
    messagingSenderId: "825833690238",
    appId: "1:825833690238:web:355c91050769548eedb42f",
    measurementId: "G-LJPJLNP3X1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firebaseExport = {db, auth, provider}

export default firebaseExport;