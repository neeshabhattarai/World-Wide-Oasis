import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Login } from "../../../services/Authentication"
import {useNavigate} from 'react-router-dom';
import { toast } from "react-hot-toast";

export let useLogin=()=>{
    let queryClient=useQueryClient();
    let navigate=useNavigate();
    let {mutate:Logins,isLoading}=useMutation({
        mutationFn:({data})=>Login({data},
    
        ),
        onSuccess:(data)=>{
            toast.success("Successfully logged")
            queryClient.setQueryData(["user"],data);
          navigate('/dashboard');
         
        },
        onError:()=>{
         toast.error("Invalid Credentials");
            navigate('/login');
        }
    })
    return{Logins,isLoading}
}