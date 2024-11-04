import supabase from "../services/Service";
import {toast} from 'react-hot-toast';
export let GetSetting=async()=>{
    
const { data, error } = await supabase
.from('Settings')
.select('*').single();
if(error) throw new Error("Setting data are not rendered correctly");
// console.log(data);
return data;
}
export let UpdateSettings=async(val)=>{

const { data, error } = await supabase
.from('Settings')
.update(val)
.eq('id', 1)
.select();
if(error) return toast.error("setting update failed");
return data;
}