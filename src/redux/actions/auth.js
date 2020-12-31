import firebase from "firebase/app"
import "firebase/auth"
import { googleProvider } from "../../helper"
import { LOGGED_IN } from "./type"


export function googleAuth() {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleProvider).then(() => {
            dispatch({ type: LOGGED_IN, payload:true})
        })
    }
}