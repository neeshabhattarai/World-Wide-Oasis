import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteCabin from "../services/DeleteCabin";
import toast from "react-hot-toast";
import {  HiClipboard, HiEllipsisVertical, HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
//import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";


import styled from "styled-components";


import { CreateForm } from "./CreateForm";
import { CreateCabin } from "../assets/Features/Cabins/CreateCabin";
import ModalWindow from "./Modal";
import ConfirmDelete from "./ConfirmDelte";
import Table from "./TableComponent";
import Menu from "./Menus";


let MapElement=({cabin})=>{
    let {creatingForm,isCreating}=CreateCabin();
 
    let HandleClick=({cabin:cabins})=>{
        let {description:fullnames,id,...cabin}=cabins;
        console.log(id);
    
       creatingForm({
        description:`copy of ${fullnames}`,
        ...cabin
       });
        

    }
    let H2=styled.p`font-size:1rem;`;
    // console.log(cabin);
   
    let{description,id,images,capacity,discount,TotalPrice}=cabin;
    let queries=useQueryClient();
    let {mutate,isPending}=useMutation({
        mutationFn:DeleteCabin,
        onSuccess:()=>{
           toast.success('successfully deleted');
            queries.invalidateQueries({ queryKey:['cabin']})
        },
        onError:(err)=>toast.error(err.message),
    });
    return<Table.Body> 
    <img src={images} alt="images" height={"50px"} width={"50px"}/>
    <H2>{capacity}</H2>
    <H2>{discount?discount:<span>&macr;</span>}</H2>
    <H2>{TotalPrice?TotalPrice:<span>&macr;</span>}</H2>
    <H2>{description}</H2>

    {/* <H2>{id}</H2> */}
    {/* <h1>{national}</h1> */}
   
    {/* <Button size={"medium"} onClick={()=>mutate({id})} disabled={isPending}><HiOutlineTrash/></Button> */}
    <ModalWindow>
    <Menu>
    <Menu.Toggle opens={id}><HiEllipsisVertical/></Menu.Toggle>
     
            <Menu.List opens={id}>
            <ModalWindow.open opens={"delete"} disabled={isPending}><Menu.Button icon={<HiOutlineTrash/>}>Delete</Menu.Button></ModalWindow.open>
            <ModalWindow.open opens={"edit"} disabled={isCreating}><Menu.Button><HiPencilSquare/><span>Edit</span></Menu.Button></ModalWindow.open>
            
    <Menu.Button onClick={()=>HandleClick({cabin})}><HiClipboard/><span>Copy</span></Menu.Button>
    {/* <ModalWindow.open open={"copy"}><Menu.Button><HiClipboard/><span>Copy</span></Menu.Button></ModalWindow.open> */}
        </Menu.List>
        <ModalWindow.window opens={"delete"}><ConfirmDelete onConfirm={()=>mutate({id})}/></ModalWindow.window>
   
    {/* <Button size={"medium"} onClick={()=>SetEdit(!edit)} disabled={isPending}><HiOutlinePencilSquare/></Button> */}
    <ModalWindow.window opens={"edit"}><CreateForm cabin={cabin}/></ModalWindow.window>
    {/* <ModalWindow.window opens={"copy"}><CreateForm cabin={cabin}/></ModalWindow.window> */}

      </Menu>
</ModalWindow>
    {/* {edit&&<CreateForm cabin={cabin}/>} */}
    
      
    
  

    
    </Table.Body>
}
export default MapElement; 