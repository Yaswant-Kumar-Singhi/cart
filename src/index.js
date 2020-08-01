import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhtSMjPzISOh1KBPw8IVrhoxAajb2xD14",
  authDomain: "cart-c8d39.firebaseapp.com",
  databaseURL: "https://cart-c8d39.firebaseio.com",
  projectId: "cart-c8d39",
  storageBucket: "cart-c8d39.appspot.com",
  messagingSenderId: "362153447983",
  appId: "1:362153447983:web:cf937b771531a7cc22ecda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

