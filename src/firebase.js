import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_EKb_bx4SFIV2iFNkBg5qq2We5z2niZI",
    authDomain: "clone-25107.firebaseapp.com",
    databaseURL: "https://clone-25107.firebaseio.com",
    projectId: "clone-25107",
    storageBucket: "clone-25107.appspot.com",
    messagingSenderId: "860983055532",
    appId: "1:860983055532:web:91e6640ff8ad115197fb09",
    measurementId: "G-26T45W4Y5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
