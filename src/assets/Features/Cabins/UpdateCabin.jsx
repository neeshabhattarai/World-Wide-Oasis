import {  useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import InsertUser from "../../../services/Cabin";

export let UpdateForm=()=>{
let queries=useQueryClient();
let {mutate:EditForm,isPending:isEditing}=useMutation({
    mutationFn:InsertUser,
    onSuccess:()=>{
    toast.success("Edit Successfully");
    queries.invalidateQueries({queryKey:["cabin"]});
    // reset();
    },
    onError:(err)=>toast.error(err.message),
})
return{EditForm,isEditing}
}