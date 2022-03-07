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
        const storedEmployees = JSON.parse(localStorage.getItem("employees"))
        if(searchTerm) {
            
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
            <EmployeeTable filter={searchTerm}/>
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList