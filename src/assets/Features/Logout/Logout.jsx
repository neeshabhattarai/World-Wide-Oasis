import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LogoutUser } from "../../../services/Authentication"
import { useNavigate } from "react-router-dom";

let useLogout=()=>{
    let navigate=useNavigate();
    let QueryClient=useQueryClient();
    let {mutate:Logout,isPending:isLoading}=useMutation({
        mutationFn:LogoutUser,
        onSuccess:()=>{
            
            QueryClient.removeQueries();
            navigate('/login',{replace:true});
        }
    })
    return{Logout,isLoading};
}
export default useLogout;