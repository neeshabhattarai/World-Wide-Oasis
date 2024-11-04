import { useSearchParams } from "react-router-dom";

let Sorted=({options})=>{
    let [search,setParams]=useSearchParams();
    let ValuesParams=search.get('sortBy')||'';
    // co
    function HandleClick(e){
        search.set("sortBy",e.target.value);
        setParams(search);
    }
    return <select onChange={HandleClick} value={ValuesParams}>
    {options.map((val)=>(<option value={val.value} key={val.value}>{val.label}</option>))}</select>
}
export default Sorted;