import { useEffect, useState } from "react";

 let LocalStorage=(key,intialState)=>{
const [value,setValue]=useState(()=>{
    const loccal=localStorage.getItem(key);
    return loccal?JSON.parse(loccal):intialState;
})
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
})

return [value,setValue];
}
export default LocalStorage;