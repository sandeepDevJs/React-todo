import { FETCH_TODO, CREATE_TODO, LOGGED_IN } from "../actions/type"

export function fetchReducer(state=null, action){
    switch (action.type) {
        case FETCH_TODO: return action.payload   
 
        default:return state
    }
}

export function createReducer(state=null, action) {
    switch (action.type) {
        case CREATE_TODO:return action.payload
    
        default:return state
    }
}

export function loginCheckReducer(state=null, action) {
    switch (action.type) {
        case LOGGED_IN:return action.payload
        default:return false
    }
}