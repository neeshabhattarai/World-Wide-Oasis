import { useMutation, useQueryClient } from "@tanstack/react-query";
import InsertUser from "../../../services/Cabin";
import toast from "react-hot-toast";

export let CreateCabin=()=>{
let queries=useQueryClient();
let {mutate:creatingForm,isPending:isCreating}=useMutation({
    mutationFn:InsertUser,
    onSuccess:()=>{
    toast.success("Inserted successfully");
    queries.invalidateQueries({queryKey:["cabin"]});
    // reset();
    },
    onError:(err)=>toast.error(err.message),
})
return{isCreating,creatingForm};
}