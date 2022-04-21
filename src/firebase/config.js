import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD5UVjzIhAgoXKCR2EinoqlI0dmJrYo7Rs",
    authDomain: "fakestagram-597e1.firebaseapp.com",
    projectId: "fakestagram-597e1",
    storageBucket: "fakestagram-597e1.appspot.com",
    messagingSenderId: "4792777977",
    appId: "1:4792777977:web:15ef58dbe0910977c97628"
};

firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };