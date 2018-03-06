import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import user from "./auth/auth";

const reducer = combineReducers({
    user
});

export default createStore(reducer, applyMiddleware(thunk));