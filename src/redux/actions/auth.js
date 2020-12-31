import firebase from "firebase/app"
import "firebase/auth"
import { googleProvider } from "../../helper"


export function googleAuth() {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleProvider)
    }
}