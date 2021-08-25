import { Route, Switch } from "react-router-dom"
import OrgData from "./Content/OrgData"
import Planning from "./Content/Planning"
import Stats from "./Content/Stats"
import OrgDataEdit from "./Content/OrgDataEdit"

const AssociationContentRouter = () => {
    return ( 
    
    <div>
        <Switch>
            <Route path="/hrms/organization/association/orgdata">
                <OrgData />
            </Route> 
            <Route path="/hrms/organization/association/edit">
                <OrgDataEdit />
            </Route> 
            <Route path="/hrms/organization/association/stats">
                <Stats />
            </Route> 
            <Route path="/hrms/organization/association/planning">
                <Planning />
            </Route> 
        </Switch>
    </div> 
    
    );
}
 
export default AssociationContentRouter;