import styled from "styled-components";
import NavLinks from "./Link";
let Logo=styled.img` 
height:10rem;
width:10rem;
border-radius:50%;
`;
let SideBar=styled.h1`
width:20rem ;
height: 100%;
text-align:center;

background-color: green;
position: fixed;
z-index: 10;
`;

let SideBars=()=>{
    return <SideBar>
        <div>
        <Logo src='../../../public/Image/img.jpeg'></Logo>
        <h1>Wild Oasis</h1>
        </div>
        <NavLinks/>
    {/* <Logo src=''/> */}
    
    </SideBar>
}
export default SideBars;