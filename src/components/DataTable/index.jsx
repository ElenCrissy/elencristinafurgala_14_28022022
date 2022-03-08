import DataTable from 'react-data-table-component';
import styled from "styled-components";

const DataTableWrapper = styled.div`
  //width: 80%;
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
        selector: row => row.street,
    },
    {
        name: 'City',
        selector: row => row.city,
    },
    {
        name: 'State',
        selector: row => row.state,
    },
    {
        name: 'Zip code',
        selector: row => row.zipCode,
    },
];

const EmployeeTable = (props) => {
    const data = JSON.parse(localStorage.getItem("employees"))
    console.log(data)
    if(data === null){
        return <p>No results</p>
    }
    return (
        <DataTableWrapper>
            {
                props.filter ?
                    <DataTable columns={columns} data={props.filter} pagination/> :
                    <DataTable columns={columns} data={data} pagination/>
            }

        </DataTableWrapper>
    )
}

export default EmployeeTable;