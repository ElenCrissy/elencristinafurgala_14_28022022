const fetchEmployees = () => {
    const url = 'http://localhost:3001/employees'
    return fetch(url)
    .then(response => response.json())
    .catch(error => {
        console.log(`Fetch problem: ${error}`)
            throw error
        }
    )
}

export default fetchEmployees