// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const config = {
    apiKey: "AIzaSyDJV2L3nblcjU35M2Q3idWOcJKkohU4V6U",
    authDomain: "e-commerce-36936.firebaseapp.com",
    databaseURL: "https://e-commerce-36936.firebaseio.com",
    projectId: "e-commerce-36936",
    storageBucket: "e-commerce-36936.appspot.com",
    messagingSenderId: "418794991093",
    appId: "1:418794991093:web:918051ad1df5dbd2d5c4bc",
    measurementId: "G-FQN9LTL86Y"
}

// Initialize Firebase
firebase.initializeApp(config);

// export firebase/auth
export const auth = firebase.auth();
// export firebase/firestore
export const firestore = firebase.firestore();
// Create an instance of the Google provider object
var provider = new firebase.auth.GoogleAuthProvider();
// custom OAuth provider parameters that you want to send with the OAuth request.
provider.setCustomParameters({'prompt': 'select_account'});
// To sign in with a pop-up window, call signInWithPopup
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export the entire library
export default firebase;
