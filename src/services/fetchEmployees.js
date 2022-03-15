const fetchEmployees = async () => {
    const url = 'http://localhost:3000/employees'
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default fetchEmployees