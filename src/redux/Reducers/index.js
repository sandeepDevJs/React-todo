import { FETCH_TODO, CREATE_TODO } from "../actions/type"

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