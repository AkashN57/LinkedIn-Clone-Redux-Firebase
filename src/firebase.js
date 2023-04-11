import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWGGq6Bz1GzQOIjJ0sekNLUk7tq8TwN3s",
  authDomain: "linkedin-clone-a01ce.firebaseapp.com",
  projectId: "linkedin-clone-a01ce",
  storageBucket: "linkedin-clone-a01ce.appspot.com",
  messagingSenderId: "491906944865",
  appId: "1:491906944865:web:c10cd34c35cc1bf71fff20"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
