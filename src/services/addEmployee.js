import PropTypes from "prop-types";
import EmployeeTable from "../components/EmployeeTable";

export const addEmployee = (userInput) => {
    const url = 'http://localhost:3001/employees'
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "firstName" : userInput.firstName,
            "lastName" : userInput.lastName,
            "birthDate" : userInput.birthDate,
            "startDate" : userInput.startDate,
            "address" : {
                "street" : userInput.address.street,
                "city" : userInput.address.city,
                "state" : userInput.address.state,
                "zipCode" : userInput.address.zipCode
            },
            "department" : userInput.department
        })
    }
    return fetch(url, init)
    .then(response => response.json())
    .catch(error => {
        console.log(`Fetch problem: ${error}`)
        throw error
    });
}

addEmployee.protoTypes = {
    userInput : PropTypes.shape({
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
    })
}