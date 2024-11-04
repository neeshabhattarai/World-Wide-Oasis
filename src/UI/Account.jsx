import { useState } from "react";
import EditUse from "../assets/Features/Guests/EditUser";
import EditPassword from "./EditPassword";

let Accounts=()=>{
    const[second,setSecond]=useState("");
    const[click,setClick]=useState(false);
    return <div>
        <div onClick={()=>setClick((click)=>!click)}>Updata userame</div>
        {click&&<EditUse/>}
        <div onClick={()=>setSecond((second)=>!second)}>Updata password</div>
        {second&&<EditPassword/>}


    </div>
}
export default Accounts;