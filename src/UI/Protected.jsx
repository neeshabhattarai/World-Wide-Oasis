import { useNavigate } from "react-router-dom";
import { useVerified } from "../assets/Features/Authentication/Authentication"
import { useEffect } from "react";

export let ProtectedRoute=({children})=>{
    let navigate=useNavigate();
    let{isLoading,isAuthenticate}=useVerified();
    // console.log(data);
    useEffect(()=>{
        if(!isAuthenticate&&!isLoading)navigate('/login');
    },[isLoading,isAuthenticate,navigate]);
    if(isLoading)return ;
 
    return children;
   
}