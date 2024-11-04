import {useSearchParams} from 'react-router-dom';
    //eslint-disable-next-line
let FilterData=({options,name})=>{
    
    //eslint-disable-next-line
    let [params,setParams]=useSearchParams();
    function HandleClick(e){
       
        setParams({[name]:e.target.value});
    }
    return options.map((val)=>(<button onClick={HandleClick} value={val.label} key={val.label}>{val.value}</button>))
    
}
export default FilterData;