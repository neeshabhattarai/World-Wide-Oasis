// import { useState } from "react";
// import { useState } from "react";
//import { CreateForm } from "./CreateForm";
// import { Users } from "./Cabins";
import { CreateForm } from "./CreateForm";
import ModalWindow from "./Modal";


//import { createPortal } from "react-dom";

 let MOdal=()=>{
return<><ModalWindow>
    <ModalWindow.open opens={"cabin"} ><button>Add the form</button></ModalWindow.open>
    <ModalWindow.window opens={"cabin"}><CreateForm/></ModalWindow.window>
    {/* <ModalWindow.open opens={"table"} ><button>Show Table</button></ModalWindow.open>
    <ModalWindow.window opens={"table"}><Users/></ModalWindow.window> */}
</ModalWindow></>
    // const[click,setClick]=useState(false);
    // return<> <button onClick={()=>setClick(!click)}>Add the newForm</button>
    // {click&&<CreateForm onClose={()=>setClick(false)}/>}</>
    
}
export default MOdal;