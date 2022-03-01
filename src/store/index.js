import { createStore, applyMiddleware } from 'redux'

export const initialState = {
    employees : localStorage.getItem("employees")
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))