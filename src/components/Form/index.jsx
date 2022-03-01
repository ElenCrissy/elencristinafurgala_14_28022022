import styled from "styled-components";
import {useState} from "react";
import {states} from "../../utils/states";

const FormWrapper = styled.form`
  width: 20%;
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
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

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
        // dispatch(createEmployee(userInput))
        // opens modal
        // add link to employee list
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
                <input type={"date"}
                       id={"birthDate"}
                       onChange={(e) => setBirthDate(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"startDate"}>Start date</label>
                <input type={"date"}
                       id={"startDate"}
                       onChange={(e) => setStartDate(e.target.value)}
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
            <SubmitButton type={"submit"}>Save</SubmitButton>
        </FormWrapper>
    )
}

export default NewEmployeeForm