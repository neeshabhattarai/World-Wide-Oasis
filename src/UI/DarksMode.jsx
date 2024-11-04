import { HiMoon, HiSun } from "react-icons/hi2";
import { GetContext } from "./Darkmode"
import { useEffect } from "react";

export let DarkMode=()=>{
let{value,ToggleState}=GetContext();
useEffect(()=>{
    if(value){
        document.body.style.backgroundColor="#220404"
    }else{
         document.body.style.backgroundColor="#ecefeb"
    }
},[value])
// console.log(value);
return<button onClick={()=>ToggleState()}> {value?<HiMoon/>:<HiSun/>}</button>;
}