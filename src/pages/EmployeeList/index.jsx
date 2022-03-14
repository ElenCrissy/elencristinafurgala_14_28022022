import styled from "styled-components";
import {useHistory} from "react-router";
import EmployeeTable from "../../components/DataTable";
import {useEffect, useState} from "react";

const EmployeeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #filters{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input{
      margin-left: 10px;
    }
  }
`

const EmployeeList = () => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState(undefined)
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3000/employees'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEmployees(data)
            })
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
            });
    }, [])

    const handleClick = () => {
        history.push('/')
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        if(searchTerm) {
            const matchingEmployees = []
            employees.forEach(employee => {
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

    return(
        <EmployeeListWrapper>
            <h1>Current Employees</h1>
            <div id={"filters"}>
                {/*<p>Show <Menu/> entries</p>*/}
                <div id={"searchBar"}>
                    <label htmlFor={"search"}>Search</label>
                    <input type={"string"}
                           id={"search"}
                           onChange={handleChange}
                    />
                </div>
            </div>
            <EmployeeTable employees={employees} filter={filteredEmployees}/>
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList