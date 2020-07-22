import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBZ3xifrXyjoHqL3hQatpzk6Ar9PvvXzc0",
  authDomain: "selfindication.firebaseapp.com",
  databaseURL: "https://selfindication.firebaseio.com",
  projectId: "selfindication",
  storageBucket: "gs://selfindication.appspot.com",
  messagingSenderId: "271273601599"
};
firebase.initializeApp(config);
export const functions = firebase.functions();