// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import cakeReducer from './cakeReducer'
import rootReducer from "../RootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store 