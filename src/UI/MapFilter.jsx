import FilterData from "./Filter"
import Sorted from "./SortedOptions";

let Filter=()=>{
    return <>
    <FilterData name={"discount"} options={[{label:"no-discount",value:"No discount"},{label:"with-discount",value:"with discount"},{label:'all',value:"All"}
    ]}/>
    <Sorted options={[{label:"SortByCapacityAsc",value:"capacity-asc"},{label:"SortByCapacityDesc",value:"capacity-desc"},{label:"sortByDiscountDesc",value:"discount-desc"},{label:"sortByDiscountAsc",value:"discount-asc"}]}/>
    </>
}
let FilterBooking=()=>{
    return <>
    <FilterData name={"status"} options={[{label:"confirmed",value:"Confirmed"},{label:"unconfirmed",value:"Unconfirm"},{label:'all',value:"All"},{label:'checkout',value:"Checked Out"}
    ]}/>
    <Sorted options={[{label:"SortByAmount",value:"Amount-asc"},{label:"SortByAmountDesc",value:"Amount-desc"}]}/>
    </>
  
}
export  {Filter,FilterBooking};