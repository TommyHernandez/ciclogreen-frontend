import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBjv9uAQuaWvdZxIHp3zWJGVMO0rIqz6n4',
  authDomain: 'ciclogreen-login.firebaseapp.com',
  databaseURL: 'https://ciclogreen-login.firebaseio.com',
  projectId: 'ciclogreen-login',
  storageBucket: 'ciclogreen-login.appspot.com',
  messagingSenderId: '761374133941',
  appId: '1:761374133941:web:685c6c8a265ccc9ac4b8fc',
});

export { app };
