import styled from "styled-components";
import NewEmployeeForm from "../../components/Form";

const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomePage = () => {
    return(
        <HomePageWrapper>
            <h1>HRNET</h1>
            // get employee state
            // employees ? "View current employees"
            <h2>Create Employee</h2>
            <NewEmployeeForm/>
        </HomePageWrapper>
    )
}

export default HomePage