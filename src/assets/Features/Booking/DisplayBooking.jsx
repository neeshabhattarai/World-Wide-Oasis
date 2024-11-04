import styled, { css } from "styled-components";
import Table from "../../../UI/TableComponent";
import Menu from "../../../UI/Menus";
import ModalWindow from "../../../UI/Modal";
import { HiArrowDown, HiArrowUp, HiEllipsisVertical, HiTrash } from "react-icons/hi2";
import {  useNavigate } from "react-router-dom";
import { useCheckingOUt, useDeleting } from "./CreateBooking";

const H1=styled.h1`
${(props)=>props.type=="unconfirmed"&&css`
color: red;
background-color: whitesmoke;
padding: 5px;
`};
${(props)=>props.type=="confirmed"&&css`
color: #0ac219;
`};
font-size:inherit;
`;
export let IterativeBooking=({val})=>{
  console.log(val);
    const navigate=useNavigate();
    
    let{checkout,isCheckingOut}=useCheckingOUt();
    //eslint-disable-next-line
    let{isDeleting,deletes}=useDeleting();
    let {Status,Amount,Guest:{name},cabin:{TotalPrice},id}=val;
    // console.log(id);
    // console.log(name,Status);
    return <Table.Body>
          <H1>{TotalPrice?TotalPrice:<span>&minus;</span>}</H1>
          <H1>{name}</H1>
          <H1 type={Status}>{Status?Status:'&minus;'}</H1>
          <H1>{Amount}</H1>
          <ModalWindow>
          <Menu>
           <Menu.Toggle opens={id}><HiEllipsisVertical/></Menu.Toggle>           
           <Menu.List opens={id}><Menu.Button onClick={()=>navigate(`${id}`)}>See details</Menu.Button>
           {Status=='unconfirmed'&&<Menu.Button icon={<HiArrowDown/>} onClick={()=>navigate(`/checkin/${id}`)}>Check in</Menu.Button>}
           {Status=='confirmed'&&<Menu.Button icon={<HiArrowUp/>} disable={isCheckingOut} onClick={()=>checkout({id,field:{Status:"checkout"}})}>Check out</Menu.Button>}
           <Menu.Button icon={<HiTrash/>} disable={isDeleting} onClick={()=>deletes({id})}>Delete</Menu.Button>
           
            </Menu.List></Menu>
               
          </ModalWindow>
            </Table.Body>
            }