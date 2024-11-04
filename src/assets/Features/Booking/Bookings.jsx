import { useNavigate, useParams } from "react-router-dom"


import { UseById } from "./CreateBooking";
import Button from "../../../styles/Button";
import styled from "styled-components";
import { BookingData } from "./BookingData";
import ModalWindow from "../../../UI/Modal";
import { HiTrash } from "react-icons/hi2";
import Menu from "../../../UI/Menus";
import ConfirmDelete from "../../../UI/ConfirmDelte";
import { useDeleting } from "./CreateBooking";
export let Div =styled.div`
display:flex;
justify-content:space-between;`;

export let Bookings=()=>{
const navigate=useNavigate();
let{isDeleting,deletes}=useDeleting();
   let {id}=useParams();
   
   let {data={},isLoading}=UseById({id:Number(id)});
   if(isLoading)return;
   const{Status}=data;

   // console.log(data)
   return <>
   <Div><h1>Bookings #{id}</h1>
   <Button type="primary">{Status}</Button></Div>
   <BookingData data={data}/>
   <ModalWindow>
   <Menu>
  
    <ModalWindow.open opens={"delete"} >
           <Menu.Button icon={<HiTrash/>}>Delete</Menu.Button>
            </ModalWindow.open> 
            </Menu>
            <ModalWindow.window opens={"delete"}>
                <ConfirmDelete resourceName={"booking"} disable={isDeleting} onConfirm={()=>deletes({id},{
                  onSettled:navigate(-1)
                })}></ConfirmDelete>
                </ModalWindow.window>       
          </ModalWindow>
   <button onClick={()=>navigate('/bookings')}>Back</button>
   </>

}