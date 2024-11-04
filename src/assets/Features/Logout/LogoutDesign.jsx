import { HiDocumentArrowDown } from "react-icons/hi2";
import useLogout from "./Logout";


 let LogoutA=()=>{
    let {Logout,isLoading}=useLogout();
    return<div>
        <button onClick={Logout} disabled={isLoading}><HiDocumentArrowDown/></button>
    </div>

}
export default LogoutA;