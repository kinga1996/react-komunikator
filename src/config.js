import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBj7AgAAFkZRP0BeHYYtsZqjKPMrxZKqts",
  authDomain: "komunikator-1679c.firebaseapp.com",
  projectId: "komunikator-1679c",
  storageBucket: "komunikator-1679c.appspot.com",
  messagingSenderId: "279923152659",
  appId: "1:279923152659:web:37f2002bd497ef5635ece6",
  databaseURL: "https://komunikator-1679c-default-rtdb.firebaseio.com/"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

  export default db;