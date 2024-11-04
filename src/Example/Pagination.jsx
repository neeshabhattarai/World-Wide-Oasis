import { createContext, useContext, useState } from "react";
const Cou=createContext();
 let Counter=({children})=>{
const [count,setcount]=useState(1);
const increment=()=>setcount(count=>count+1);
const decrement=()=>setcount(count=>count-1);
return <Cou.Provider value={{count,increment,decrement}}>{children}</Cou.Provider>;
}
let Label=({children})=>{
return <h1>{children}</h1>
}
let Increment=({children})=>{
    let {increment}=useContext(Cou);
    return <h1 onClick={()=>increment()}>{children}</h1>
    }
    let Decrement=({children})=>{
        let {decrement}=useContext(Cou);
        return <h1 onClick={()=>decrement()}>{children}</h1>
        }
    let Number=()=>{
    let{count}=useContext(Cou);
    console.log(count);
        return <h3>{count}</h3>
    }
Counter.Label=Label;
Counter.Increment=Increment;
Counter.Decrement=Decrement;
Counter.Number=Number;
export default Counter;
