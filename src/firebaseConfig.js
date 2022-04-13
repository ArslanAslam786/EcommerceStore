// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIBKSlZQDt_hrYiO1mCL_QTBL2wkFi27c',
  authDomain: 'ecommerceshop-373eb.firebaseapp.com',
  projectId: 'ecommerceshop-373eb',
  storageBucket: 'ecommerceshop-373eb.appspot.com',
  messagingSenderId: '1054425373878',
  appId: '1:1054425373878:web:7371c4fb23f9de5891da17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;
