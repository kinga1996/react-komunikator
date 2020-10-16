import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBciuiBFpKM4mFAwj3wosTbP1-BFeBC9OQ",
    authDomain: "komunikator-kini.firebaseapp.com",
    databaseURL: "https://komunikator-kini.firebaseio.com",
    projectId: "komunikator-kini",
    storageBucket: "komunikator-kini.appspot.com",
    messagingSenderId: "983197373943",
    appId: "1:983197373943:web:287fb47fd4cfc110ff8af2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

  export default db;