import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7q4gBNhr_dp79APxbqNVsPZX7idwNHdc",
    authDomain: "monitoria-d9931.firebaseapp.com",
    projectId: "monitoria-d9931",
    storageBucket: "monitoria-d9931.appspot.com",
    messagingSenderId: "359174778261",
    appId: "1:359174778261:web:24d03b723b73a411045a9c"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app)
const db = firebase.firestore(app)

export { app, auth, db };