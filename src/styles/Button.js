import {styled,css} from "styled-components";
const sizes={
    small:css`
    color: purple;
    
    `,
    medium:css`
    color: yellow;
    `

    
};
const variant={
    primary:css`
    background-color:blue;
    color:white`,
    secondary:css`
    background-color:white;
    color:blue;`
};
let Button=styled.button`padding:1px;
height: auto;
font-size: 1.3rem;
text-align:center;
background-color: blue;
font-family: Verdana, Geneva, Tahoma, sans-serif;
border-radius: 5px;
margin-right: 20px;
padding:6px;
vertical-align: middle;
text-align: center;

${(props)=>sizes[props.size]};
${(props)=>variant[props.variant]};

`;
export default Button;