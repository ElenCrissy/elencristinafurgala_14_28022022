import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {reducer} from "./reducers";

export const initialState = {
    // employees : localStorage.getItem("employees"),
    employees : []
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))