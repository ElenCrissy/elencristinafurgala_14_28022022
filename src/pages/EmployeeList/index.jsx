import styled from "styled-components";
import {useHistory} from "react-router";

const EmployeeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const EmployeeList = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return(
        <EmployeeListWrapper>
            <h1>Current Employees</h1>
            {/*<Filters/>*/}
            {/*<Table/>*/}
            <p onClick={handleClick}>Home</p>
        </EmployeeListWrapper>
    )
}

export default EmployeeList