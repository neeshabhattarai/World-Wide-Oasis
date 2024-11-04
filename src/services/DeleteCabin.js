import supabase from "../services/Service";
let DeleteCabin=async({id})=>{
   //eslint-disable-next-line
 await supabase
   .from('cabin')
   .delete()
   .eq('id',id).then(()=>console.log(id +'deletd')).catch((err)=>console.log(err));
  

}
export default DeleteCabin;