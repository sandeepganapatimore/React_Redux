import { combineReducers } from "redux";
import cakeReducer from './Redux/cakeReducer'
import creamReducer from './IceCreams/CreamReducer'
import ApiReducer from "./Redux/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    cream: creamReducer,
    user: ApiReducer
})
export default rootReducer  