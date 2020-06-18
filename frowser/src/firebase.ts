import firebase, { firestore } from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDSlq6rBgISsu07qRpCwWuTpVZk8LePTgc",
  authDomain: "smartmirror-3d8e4.firebaseapp.com",
  databaseURL: "https://smartmirror-3d8e4.firebaseio.com",
  projectId: "smartmirror-3d8e4",
  storageBucket: "smartmirror-3d8e4.appspot.com",
  messagingSenderId: "248518876735",
  appId: "1:248518876735:web:73f705986d39ed2440a28a"
};
firebase.initializeApp(firebaseConfig);
const fstore = firestore();
export default fstore;
