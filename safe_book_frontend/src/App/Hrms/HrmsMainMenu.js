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
                <div className="box_hmrsm">
                    <Link to="/hrms/organization">Organizacja</Link>
                </div>
                <div className="box_hmrsm">
                    <Link to="/hrms/webservice">Witryna</Link>
                </div>
                <div className="box_hmrsm">
                    <Link to="/hrms/shop">Sklep</Link>
                </div>
            </div>
        </div>


    );
}

export default HrmsMainMenu;