import { FETCH_TODO } from "./type";
import { database } from "../../helper"

export function fetchTodoAction() {
    return (dispatch) =>{
        database.on("value", snapShot =>{
            let data = snapShot.val()
            dispatch({ type: FETCH_TODO, payload:data })
        })
    }
}

export function createNote(data) {
    return (dispatch) =>{
        database.push(data)
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        database.child(id).remove()
    }
}

export function updateTodo(id, data) {
    return (dispatch) => {
        database.child(id).update(data)
    }
}