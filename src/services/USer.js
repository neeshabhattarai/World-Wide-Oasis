import supabase from "./Service";
let  GetUSer=async ()=>{
 let { data: user, error } = await supabase
    .from('cabin')
    .select('*');
    //eslint-disable-next-line
  if(error)  throw new Error("error at user");
//   console.log(user);
  return user;
}
export default GetUSer;