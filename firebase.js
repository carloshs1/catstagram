// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: 'AIzaSyAwcyN2_2ZqTp5BrhNSFCZjSb0d0VrsalU',
 authDomain: 'catstagram-8a4b2.firebaseapp.com',
 projectId: 'catstagram-8a4b2',
 storageBucket: 'catstagram-8a4b2.appspot.com',
 messagingSenderId: '955127055842',
 appId: '1:955127055842:web:9a2cac489311ec0eaf25bb',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
