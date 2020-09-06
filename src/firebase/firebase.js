// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration; this can be found on the firebase website 
const config = {
    apiKey: "AIzaSyDJV2L3nblcjU35M2Q3idWOcJKkohU4V6U",
    authDomain: "e-commerce-36936.firebaseapp.com",
    databaseURL: "https://e-commerce-36936.firebaseio.com",
    projectId: "e-commerce-36936",
    storageBucket: "e-commerce-36936.appspot.com",
    messagingSenderId: "418794991093",
    appId: "1:418794991093:web:918051ad1df5dbd2d5c4bc",
    measurementId: "G-FQN9LTL86Y"
};

//////////////////////////////// this is doing server side code with firebase ////////////////////////////
// createUserProfileDocument function allows us to take user object and store it inside firebase database
// use export so i can use it in other componenets
export const createUserProfileDocument = async (userAuth, additionalData) => { // userAuth & additionalData are parameters
    // STEP 1. check if we are getting a valued user ///////
    if (!userAuth) return; // if userAuth if false just return nothing; this is normal 100% of the time
    // query inside firestore to see if it already exits
    const userRef = firestore.doc(`users/${userAuth.uid}`); // ????? where does userAuth.uid data comes from; why didnt i not use await   ?????
    const snapShot = await userRef.get(); // getting a copy of the userRef(signed-in user)

    // if user doesnt exit create it; but why is !bang nessessary
    if(!snapShot.exits) {
        // what data do we want to use from userAuth
        const {displayName, email} = userAuth; // this is called refactoring
        // when was the user data created; ES6 creating a function called createAt
        const createdAt = new Date(); // new Date() is a javascript method
        // this is the data we will store to firebase store; using try / catch function
        try {
            await userRef.set({ // object, if the user doesnt exit we will create it 
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message) // error message 
        }
    }
    return userRef; // return userRef cuz i might want to do something with it
}; // now new users are being saved to firebase store database
/////////////////////////////////////////////////////////////////////////////////////////////
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
