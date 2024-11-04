import { createContext, useContext } from "react"
import styled, { css } from "styled-components";
let Tables=styled.div`border:2px solid black`;

let commonComponent=styled.div`

display:grid;
grid-auto-flow: column;

align-items: center;
grid-template-columns:${(props)=>props.column};
${(props)=>props.role=='body'&&css`
font-size: 1rem;
`};
${(props)=>props.role=='header'&&css`
font-size: 1.4rem ;
`};
`;
let StyledComponent=styled(commonComponent)`
column-gap: 20px;
margin:1rem;
font-size:1.2rem;
font-family:monospace, Verdana, Geneva, Tahoma, sans-serif;


`;
let TableContext=createContext();
let Table=({children,column})=>{
return <TableContext.Provider value={{column}}><Tables>{children}</Tables></TableContext.Provider>
}
let Header=({children})=>{
    let {column}=useContext(TableContext);
    return <StyledComponent role="header" column={column} >{children}</StyledComponent>
}
let Body=({children})=>{
    let {column}=useContext(TableContext);
    return <StyledComponent role="body" column={column} >{children}</StyledComponent>
}
let Footer=({children})=>{
    return <StyledComponent>{children}</StyledComponent>
}
Table.Header=Header;
Table.Body=Body;
Table.Footer=Footer;

export default Table; 