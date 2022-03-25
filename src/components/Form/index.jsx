import styled from "styled-components";
import {useState} from "react";
import {newStates} from "../../utils/states";
// import Modal from "../Modal";
import {Modal} from "@elencrissy/modal/src";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../Dropdown"
import {useAddEmployee} from "../../hooks/useAddEmployee";
import React from "react";

const FormWrapper = styled.form`
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
    const addEmployeeMutation = useAddEmployee()
    const departments = [
        { value : "sales", label:"Sales" },
        { value :"marketing", label:"Marketing" },
        { value :"engineering", label:"Engineering" },
        { value :"human resources", label:"Human Resources" },
        { value :"legal", label:"Legal" },
    ]
    const [info, setInfo] = useState({
        firstName : '',
        lastName: '',
        birthDate: new Date(),
        startDate: new Date(),
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
        },
        department: ''
    })
    const [isOpen, setIsOpen] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        const userInput = {
            firstName : info.firstName,
            lastName : info.lastName,
            birthDate : info.birthDate,
            startDate : info.startDate,
            address : {
                street : info.address.street,
                city : info.address.city,
                state : info.address.state,
                zipCode : info.address.zipCode
            },
            department : info.department
        }
        if(userInput.firstName && userInput.lastName) {
            // with React Query
            addEmployeeMutation.mutate(userInput, {
                onSuccess : () => {
                    setIsOpen(true)
                }
            })
        }
        // return null
    }

    return(
        <React.Fragment>
            <FormWrapper onSubmit={submitForm} novalidate id={"formWrapper"}>
                <InputWrapper>
                    <label htmlFor={"firstName"}>First name</label>
                    <input type={"text"}
                           id={"firstName"}
                           onChange={(e) => {
                               setInfo({...info,
                               firstName: e.target.value})
                           }}
                           required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"lastName"}>Last name</label>
                    <input type={"text"}
                           id={"lastName"}
                           onChange={(e) => {
                               setInfo({...info,
                                   lastName: e.target.value})
                           }}
                           required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"birthDate"}>Date of birth</label>
                    <DatePicker
                        selected={info.birthDate}
                        onChange={(date) => {
                            setInfo({...info,
                                birthDate: date})
                        }}
                        isClearable
                        showYearDropdown
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={"startDate"}>Start date</label>
                    <DatePicker
                        selected={info.startDate}
                        onChange={(date) => {
                            setInfo({...info,
                                startDate: date})
                        }}
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
                               onChange={(e) => {
                                   setInfo({...info,
                                       address: {
                                           ...info.address,
                                           street: e.target.value
                                       }
                                   })
                               }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor={"city"}>City</label>
                        <input type={"text"}
                               id={"city"}
                               onChange={(e) => {
                                   setInfo({...info,
                                       address: {
                                            ...info.address,
                                           city: e.target.value
                                       }
                                   })
                               }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor={"state"}>State</label>
                        <Dropdown name={"state"}
                                  id={"state"}
                                  onChange={(e) => {
                                      setInfo({...info,
                                          address: {
                                              ...info.address,
                                              state: e.target.value
                                          }
                                      })
                                  }}
                                  options={newStates}/>
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor={"zipCode"}>Zip Code</label>
                        <input type={"number"}
                               id={"zipCode"}
                               onChange={(e) => {
                                   setInfo({...info,
                                       address: {
                                           ...info.address,
                                           zipCode: e.target.value
                                       }
                                   })
                               }}
                        />
                    </InputWrapper>
                </AddressWrapper>
                <InputWrapper>
                    <label htmlFor={"department"}>Department</label>
                    <Dropdown name={"department"}
                              id={"department"}
                              onChange={(e) => {
                                  setInfo({...info,
                                      department: e.target.value})
                              }}
                              options={departments}/>
                </InputWrapper>
                <SubmitButton type={"submit"}>Save</SubmitButton>
            </FormWrapper>
            <Modal open={isOpen}
                   onClose={() => setIsOpen(false)}
                   app={document.getElementById("root")}
            >
                Employee created !
            </Modal>
        </React.Fragment>
    )
}

export default NewEmployeeForm