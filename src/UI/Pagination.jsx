import styled from "styled-components";
import { PageSIze } from "../Utils/Global";
import { useSearchParams } from "react-router-dom";

let PageSize=PageSIze;
let PaginationStyled=styled.div`
display: flex;
gap: 10px;
`;
let Pagination=({count})=>{
    
    const[page,setCurrent]=useSearchParams();
    
    const current=!page.get('page')?1:Number(page.get('page'));
    const TotalPage=Number(Math.ceil(Number(count)/PageSize));
    let Next=()=>{
       let next=current==TotalPage?Number(current):Number(current+1);
       page.set('page',next);
       setCurrent(page);
    }
    let Previous=()=>{
        let next=current==1?Number(current):Number(current-1);
        page.set('page',next);
        setCurrent(page);
    }
    return<PaginationStyled>
        <div>showing{(current-1)*PageSIze+1}to{current==TotalPage?count:current*PageSIze} of {count}</div>
    <button onClick={()=>Previous()} disabled={current==1}>Previous</button>
    <button onClick={()=>Next()} disabled={current==TotalPage}>Next</button>
    </PaginationStyled>
}
export default Pagination;