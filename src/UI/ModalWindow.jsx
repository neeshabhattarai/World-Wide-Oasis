import { useEffect, useRef } from "react";

export let WindowModels=({close,handle=true})=>{
    const ref=useRef();
useEffect(()=>{
    //eslint-disable-next-line
    function Handleclick(e){
        if(ref.current && !ref.current.contains(e.target)){
      // console.log("Clicked outside");
      // console.log(e.target);
      close();
      
    
    }

    }
     //eslint-disable-next-line
    document.addEventListener('click',Handleclick,handle);
   return ()=>document.removeEventListener('click',Handleclick,handle);
},[close]);
return {ref};
}