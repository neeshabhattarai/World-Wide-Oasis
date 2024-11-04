import { useQuery } from "@tanstack/react-query"
import { GetSetting } from "../../../services/Setting";


export let SettingData=()=>{
    let {data:settingData,isLoading,error}=useQuery({
        queryKey:["settings"],
        queryFn:GetSetting,
       
    })
console.log(settingData)
    return{settingData,isLoading,error};
}