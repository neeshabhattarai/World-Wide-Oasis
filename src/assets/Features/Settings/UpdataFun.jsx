import { useMutation } from "@tanstack/react-query"
import { UpdateSettings } from "../../../services/Setting"
import toast from "react-hot-toast"

export let UpdateFunction=()=>{
    let {mutate:updateFun,isPending:isUpdatinfg}=useMutation({
        mutationFn:UpdateSettings,
        onSuccess:()=>{
           return toast.success("Updated successfull");
        }
    })
    return{updateFun,isUpdatinfg}
}