import styled, { css } from "styled-components";
const Row=styled.div`
${(props)=>props.as=='vertical'&&css`display:flex;
flex-direction: column;
`};
${(props)=>props.as=='horizontal'&&css`display:flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`

};`
export default Row;