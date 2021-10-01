import Hrms from "./Hrms";
import { Link, Route, Switch } from "react-router-dom";

const HrmsMainMenu = () => {
    return (
        <div>
            <div className="backgroundBoxDiv"> <div className="backgroundBox"> </div></div>
            
            <div className="mainMenuTitle">
                <h1>HRMS</h1>
                <h4>v.1.0</h4>
            </div>
            <div className="mainMenuSubtitle">
                <h5>Serwisy:</h5>
            </div>
            <div className="mainMenuContainer">
            <Link to="/hrms/organization"><div className="box_hmrsm">
                    Organizacja
                </div></Link>
                <Link to="/hrms/webservice"><div className="box_hmrsm">
                    Witryna
                </div></Link>
                <Link to="/hrms/shop"><div className="box_hmrsm">
                    Sklep
                </div></Link>
            </div>
        </div>


    );
}

export default HrmsMainMenu;