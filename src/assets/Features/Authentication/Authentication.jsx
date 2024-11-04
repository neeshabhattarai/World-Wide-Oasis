import { useQuery } from "@tanstack/react-query"
import { AuthenticateUser } from "../../../services/Authentication"

export let useVerified=()=>{
    let {data,isLoading}=useQuery({
        queryKey:['user'],
        queryFn:AuthenticateUser,
    })
    return{isLoading,data,isAuthenticate:data?.user?.role=='authenticated'};
}