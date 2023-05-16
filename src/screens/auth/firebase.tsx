import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDM3elUX8AI0AkrpXGPQObCJqRWXRzrSC0",
    authDomain: "react-contact-69e6e.firebaseapp.com",
    databaseURL: "https://react-contact-69e6e-default-rtdb.firebaseio.com",
    projectId: "react-contact-69e6e",
    storageBucket: "react-contact-69e6e.appspot.com",
    messagingSenderId: "974248023568",
    appId: "1:974248023568:web:7bb66f13d5c0dd3e611c95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const db = getDatabase(app)
export {auth, firestore,storage,db};