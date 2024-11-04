import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateUser } from "../../../services/Authentication";
import toast from "react-hot-toast";

export let useUpdate=()=>{
    let QueryClient=useQueryClient();
    let {mutate,isPending:isEditing}=useMutation({
        mutationFn:UpdateUser,
        onSuccess:()=>{
            // console.log(data);
            toast.success("Updated successfully");
            QueryClient.invalidateQueries({active:true});
        }
    }
    
    
)
    return {mutate,isEditing};
}