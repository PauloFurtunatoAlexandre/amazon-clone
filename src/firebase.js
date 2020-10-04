import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD93BM_BHU4PDruatp2yyM-sbZG1K8Tj1Q",
    authDomain: "clone-amz.firebaseapp.com",
    databaseURL: "https://clone-amz.firebaseio.com",
    projectId: "clone-amz",
    storageBucket: "clone-amz.appspot.com",
    messagingSenderId: "245676999673",
    appId: "1:245676999673:web:e388ef9c775c2caf73b328",
    measurementId: "G-38XVVFEFV1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
