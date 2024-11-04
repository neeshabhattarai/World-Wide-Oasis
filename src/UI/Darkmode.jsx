import { createContext, useContext } from "react";
import  LocalStorage  from "./SetLocalStorage";

let DarkMode=createContext();
export let IsDarkMode=({children})=>{
let [value,setValue]=LocalStorage("isDarkMode",false);
let ToggleState=()=>setValue(value=>!value);
return <DarkMode.Provider value={{value,ToggleState}}>{children}</DarkMode.Provider>
}
export let GetContext=()=>{
    let context=useContext(DarkMode);
    if(context==undefined)throw new Error("Found Outside context");
    return context;
}
