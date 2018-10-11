import { AppRegistry } from 'react-native';
import firebase from 'firebase';

import App from './App';

const config = {
    apiKey: 'AIzaSyBKtks5vCoutpXrpH13nZ8JXVtzbhCoTXE',
    authDomain: 'ogrencikayit-8e2cb.firebaseapp.com',
    databaseURL: 'https://ogrencikayit-8e2cb.firebaseio.com',
    projectId: 'ogrencikayit-8e2cb',
    storageBucket: 'ogrencikayit-8e2cb.appspot.com',
    messagingSenderId: '636020246064'
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('studentRegister', () => App);
