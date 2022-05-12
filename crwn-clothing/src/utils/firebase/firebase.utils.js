import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC0CQdA6wKN3OWmcci9Ax33e_mN_4BcMfM",
    authDomain: "crwn-clothing-db-2968e.firebaseapp.com",
    projectId: "crwn-clothing-db-2968e",
    storageBucket: "crwn-clothing-db-2968e.appspot.com",
    messagingSenderId: "555529301454",
    appId: "1:555529301454:web:daf0d3265a4dd730b84f9f"
};


const firebaseApp = initializeApp(firebaseConfig);
const googleProvider= new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapShot= await getDoc(userDocRef);


    if(!userSnapShot.exists()){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{displayName,email,createdAt});
        } catch (error){
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};