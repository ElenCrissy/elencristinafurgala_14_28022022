import {useQuery} from "react-query";
import fetchEmployees from "../services/fetchEmployees";

export const useEmployees = () => {
    return useQuery("employees", fetchEmployees)
}

