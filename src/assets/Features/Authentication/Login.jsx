import {useForm} from 'react-hook-form';
import { useLogin } from './CreateLogin';

let LoginForm=()=>{
    //eslint-disable-next-line
let {register,handleSubmit,formState:{errors},reset}=useForm();
let {Logins,isLoading}=useLogin()

let Submit=(data)=>{
// console.log(errors);
Logins({data});
reset();
}
return<>
<label>email</label>
<input type='text' id='email' {...register('email',{
    required:"enter ur email",
    
})}></input>
<label>Password</label>
<input type='text' id='password' {...register('password',{
    required:true,
})}></input>
<button onClick={handleSubmit(Submit)} disabled={isLoading}>submit</button>

</>
}
export default LoginForm;