import { combineReducers } from "redux"
import { fetchReducer } from "../Reducers"

const rootReducer = combineReducers({ fetchTodo: fetchReducer})
export default rootReducer