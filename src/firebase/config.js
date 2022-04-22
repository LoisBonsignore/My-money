import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCwgnCy7Rgtw6gCjkv_omF7aTPYgt6lUto",
    authDomain: "mymoney-60149.firebaseapp.com",
    projectId: "mymoney-60149",
    storageBucket: "mymoney-60149.appspot.com",
    messagingSenderId: "989090817462",
    appId: "1:989090817462:web:9c0955cb52ce17a1a10d17"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }