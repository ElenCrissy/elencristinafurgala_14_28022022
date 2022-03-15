export const addEmployee = (userInput) => {
    const url = 'http://localhost:3000/employees'
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