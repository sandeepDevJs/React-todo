import { combineReducers } from "redux"
import { createReducer } from "../Reducers"

const rootReducer = combineReducers({ todo : createReducer })
export default rootReducer