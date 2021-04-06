import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


export  const firebaseConfig = {
    apiKey: "AIzaSyADRkZtHx2jLmNMHvQUYBlExQuUFTYBmwA",
    authDomain: "sangitdrum-drum.firebaseapp.com",
    projectId: "sangitdrum-drum",
    storageBucket: "sangitdrum-drum.appspot.com",
    messagingSenderId: "491043775598",
    appId: "1:491043775598:web:f02cd39c37ebf461e8b27f"
};

let app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore(app);
firebase.firestore()

export default firebase;
