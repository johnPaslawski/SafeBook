import { Router, Route, Switch } from "react-router-dom"
import UsersPanel from './UsersPanel/UsersPanel';
import AssociationPanel from "./AssociationPanel/AssociationPanel";
import DocumentsPanel from "./DocumentsPanel/DocumentsPanel";
import ActionsPanel from "./ActionsPanel/ActionsPanel";


const OrganizationContentRouter = () => {
    return ( 
        <div>
            <Switch>
                <Route path="/hrms/organization/association">
                <AssociationPanel />
                </Route>
                <Route path="/hrms/organization/users">
                <UsersPanel />
                </Route>
                <Route path="/hrms/organization/documents">
                <DocumentsPanel />
                </Route>
                <Route path="/hrms/organization/actions">
                <ActionsPanel />
                </Route>
            </Switch>
        </div>
     );
}
 
export default OrganizationContentRouter;