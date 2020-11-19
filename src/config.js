import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrnNrP9hEhFNtpFokmHimXX38QM1xBCb8",
  authDomain: "komunkomunikator.firebaseapp.com",
  databaseURL: "https://komunkomunikator.firebaseio.com",
  projectId: "komunkomunikator",
  storageBucket: "komunkomunikator.appspot.com",
  messagingSenderId: "559928872331",
  appId: "1:559928872331:web:2e564f692c713794aff38e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

  export default db;