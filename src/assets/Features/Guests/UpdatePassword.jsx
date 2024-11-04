import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePassword } from "../../../services/Authentication";
import toast from "react-hot-toast";

export let useUpdates=()=>{
    let QueryClient=useQueryClient();
    let {mutate,isPending:isEditing}=useMutation({
        mutationFn:updatePassword,
        onSuccess:()=>{
            // console.log(data);
            toast.success("Updated successfully");
            QueryClient.invalidateQueries({active:true});
        }
    }
    
    
)
    return {mutate,isEditing};
}