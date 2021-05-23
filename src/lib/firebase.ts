import firebase from 'firebase';
export * as fire from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyABj6uhonY8MXBoorCl_eOFvqY0YZ5x8gc',
  authDomain: 'facebook-nextjs-clone.firebaseapp.com',
  projectId: 'facebook-nextjs-clone',
  storageBucket: 'facebook-nextjs-clone.appspot.com',
  messagingSenderId: '274127450072',
  appId: '1:274127450072:web:91b64f31c9d15793fe8cad',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();
export const storage = app.storage();

export default firebase;
