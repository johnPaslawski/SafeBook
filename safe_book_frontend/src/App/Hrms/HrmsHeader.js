import "./Hrms.css";
import { Link } from "react-router-dom";

const HrmsHeader = () => {
    return ( 
        <div><div className="dark_top_panel">
        </div>
        
          <Link to="/" className="logo-box">
            <img className="logo" src={process.env.PUBLIC_URL + '/partyturaLogoBlack.jpg'} />
          </Link></div>
     );
}
 
export default HrmsHeader;