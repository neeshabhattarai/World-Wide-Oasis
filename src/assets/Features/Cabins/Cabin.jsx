import { useQuery } from "@tanstack/react-query"
import GetUSer from "../../../services/USer"

export let CabinData=()=>{
    const {error,data,isLoading}= useQuery({
    queryKey:['cabin'],
    queryFn:GetUSer,
})
return {error,data,isLoading}
}