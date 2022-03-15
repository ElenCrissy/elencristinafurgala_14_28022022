import Select from "react-select"
import styled from "styled-components";

const DropdownWrapper = styled.div`
  margin: 0 10px;
`

const Dropdown = ({options}) => {
    return(
        <DropdownWrapper>
            <Select options={options}/>
        </DropdownWrapper>
    )
}

export default Dropdown