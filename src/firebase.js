import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjn0fKowC9UfSn3HuskyDZSRBBI3CJYBo",
    authDomain: "slack-app-f76f9.firebaseapp.com",
    databaseURL: "https://slack-app-f76f9.firebaseio.com",
    projectId: "slack-app-f76f9",
    storageBucket: "slack-app-f76f9.appspot.com",
    messagingSenderId: "248248415784",
    appId: "1:248248415784:web:e98802ec896d2e0f53271d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider_Instance();

export { db as default, auth, provider };

