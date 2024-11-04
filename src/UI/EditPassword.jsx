import { useForm } from "react-hook-form"

import Rows from "./IterativeElement";
import { useVerified } from "../assets/Features/Authentication/Authentication";
import { useUpdates } from "../assets/Features/Guests/UpdatePassword";

let EditPassword=()=>{
 

    let {register,formState:{errors},getValues,handleSubmit}=useForm();
    let {data:{user:{email}}}=useVerified();
    let {mutate:UpadeName,isEditing}=useUpdates();
    let Submit=(data)=>{
        UpadeName({password:data.password,email});
            }
    return<>
    <Rows label={"Password"} error={errors?.password?.message}>
    <input type="password" {...register('password',{
        required:"Password must be filled",
    })}/>
    </Rows>
    <Rows label={"ConfirmPassword"} error={errors?.confirmPassword?.message}>
    <input type="password" {...register('confirmPassword',{
        required:"retype your password",
        validate:(value)=>value==getValues('password')||"Password must be same"
    })}/>
    </Rows>
    <button onClick={handleSubmit(Submit) } disabled={isEditing}>Submit</button>
    </>
}
export default EditPassword;