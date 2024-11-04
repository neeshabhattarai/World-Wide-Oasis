import styled from "styled-components";
import LogoutA from "../assets/Features/Logout/LogoutDesign";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import Menu from "./Menus";
import { useVerified } from "../assets/Features/Authentication/Authentication";
import { DarkMode } from "./DarksMode";
let Div=styled.div`
gap: 20px;
display: flex;
height: 100%;
margin-right: 2rem;
justify-content: flex-end;
row-gap: 20px;
vertical-align: middle;
align-items: center;


`;

let Header=()=>{
    const{data:{user:{user_metadata}}}=useVerified();
    // console.log(user_metadata);
    let naviagate=useNavigate();
    return <Div>
   <div>
<span>{user_metadata?<img src={user_metadata?.Image}></img>:<HiOutlineUser/>}</span><span>{user_metadata?.Name||"Test"}</span>
   </div>
   <LogoutA/>
   <Menu>
    <Menu.Button onClick={()=>naviagate('account')}>
    <HiOutlineUserCircle style={{height:"inherit",width:"inherit"}}/></Menu.Button></Menu>
    <DarkMode/>
    </Div>
}
export default Header;