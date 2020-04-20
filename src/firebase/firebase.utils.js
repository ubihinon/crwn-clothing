import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCg7Z8sxrvRn-HNVcD9B6DwZz14zW19Xx0",
    authDomain: "crwn-db-b8382.firebaseapp.com",
    databaseURL: "https://crwn-db-b8382.firebaseio.com",
    projectId: "crwn-db-b8382",
    storageBucket: "crwn-db-b8382.appspot.com",
    messagingSenderId: "241191063784",
    appId: "1:241191063784:web:033d6f154642c9a072f95d",
    measurementId: "G-XKD188LKMH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.id}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const  createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error createing user', error.message);
        }
    }

    return userRef;
};

export default firebase;
