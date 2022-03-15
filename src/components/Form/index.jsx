import styled from "styled-components";
import {useEffect, useState} from "react";
import {states} from "../../utils/states";
import Modal from "../Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../Dropdown"

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

    const departments = [
        { value : "sales", label:"Sales" },
        { value :"marketing", label:"Marketing" },
        { value :"engineering", label:"Engineering" },
        { value :"human resources", label:"Human Resources" },
        { value :"legal", label:"Legal" },
    ]

    function renameProperty(obj, fromKey, toKey) {
        obj[toKey] = obj[fromKey];
        delete obj[fromKey];
    }

    states.forEach(state => {
        for(let key in state){
            if(key === "name") {
                renameProperty(state, key, "label")
            }
            if(key === "abbreviation") {
                renameProperty(state, key, "value")
            }
            return state
        }
    });

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

        fetch(url, init)
            .then(response => response.json())
            .catch(error => {
                console.log(`Fetch problem: ${error}`)
            });
    }

    return(
        <FormWrapper method="post" onSubmit={submitForm} novalidate id={"formWrapper"}>
            <InputWrapper>
                <label htmlFor={"firstName"}>First name</label>
                <input type={"text"}
                       id={"firstName"}
                       onChange={(e) => setFirstName(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"lastName"}>Last name</label>
                <input type={"text"}
                       id={"lastName"}
                       onChange={(e) => setLastName(e.target.value)}
                       required
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
                    <Dropdown name={"state"}
                              id={"state"}
                              onChange={(e) => setState(e.target.value)}
                              options={states}/>
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
                <Dropdown name={"department"}
                          id={"department"}
                          onChange={(e) => setDepartment(e.target.value)}
                          options={departments}/>
            </InputWrapper>
            <SubmitButton type={"submit"} onClick={() => setIsOpen(true)}>Save</SubmitButton>
            <Modal open={isOpen}
                   onClose={() => setIsOpen(false)}
                   app={document.getElementById("root")}
            >
                Employee created !
            </Modal>
        </FormWrapper>
    )
}

export default NewEmployeeForm