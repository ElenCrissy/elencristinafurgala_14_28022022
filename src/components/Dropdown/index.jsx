import Select from "react-select"
import styled from "styled-components";
import PropTypes from "prop-types";

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

Dropdown.protoTypes = {
    options : PropTypes.arrayOf(PropTypes.object)
}