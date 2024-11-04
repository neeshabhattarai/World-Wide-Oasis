
import supabase from "./Service";
import {supabaseUrl} from "./Service";

let  InsertUser=async(props)=>{
  // console.log(props);
const{editedId:id,...data}=props;
console.log(data.images);
  const hashImages=data.images?.startsWith?.(supabaseUrl);

 
    //all the / are replaced with -

let imageName=`${Math.random()}-${data.images.name}`.replaceAll('/','');
//https://qgphykystzazanuwhgvm.supabase.co/storage/v1/object/sign/ImageBucket/
const imagePath=hashImages?data.images:`${supabaseUrl}/storage/v1/object//sign/ImageBucket/${imageName}`;


let query= supabase
  .from('cabin');
  if(!id)
  query=await query.insert([
   {...data,images:imagePath}
  ]);
  if(id){
  query=await query.update({...data,images:imagePath})
  .eq('id', id);}
  console.log(query);
  const{data:dataa,error:errorAtUploading}=await query;
  
if(errorAtUploading)throw new Error("Error at uploading data");
if(hashImages)return data;
    const {data:datas, error } = await supabase.storage.from('ImageBucket').upload(imageName,data.images);
    if (error) {
   throw new Error("file cannot be uploaded");
    } else {
      // Handle success
    }


console.log(datas);
return dataa;
}

  export default InsertUser;
