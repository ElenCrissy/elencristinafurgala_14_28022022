import styled from "styled-components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {states} from "../../utils/states";
import {createEmployee} from "../../store/actions";
import Modal from "../Modal";
import {store} from "../../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormWrapper = styled.form`
  width: 20%;
  margin-bottom: 20px;
`
const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const AddressWrapper = styled.fieldset``

const SubmitButton = styled.button``

const NewEmployeeForm = () => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        const userInput = {
            firstName : firstName,
            lastName : lastName,
            birthDate : birthDate,
            startDate : startDate,
            address : {
                street : street,
                city : city,
                state : state,
                zipCode : zipCode
            },
            department : department
        }
        let storedEmployees = localStorage.getItem("employees")
        if(!storedEmployees) {
            let employees = []
            employees.push(userInput)
            localStorage.setItem("employees", JSON.stringify(employees))
        }
        if(storedEmployees) {
            const storedEmployeesArray = JSON.parse(localStorage.getItem("employees"))
            storedEmployeesArray.push(userInput)
            localStorage.setItem("employees", JSON.stringify(storedEmployeesArray))
        }
        // localStorage.clear()
        // dispatch(createEmployee(userInput))
    }

    return(
        <FormWrapper method="post" onSubmit={submitForm} novalidate>
            <InputWrapper>
                <label htmlFor={"firstName"}>First name</label>
                <input type={"text"}
                       id={"firstName"}
                       onChange={(e) => setFirstName(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"lastName"}>Last name</label>
                <input type={"text"}
                       id={"lastName"}
                       onChange={(e) => setLastName(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"birthDate"}>Date of birth</label>
                <DatePicker
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                    isClearable
                    showYearDropdown
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"startDate"}>Start date</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    showYearDropdown
                />
            </InputWrapper>
            <AddressWrapper>
                <legend>Address</legend>
                <InputWrapper>
                    <label htmlFor={"street"}>Street</label>
                    <input type={"text"}
                           id={"street"}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"city"}>City</label>
                    <input type={"text"}
                           id={"city"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"state"}>State</label>
                    <select name={"department"}
                            id={"state"}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value={"Alabama"}>Alabama</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"zipCode"}>Zip Code</label>
                    <input type={"number"}
                           id={"zipCode"}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </InputWrapper>
            </AddressWrapper>
            <InputWrapper>
                <label htmlFor={"department"}>Department</label>
                <select name={"department"}
                        id={"department"}
                        onChange={(e) => setDepartment(e.target.value)}
                >
                    <option value={"Sales"}>Sales</option>
                    <option value={"Marketing"}>Marketing</option>
                    <option value={"Engineering"}>Engineering</option>
                    <option value={"Human Resources"}>Human Resources</option>
                    <option value={"Legal"}>Legal</option>
                </select>
            </InputWrapper>
            <SubmitButton type={"submit"} onClick={() => setIsOpen(true)}>Save</SubmitButton>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>Employee created !</Modal>
        </FormWrapper>
    )
}

export default NewEmployeeForm