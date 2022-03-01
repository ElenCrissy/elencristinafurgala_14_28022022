export const createEmployee = userInput => ({
    type : "create employee",
    payload : {
        firstName : userInput.firstName,
        lastName: userInput.lastName,
        birthDate : userInput.birthDate,
        startDate: userInput.startDate,
        address : {
            street: userInput.street,
            city : userInput.city,
            state : userInput.state,
            zipCode: userInput.zipCode
        },
        department: userInput.department
    }
})