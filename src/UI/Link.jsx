//import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";

import styled from "styled-components";
const StyleBar=styled.ul`list-style:none;
display:flex;
row-gap: 20px;
flex-direction:column;
color:green;`;
let NavLinkr=styled(NavLink)`
display: flex;
column-gap:10px;
color: yellow;
&:hover{
    color:blue;
}
`;

let NavLinks=()=>{

    return<StyleBar>
        <li>
            <NavLinkr to='/dashboard'><AiOutlineHome></AiOutlineHome>Home</NavLinkr>
        </li>
        <li>
            <NavLinkr to='bookings'><HiOutlinePencilSquare/>Booking</NavLinkr>
        </li>
        <li>
            <NavLinkr to='cabins'><HiArchiveBoxArrowDown/>Cabin</NavLinkr>
        </li>
        <li>
            <NavLinkr to='users'><HiOutlineUserCircle/>Users</NavLinkr>
        </li>
        <li>
            <NavLinkr to='settings'><HiOutlineCog6Tooth/>Settings</NavLinkr>
        </li>
        <li>
            <NavLinkr to='account'><HiOutlineBriefcase/>Account</NavLinkr>
        </li>
        <li>
            <NavLinkr to='login'>Login</NavLinkr>
        </li>
    </StyleBar>

};
export default NavLinks;