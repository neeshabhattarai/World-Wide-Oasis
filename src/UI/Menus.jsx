import { createContext, useContext, useState } from "react"
import styled from "styled-components";
import { WindowModels } from "./ModalWindow";
import { createPortal } from "react-dom";

let StyledToggle=styled.button`
font-size:0.7rem;
background-color: azure;
`;
let StyledList=styled.div`
top:0;
right:0 ;
font-size: 0.8ren;
position: fixed;
display: flex;
flex-direction: column;
`;
let StyledButton=styled.button`
padding: 4px;
color: black;
background-color: blue;
`;
let MenuContex=createContext();
let Menu=({children})=>{
    let [open,setOpen]=useState('');
    let [pos,setP]=useState('');
    let close=()=>setOpen('');
    let Set=setOpen;
    return <MenuContex.Provider value={{open,close,Set,setP,pos}}>{children}</MenuContex.Provider>
}
let Toggle=({children,opens})=>{
    //eslint-disable-next-line
    let {Set,open,close,setP}=useContext(MenuContex);
    let HandleClick=(e)=>{
        let {x,y}=e.target.closest('button').getBoundingClientRect();
        setP({
            x:window.innerWidth-x,
            y:y+9,
        })
      open===''&&open!==opens?Set(opens):close();
      
    }
return <StyledToggle onClick={HandleClick}>{children}</StyledToggle>
}
let List=({children,opens})=>{
//eslint-disable-next-line
    let {open,close,pos}=useContext(MenuContex);
    // console.log(pos.x);
 let {ref}=WindowModels({close});
    if(opens!=open)return null;
    return createPortal(<StyledList ref={ref} pos={pos}>{children}</StyledList>,document.body);
}
let Button=({children,icon,onClick})=>{
  const{close}=useContext(MenuContex)
    function HandleClick(){
        onClick()?.();
        close();
    }
    return <StyledButton onClick={HandleClick}>{icon}<span>{children}</span></StyledButton>
}
Menu.Toggle=Toggle;
Menu.List=List;
Menu.Button=Button;
export default Menu;