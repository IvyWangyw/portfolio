// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYy6DY0G3tItJMg1GwhsW1re06AiiEQz8",
    authDomain: "ivy-wang---portfolio.firebaseapp.com",
    projectId: "ivy-wang---portfolio",
    storageBucket: "ivy-wang---portfolio.appspot.com",
    messagingSenderId: "516400779701",
    appId: "1:516400779701:web:693158df0b9b998a21c9fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const db = getFirestore(app)
export const storage = getStorage (app)
export const dbRef = collection(db, 'portfolio')

export const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=> {
    const user = userCredential.user
    console.log(user)
})
.catch((error)=>{
    console.log(error.code)
    console.log(error.message)
})

export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
.then((userCredential)=> {
    const user = userCredential.user
    console.log(user)
})
.catch((error)=>{
    console.log(error.code)
    console.log(error.message)
})

export const signOutUser = () => signOut(auth)
.then(()=>{
    console.log('Signed out')
})
.catch((error)=>{
    console.log(error.code)
    console.log(error.message)
})