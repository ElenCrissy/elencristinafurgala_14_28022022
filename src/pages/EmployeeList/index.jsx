import styled from "styled-components";
import {useHistory} from "react-router";
import EmployeeTable from "../../components/DataTable";
import {useState} from "react";

const EmployeeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #filters{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const EmployeeList = () => {
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredEmployees, setFilteredEmployees] = useState([])

    const handleClick = () => {
        history.push('/')
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
        const storedEmployees = JSON.parse(localStorage.getItem("employees"))
        if(searchTerm) {
            const matchingEmployees = []
            storedEmployees.forEach(storedEmployee => {
                const firstName = storedEmployee.firstName
                const lastName = storedEmployee.lastName
                if(firstName.toLowerCase().includes(searchTerm.toLowerCase()) || lastName.toLowerCase().includes(searchTerm.toLowerCase())){
                    matchingEmployees.push(storedEmployee)
                    console.log(matchingEmployees)
                    return matchingEmployees
                }
            })
            setFilteredEmployees(matchingEmployees)
        }
        if(!searchTerm){
            console.log(searchTerm)
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
            <EmployeeTable filter={filteredEmployees}/>
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList