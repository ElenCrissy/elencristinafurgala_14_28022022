import styled from "styled-components";
import NewEmployeeForm from "../../components/Form";
import {useHistory} from "react-router";

const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomePage = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/employee-list')
    }

    return(
        <HomePageWrapper>
            <h1>HRNET</h1>
            <p onClick={handleClick}>View current employees</p>
            <h2>Create Employee</h2>
            <NewEmployeeForm/>
        </HomePageWrapper>
    )
}

export default HomePage