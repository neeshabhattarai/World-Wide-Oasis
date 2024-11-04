
import MapElement from "./CabinElement";
//
import styled  from 'styled-components';

import { CabinData } from "../assets/Features/Cabins/Cabin";
//import  MOdal  from "./AddForm";
import Table from "./TableComponent";
import {Filter} from "./MapFilter";
import { useSearchParams } from "react-router-dom";
import MOdal from "./AddForm";

let NewElement =({data,render})=>{
    return data.map(render);
}

// const Div=styled.div`
// /* ${(prop)=>prop.as=='h2'&&css`
// font-size:0.3rem;`}; */
// display: grid;
// font-size:1.2rem;
// grid-template-columns:repeat(6,6rem);
// column-gap: 20px;
// margin:1rem;
// ;
// `;

//eslint-disable-next-line
// let Border=styled.div`border:2px solid black`;
export const H1=styled.h1`
    font-size:inherit;
`;
// Div.defaultProps='row';
let Users=()=>{
    //eslint-disable-next-line
   const{error,isLoading,data}=CabinData();
   let [val]=useSearchParams();
   if(isLoading)return;
   if(data.length==0)return<h1>No booking data</h1>

   
   let Discount=val.get('discount')||'all';
   let Datas;
   console.log(Discount);
   if(Discount=='all')  Datas=data;
  
   if(Discount=='with-discount') Datas=data.filter((val)=>val.discount>=10);
   console.log(Datas);
   if(Discount=='no-discount') Datas=data.filter((val)=>val.discount===0);
    let SearchFilter=val.get('sortBy')||'capacity-asc';
   let SearchDisplay=SearchFilter.split('-');
   let modifier=SearchDisplay[1]=='asc'?1:-1;
   
   let SearchDetails=Datas.sort((a,b)=>(a[SearchDisplay[0]]-b[SearchDisplay[0]])*modifier);
   console.log(SearchDetails);
    


 
    
    // let onError=(errors)=>{
    //     console.log(errors)
    // }
    if(error)return  new Error("error message");

// console.log(data);
// data.map((val)=>console.log(val.fullname));
    return<>
    <Filter/><Table column={"repeat(4,7rem) 10rem 1fr"}>
    <Table.Header >
    
    <H1>Image</H1>
    <H1>Capacity</H1>
    <H1>Discount</H1>
    <H1>TotalPrice</H1>
    <H1>Description</H1>
    <H1>Delete/Edit</H1>
    
    </Table.Header>
  
   <NewElement data={SearchDetails} render={(val)=>(<MapElement key={val.id} cabin={val}/>)}/>
        {/* {data.map((val)=>(<MapElement key={val.id} cabin={val}/>))} */}
        
   
   <MOdal/>
    </Table>
    </>
}
export { Users};