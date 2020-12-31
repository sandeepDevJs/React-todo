import { combineReducers } from "redux"
import { fetchReducer, loginCheckReducer } from "../Reducers"

const rootReducer = combineReducers({ fetchTodo: fetchReducer, isLoggedIn: loginCheckReducer})
export default rootReducer