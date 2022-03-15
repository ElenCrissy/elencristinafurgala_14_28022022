import {useMutation} from "react-query";
import {addEmployee} from "../services/addEmployee";

export const useAddEmployee = () => {
    return useMutation(addEmployee)
}