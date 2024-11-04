import { useForm } from "react-hook-form";
import Rows from "./IterativeElement";
import useNewEntry from "../assets/Features/Guests/NewEntry";

let Cabins=()=>{
   let {register,formState:{errors},handleSubmit,getValues,reset}=useForm();
   let{CreatingNewUser,isCreating}=useNewEntry();
   let Submit=(data)=>{
    let{Name,email,password}=data;
    CreatingNewUser({Name,email,password},{
        onSettled:()=>reset()
    }
    )
    
   }

    return <form onSubmit={handleSubmit(Submit)}>
    <Rows error={errors?.Name?.message} label={"Name"} key={"FirstName"}>
        <input type="text" id="Name" {...register('Name',{
            required:"This field must be filled",
            pattern:{
                value:new RegExp("[A-Z]{1}[a-z]*"),
                message:"First letter must be capitalized"
            }
        })}/> 
    </Rows>
    <Rows error={errors?.email?.message} label={"Email"} key={"Email"}>
        <input type="email" id="Email" {...register('email',{
            required:"This email field must be filled",
            
        })}/> 
    </Rows>
    <Rows error={errors?.password?.message} label={"Password"} key={"Password"}>
        <input type="password" id="password" {...register('password',{
            required:"This password field must be filled",
            
        })}/> 
    </Rows>
    <Rows error={errors?.confirmPassword?.message} label={"ConfirmPassword"} key={"ConfirmPassword"}>
        <input type="password" id="confirmPassword" {...register('confirmPassword',{
            required:"This confirmPassword field must be filled",
            validate:(value)=>value==getValues('password')||"Passwords must be same"
            
        })}/> 
    </Rows>
  <button disabled={isCreating}>{isCreating?'Creating':"submit"}</button>
    </form>
}
export default Cabins;