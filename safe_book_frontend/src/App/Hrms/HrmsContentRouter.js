import { Redirect, Route, Switch, Router } from "react-router-dom";
import Hrms from "./Hrms";
import HrmsMainMenu from "./HrmsMainMenu";
import Organization from "./Organization/Organization";
import "./Hrms.css";
import App from "../App";
import Footer from "../MainPage/Footer/Footer";

const HrmsContentRouter = () => {
    return ( 
        <div>
        <Switch>
            <Route exact path="/hrms">
            <Redirect to="/hrms/mainmenu"></Redirect>
            </Route>
            <Route exact path="/hrms/mainmenu">
                <HrmsMainMenu />
            </Route>

            <Route path="/hrms/organization">
                <Organization />
            </Route>
            <Route exact path="/hrms/webservice">
                
            </Route>
            <Route exact path="/hrms/shop">
                
            </Route>
        </Switch>

        
        </div>
        
     );
}
 
export default HrmsContentRouter;