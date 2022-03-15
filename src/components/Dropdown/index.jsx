import Select from "react-select"
import styled from "styled-components";

const DropdownWrapper = styled.div``

const Dropdown = ({options}) => {
    console.log(options)
    return(
        <DropdownWrapper>
            <Select options={options}/>
        </DropdownWrapper>
    )
}

export default Dropdown