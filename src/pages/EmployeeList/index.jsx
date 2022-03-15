import styled from "styled-components";
import {useHistory} from "react-router";
import EmployeeTable from "../../components/EmployeeTable";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import fetchEmployees from "../../services/fetchEmployees"
import Dropdown from "../../components/Dropdown";

const EmployeeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #filters{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input{
      margin-left: 10px;
    }
    .entries{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`

const EmployeeList = () => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState(undefined)
    // const [employees, setEmployees] = useState([])
    //
    // useEffect(() => {
    //     const url = 'http://localhost:3000/employees'
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setEmployees(data)
    //         })
    //         .catch(error => {
    //             console.log(`Fetch problem: ${error}`)
    //         });
    // }, [])

    // with React Query
    const { status, data, error } = useQuery("employees", fetchEmployees)

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

    console.log(status, data)

    const options = [
        { value : "10", label : "10" },
        { value : "25", label : "25" },
        { value : "50", label : "50" },
        { value : "100", label : "100" },
    ]

    return(
        <EmployeeListWrapper>
            <h1>Current Employees</h1>
            <div id={"filters"}>
                <div class={"entries"}>Show <Dropdown options={options}/> entries</div>
                <div id={"searchBar"}>
                    <label htmlFor={"search"}>Search</label>
                    <input type={"string"}
                           id={"search"}
                           onChange={handleChange}
                    />
                </div>
            </div>
            <EmployeeTable employees={data} filter={filteredEmployees}/>
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList