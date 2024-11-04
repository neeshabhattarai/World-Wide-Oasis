import styled from "styled-components";
import Table from "./TableComponent";
 import { UseBooking } from "../assets/Features/Booking/CreateBooking";
import { IterativeBooking } from "../assets/Features/Booking/DisplayBooking";
import {FilterBooking} from "./MapFilter";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";



const NewElement=({datas,render})=>{
    return datas.map(render);
    }
let Booking=()=>{
    const H1=styled.h1`
    font-size:inherit;
`;
let[params]=useSearchParams();
let ParamsData=params.get('status')||'all';
let Parmas={
    field:"Status",
    data:ParamsData
}
// console.log(Parmas)
// let ParamsData=Params.get('status');
//sorting
let sortingProcess= params.get('sortBy')||'sorted-all';
let [field,order]=sortingProcess.split('-');
let sorting={field:field,order:order};
let [Page]=useSearchParams();
let page=!Page.get('page')?1:Number(Page.get('page'));
let {data,count,isLoading}=UseBooking({Parmas,sorting,page});
console.log(data);
if(isLoading)return;
console.log(data);




// if(isLoading)return;

    return <>
    <FilterBooking/>
    <Table column={"repeat(10rem,5)"}>
        <Table.Header>
            <H1>Cabin</H1>
            <H1>Guests</H1>
            <H1>Status</H1>
            <H1>Amount</H1>
            <H1></H1>
       </Table.Header> 
      <NewElement datas={data} render={(val)=><IterativeBooking key={val.id} val={val}/>} />
      <Table.Footer><Pagination count={count}/></Table.Footer>
    </Table>
    </>
}
export default Booking;