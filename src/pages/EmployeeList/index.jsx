import styled from "styled-components";
import {useHistory} from "react-router";

const EmployeeListWrapper = styled.div``


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