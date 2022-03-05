import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0,0,0,0.75);
  text-align: center;
  visibility: hidden;
  :before{
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.05em;
  }
  #closeIcon{
    height: 30px;
    width: 30px;
  }
  .visible{
    visibility: visible;
  }
`

const ModalContent = styled.div`
  vertical-align: middle;
  position: relative;
  z-index: 2;
  max-width: 500px;
  box-sizing: border-box;
  width: 90%;
  background: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #000;
  text-align: left;
`


const Modal = ({ children, open, onClose }) => {
    const modalRef = useRef(null);
    useEffect(() => {
        if (open) {
            console.log("open")
            modalRef.current.classList.add("visible");
        }
        // else {
        //     modalRef.current.classList.remove("visible");
        // }
        if(!open) return null
    }, [open]);

    return (
        <ModalWrapper ref={modalRef}>
            <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={onClose}
                id={"closeIcon"}
            />
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;