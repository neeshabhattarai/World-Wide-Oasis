
import { cloneElement } from "react";
import {  createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { WindowModels } from "./ModalWindow";
//import styled from "styled-components";
const ModalContext=createContext();
 let ModalWindow=({children})=>{
    const [Name,setName]=useState("");
 const close=()=>setName("");
    const open=setName;
return<ModalContext.Provider value={{close,open,Name}}>{children}</ModalContext.Provider>
}

function OpenModel({children,opens}){
let {open}=useContext(ModalContext);
    return cloneElement(children,{onClick:()=>open(opens)});
};
function WindowModal({ children, opens }) {
 
    const { Name,close } = useContext(ModalContext);
    console.log(opens,Name)
    const {ref}=WindowModels({close});
    let Modal = styled.div`
    /* display: block; */
    position:fixed;
    width: fit-content;
    margin-left: 1rem;
    height: fit-content;
    font-size: 1rem;
    top:0;
    border-radius: 10px;
    left:20rem;
    margin-top: 2rem;
    background-color: #4cbb2a;
    border: 3px solid black;
    backface-visibility: hidden;
    backdrop-filter: blur(33px);
    z-index: 10;
  
    `;

    const Nen = styled.div`
 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  backdrop-filter: blur(30rem);
    `;
   
   
    if (Name !== opens) return null;
    
    return createPortal(<Nen>
       
        <Modal ref={ref} >
        <HiXMark onClick={close} style={{fontSize:"2rem",textAlign:"right",width:"100%"}}></HiXMark>
            {cloneElement(children,{onClose:close})}</Modal>
    </Nen>,document.body);
}
ModalWindow.open=OpenModel;
ModalWindow.window=WindowModal;
export default ModalWindow;