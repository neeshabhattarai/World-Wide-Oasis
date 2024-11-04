import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {useNavigate} from 'react-router-dom';
import { GetBooking, GetBookingsById, UpdateBooking } from "../../../services/Booking"
import { PageSIze } from "../../../Utils/Global";
import toast from "react-hot-toast";

export let UseBooking=(Props)=>{
   
    let client=useQueryClient();
    let {Parmas:Params,sorting,page}=Props;
    const {data:{data,count}={},error,isLoading}=useQuery({
        queryKey:["booking",Params.data,sorting.order,page],
        queryFn:()=>GetBooking(Props),
    });
    //eslint-disable-next-line
    let TotalSize=Math.ceil(Number(count)/PageSIze);
    if(page>=1){
    client.prefetchQuery({
        queryKey:["booking",Params.data,sorting.order,page-1],
        queryFn:()=>GetBooking({Params,sorting,page:page-1}), 
    })}
    if(page<TotalSize){
        client.prefetchQuery({
            queryKey:["booking",Params.data,sorting.order,page+1],
            queryFn:()=>GetBooking({Params,sorting,page:page+1}), 
        })}
   
    return{data,count,error,isLoading};
}
export let UseById=({id})=>{
    // console.log(id);
    const {data,isLoading,error}=useQuery({
queryKey:['booking',id],
queryFn:()=>GetBookingsById({id}),
retry:false,
    })

    if(error)throw new Error("error occurred in bookings by id");
    // console.log(data);
    return{data,isLoading}
}
export let useChecking=()=>{
    let navigate=useNavigate();
    let client=useQueryClient();
    let {mutate,isPending:isEditing}=useMutation({
        mutationFn:(props)=>UpdateBooking(props),
        onSuccess:(data)=>{
            toast.success(`${data.id} has been updataed`);
            client.invalidateQueries({active:true});
            navigate('/bookings');
        },
        onError:()=>{
            toast.error("Error occured in updating bookings");
        }
    })
    return {mutate,isEditing};
}
export let useCheckingOUt=()=>{
    let navigate=useNavigate();
    let client=useQueryClient();
    let {mutate:checkout,isPending:isCheckingOut}=useMutation({
        mutationFn:(props)=>UpdateBooking(props),
        onSuccess:(data)=>{
            toast.success(`${data.id} has been checked out`);
            client.invalidateQueries({active:true});
            navigate('/bookings');
        },
        onError:()=>{
            toast.error("Error occured in updating bookings");
        }
    })
    return {checkout,isCheckingOut};
}
export let useDeleting=()=>{
    
    let client=useQueryClient();
    let {mutate:deletes,isPending:isDeleting}=useMutation({
        mutationFn:({id})=>UpdateBooking({id}),
        onSuccess:(data)=>{
            toast.success(`${data.id} has been deleted`);
            client.invalidateQueries({queryKey:["booking"]});
           
        },
        onError:()=>{
            toast.error("Error occured in deleting bookings");
        }
    })
    return {isDeleting,deletes};
}