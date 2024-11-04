import { SettingData } from "../assets/Features/Settings/Setting";
import { UpdateFunction } from "../assets/Features/Settings/UpdataFun";

import Rows from "./IterativeElement"
let Settings=()=>{
const{settingData:{maxBookingLength,minBookingLength,maxGuestPerBooking,breakFast}={},isLoading}=SettingData();
     //eslint-disable-next-line
 const{updateFun,isUpdatinfg}=UpdateFunction();
 if(isLoading)return;
    //eslint-disable-next-line
    let HandleButton=(e,type)=>{
       let {value}=e.target;
        updateFun({[type]:Number(value)});
    }
    return <div>
        <Rows label="breakfast">
            <input type="number" disabled={isUpdatinfg} id="breakfast" defaultValue={breakFast} onBlur={(e)=>HandleButton(e,"breakFast")}/>
        </Rows>
        <Rows label="minBookingLength">
            <input type="number" id="minBookingLength"  defaultValue={minBookingLength} onBlur={(e)=>HandleButton(e,"minBookingLength")}/>
        </Rows>
        <Rows label="maxBookingLength">
            <input type="number" id="maxBookingLength" defaultValue={maxBookingLength} onBlur={(e)=>HandleButton(e,"maxBookingLength")}/>
        </Rows>
        <Rows label="maxGuestPerBooking">
            <input type="number" id="maxGuestPerBooking" defaultValue={maxGuestPerBooking} onBlur={(e)=>HandleButton(e,"maxGuestPerBooking")}/>
        </Rows>
    </div>
}
export default Settings;