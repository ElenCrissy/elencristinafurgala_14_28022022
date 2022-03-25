import styled from "styled-components";
import {useHistory} from "react-router";
import EmployeeTable from "../../components/EmployeeTable";
import {useState} from "react";
import {useEmployees} from "../../hooks/useEmployees";

const EmployeeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #searchBar{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    input{
      margin-left: 10px;
    }
  }
`

const EmployeeList = () => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState(undefined)

    const { data } = useEmployees()

    const handleClick = () => {
        history.push('/')
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        if(searchTerm) {
            const matchingEmployees = []
            data.forEach(employee => {
                const firstName = employee.firstName.toLowerCase()
                const lastName = employee.lastName.toLowerCase()
                if(firstName.includes(searchTerm.toLowerCase()) || lastName.includes(searchTerm.toLowerCase())){
                    matchingEmployees.push(employee)
                    return matchingEmployees
                }
            })
            setFilteredEmployees(matchingEmployees)
        }
        if(!searchTerm || searchTerm.length < 2){
            setFilteredEmployees(undefined)
        }
    }

    const options = [
        { value : "10", label : "10" },
        { value : "25", label : "25" },
        { value : "50", label : "50" },
        { value : "100", label : "100" },
    ]

    return(
        <EmployeeListWrapper>
            <h1>Current Employees</h1>
            <div id={"searchBar"}>
                <label htmlFor={"search"}>Search</label>
                <input type={"string"}
                       id={"search"}
                       onChange={handleChange}
                />
            </div>
            <EmployeeTable employees={data} filter={filteredEmployees}/>
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList