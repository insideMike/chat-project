// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKbWsGkoGyUdzKmdblHF8w5NeGhGTtTn8',
  authDomain: 'chat-project-b4da2.firebaseapp.com',
  projectId: 'chat-project-b4da2',
  storageBucket: 'chat-project-b4da2.appspot.com',
  messagingSenderId: '375222892896',
  appId: '1:375222892896:web:dacc12c705a6c6708d4605',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
