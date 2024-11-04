import { useNavigate, useParams } from "react-router-dom"
import { UseById, useChecking } from "./CreateBooking";

import { Div } from "./Bookings";
import Button from "../../../styles/Button";
import { useEffect, useState } from "react";
import { Checkbox } from "../../../UI/Checked";
import { SettingData } from "../Settings/Setting";

let Checkin=()=>{
    const [check,setCheck]=useState();
    let [addBreakFast,setBreakFast]=useState(false);
    let {id}=useParams();
    const navigate=useNavigate(); 

    let{mutate,isEditing}=useChecking();
    let{SettingsData:{breakFast}={},isLoading:isRendering}= SettingData();
    let {data={},isLoading}=UseById({id:Number(id)});    

     useEffect(()=>{
        setCheck(data.isPaid);
            },[data.Status]);  
    if(isLoading||isRendering)return;
    let {Status,Guest:{name,TotalGuest},TotalPrice}=data;
    let optionalBreakFast=Number(breakFast*TotalGuest);  
    
  
    const HandleClick=()=>{
      if(!check)return;
      if(addBreakFast){
        console.log(optionalBreakFast);
mutate({id,field:{Status:"confirmed",isPaid:true,hasBreakFast:true,extraPrice:optionalBreakFast,TotalPrice:Number(TotalPrice)+optionalBreakFast}})

        }else{
        mutate({id,field:{Status:"confirmed",isPaid:true}});}
    }

    return <><Div><h1>checkin #{id}</h1>
    <Button type="primary">{Status}</Button></Div>
    <button onClick={()=>navigate('/bookings')}>Back</button>
    <div><Checkbox id={id} value={check} Onchange={()=>setCheck(!check)} disabled={check}/>{name} agree the terms and paid the value 
    </div>
  {!data.hasBreakFast&&<><Checkbox id={"breakfast"} value={addBreakFast} Onchange={()=>{
    setBreakFast((addBreakFast)=>!addBreakFast);
  setCheck(false);}}
    // setCheck(!check);
 disabled={addBreakFast}/><span>{optionalBreakFast}add the breakfast</span></>}
    {check&&<Button type="primary" disabled={isEditing} onClick={HandleClick}>Check in</Button>}
    </>
}
export default Checkin;