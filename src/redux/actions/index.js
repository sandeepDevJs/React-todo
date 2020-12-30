import { FETCH_TODO } from "./type";
import { database } from "../../helper"
export function fetchTodoAction() {
    return {
        type: FETCH_TODO
    }
}

export function createNote(data) {
    return (dispatch) =>{
        database.push(data)
    }
}