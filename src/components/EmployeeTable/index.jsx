import DataTable from 'react-data-table-component';
import styled from "styled-components";
import PropTypes from "prop-types";

const EmployeeTableWrapper = styled.div`
  width: 80%;
`

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
    },
    {
        name: 'Start date',
        selector: row => row.startDate,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Date of birth',
        selector: row => row.birthDate,
    },
    {
        name: 'Street',
        selector: row => row.address.street,
    },
    {
        name: 'City',
        selector: row => row.address.city,
    },
    {
        name: 'State',
        selector: row => row.address.state,
    },
    {
        name: 'Zip code',
        selector: row => row.address.zipCode,
    },
];

const EmployeeTable = (props) => {
    if(props.employees === null){
        return <p>No results</p>
    }
    return (
        <EmployeeTableWrapper>
            {
                props.filter ?
                    <DataTable columns={columns} data={props.filter} pagination/> :
                    <DataTable columns={columns} data={props.employees} pagination/>
            }

        </EmployeeTableWrapper>
    )
}

export default EmployeeTable;

EmployeeTable.protoTypes = {
    employees : PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street : PropTypes.string.isRequired,
            city : PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            zipCode: PropTypes.string.isRequired
        }),
        id : PropTypes.number.isRequired
    }))
}