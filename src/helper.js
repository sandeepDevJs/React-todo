import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDv4R7j_9vte0-_z6_YjR79-AzFJuon-Dw",
    authDomain: "carbide-canto-289707.firebaseapp.com",
    projectId: "carbide-canto-289707",
    storageBucket: "carbide-canto-289707.appspot.com",
    messagingSenderId: "756166747823",
    appId: "1:756166747823:web:69090df51428cf705fd65a"
}

firebase.initializeApp(firebaseConfig)

//Firebase
export const database =  firebase.database().ref("/todos")

//Auth
export const googleProvider = new firebase.auth.GoogleAuthProvider()