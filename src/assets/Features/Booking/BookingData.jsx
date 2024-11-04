import styled from "styled-components"




export let BookingData=({data={}})=>{
    let{Amount,Guest:{name},hasBreakFast,isPaid}=data;
   
console.log(data);
    let Row=styled.div`
    font-size:1rem;
    color:blue;
    padding:8px;
    font-family:inherit;`;

return <Row>
    <h1>Amount that is paid{Amount} by{name}</h1>
    <h1>{hasBreakFast?"They had Breakfast":""}</h1>
    <h1>{isPaid?"Amount has been received":""}</h1>
   

</Row>

}