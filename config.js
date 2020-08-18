import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyARWIVM_7VAxI8ML2X8yB8zZd1uNb3DwJ0",
    authDomain: "lightbagexpoversion.firebaseapp.com",
    databaseURL: "https://lightbagexpoversion.firebaseio.com",
    projectId: "lightbagexpoversion",
    storageBucket: "lightbagexpoversion.appspot.com",
    messagingSenderId: "257260196883",
    appId: "1:257260196883:web:c08865e497061c466edbe6",
    measurementId: "G-JE1CKNG4TW"
};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
