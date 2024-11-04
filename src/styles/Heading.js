import styled, { css } from "styled-components";

const test=`text-align:center;
`;
const Heading=styled.h1`
font-family:'verdana',sans-serif;
${test};
${(props)=>props.as=='h2'&&css`;
text-align:center;
margin: 0px;
text-shadow:3px 3px 4px #00ff64`};
${(props)=>props.as=='h3'&&css`font-size:0.7rem;
color:yellow;
text-align:center;
margin:0px;`};
color:red;
font-size:2rem;

`
export default Heading;