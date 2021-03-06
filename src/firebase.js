import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const app = firebase.initializeApp({
    apiKey: "AIzaSyD3iTzKeUcWaKLT00owY3ljMLn617YT2B8",

    authDomain: "nandi-test-b1cb1.firebaseapp.com",

    databaseURL: "https://nandi-test-b1cb1-default-rtdb.firebaseio.com",

    projectId: "nandi-test-b1cb1",

    storageBucket: "nandi-test-b1cb1.appspot.com",

    messagingSenderId: "745469610293",

    appId: "1:745469610293:web:d08fb68cdcff345560647c",

    measurementId: "G-PMFZV50PV6"

})

export const auth = app.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default app;
export const storage = getStorage(app);
export const db = getFirestore();
