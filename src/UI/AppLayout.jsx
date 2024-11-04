import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBars from "./SideBar"
import styled from "styled-components"
const Div=styled.div`

height: 100vh;
/* margin-left: 10rem; */



`;
const Maine={
    display:'grid',
   gridTemplateRows:"4rem auto",
   marginLeft:"21rem"
}

let AppLayout=()=>{
    return <Div>
         <SideBars/>
         <div style={Maine}>
    <Header/>
   
    <main >
        <Outlet/>
    </main>
    </div>
    </Div>
}
export default AppLayout;
