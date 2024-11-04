import { useMutation } from "@tanstack/react-query"
import { NewUser } from "../../../services/Authentication";
import toast from "react-hot-toast";

let useNewEntry=()=>{
    let {mutate:CreatingNewUser,isPending:isCreating}=useMutation({
        mutationFn:NewUser,
      
        onSuccess:(data)=>{
            console.log(data);
            toast.success("successfully created new user")
        }
    })
    return{CreatingNewUser,isCreating};
}
export default useNewEntry;