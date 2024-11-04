 import { PageSIze } from "../Utils/Global";
import supabase from "./Service"

export let GetBooking=async(Props)=>{
   
  let {Parmas:Params,sorting,page}=Props;
  // console.log(Props);
 
   let query= supabase.from('booking').select("*,cabin(TotalPrice),Guest(name)",{count:"exact"});
 
   if(Params.data!='all')query= query.eq(Params.field,Params.data);
   if(sorting.order!='all')query=query.order(sorting.field,{ascending:sorting.order=='asc'});
   if(page){
    const to=(page-1)*PageSIze;
    const from=page*PageSIze-1;
    query=query.range(to,from)}
  
   const{data,count,error}=await query;
    // console.log(error);
    if(error) throw new Error("error at booking data");
    console.log(data);
    return {data,count};
 }
 export let GetBookingsById=async({id})=>{

  const{data,error}=await supabase.from('booking').select('*,Guest:Guest(*)').single().eq("id",id)
  if(error)throw new Error("Id loaded failed");
  console.log(data);
  return data;
 }
 export let UpdateBooking=async(props)=>{
//  console.log(props)
let query=supabase.from('booking');
  const{id,field,}=props;
  if(field){
query=query.update(field).eq('id',Number(id)).select().single();
const{data,error}=await query;
return {data,error};
  }
  query=query.delete().eq('id',id).select().single();
  const {error,data}=await query;
return {error,data};
 }
 
