import {initialState} from "./index";

export const reducer = (state = initialState, action) => {
    if(action.type === "create employee") {
        const newList = state.employees.push(action.payload)
        return {...state,
            employees: newList
        }
    }
}