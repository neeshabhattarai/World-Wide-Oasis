import { useState } from "react";
import { useVerified } from "../../../assets/Features/Authentication/Authentication";
import Rows from "../../../UI/IterativeElement";
import { useUpdate } from "./UpdataHook";
let EditUse=()=>{
    const[Name,setName]=useState("");

    const[Image,setImage]=useState("");
   let {data:{user:{email,user_metadata}}}=useVerified();
   let {mutate:UpadeName,isEditing}=useUpdate();
   let HandleSubmit=()=>{
 
    if(!Name)return;
    console.log(Image)
    UpadeName({email,Name,Image});
    setName("");


   }
 
    return <>
    <Rows label={"Email"} >
        <input type="text" defaultValue={email} disabled={true}></input>
    </Rows><br/>
    <Rows label={"Name"} >
        <input type="text" defaultValue={user_metadata?.Name||Name} onChange={(e)=>setName(e.target.value)} ></input>
    </Rows><br/>
    <Rows label={"Avatar"} >
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} ></input>
    </Rows><br/>
    <button onClick={(e)=>HandleSubmit({e})} disabled={isEditing}>Submit</button>
    </>
}
export default EditUse