import styled from "styled-components";

const FormWrapper = styled.form`
  width: 20%;
`
const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const AddressWrapper = styled.fieldset`
`

const NewEmployeeForm = () => {
    const submitForm = () => {

    }
    return(
        <FormWrapper method="post" onSubmit={submitForm} novalidate>
            <InputWrapper>
                <label htmlFor={"firstName"}>First name</label>
                <input type={"text"}
                       id={"firstName"}
                       // onChange={(e) => setEmail(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"lastName"}>Last name</label>
                <input type={"text"}
                       id={"lastName"}
                       // onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"birthDate"}>Date of birth</label>
                <input type={"date"}
                       id={"birthDate"}
                       // onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor={"startDate"}>Start date</label>
                <input type={"date"}
                       id={"startDate"}
                       // onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </InputWrapper>
            <AddressWrapper>
                <legend>Address</legend>
                <InputWrapper>
                    <label htmlFor={"street"}>Street</label>
                    <input type={"text"}
                           id={"street"}
                        // onChange={(e) => setPassword(e.target.value)}
                           required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"city"}>City</label>
                    <input type={"text"}
                           id={"city"}
                        // onChange={(e) => setPassword(e.target.value)}
                           required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"state"}>State</label>
                    <select name={"department"}
                            id={"state"}
                        // onChange={(e) => setPassword(e.target.value)}
                    >
                        <option value={"Alabama"}>Alabama</option>
                        <option value={"Marketing"}>Marketing</option>
                        <option value={"Engineering"}>Engineering</option>
                        <option value={"Human Resources"}>Human Resources</option>
                        <option value={"Legal"}>Legal</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"zipCode"}>Zip Code</label>
                    <input type={"text"}
                           id={"zipCode"}
                        // onChange={(e) => setPassword(e.target.value)}
                           required
                    />
                </InputWrapper>
            </AddressWrapper>
            <InputWrapper>
                <label htmlFor={"department"}>Department</label>
                <select name={"department"}
                        id={"department"}
                        // onChange={(e) => setPassword(e.target.value)}
                >
                    <option value={"Sales"}>Sales</option>
                    <option value={"Marketing"}>Marketing</option>
                    <option value={"Engineering"}>Engineering</option>
                    <option value={"Human Resources"}>Human Resources</option>
                    <option value={"Legal"}>Legal</option>
                </select>
            </InputWrapper>
            {/*<SubmitButton type={"submit"}>Save</SubmitButton>*/}
        </FormWrapper>
    )
}

export default NewEmployeeForm