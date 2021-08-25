import { Switch, Route, Redirect } from "react-router";

import UsersList from "./Content/UsersList.js";

import UserProfile from "./Content/UserProfile.js";
import AddUserDetails from "./Content/AddUserDetails.js";

const UsersPanelContentRouter = () => {

    

    return (<div>

        <Switch>
             <Route exact path="/hrms/organization/users">
                <Redirect to="/hrms/organization/users/list" />
            </Route>

            <Route path="/hrms/organization/users/list">
                <UsersList />
            </Route>
            <Route path="/hrms/organization/users/add">
                <AddUserDetails />
            </Route>
            <Route path="/hrms/organization/users/:id">
                <UserProfile />
            </Route>
            
        </Switch>

    </div>);
}

export default UsersPanelContentRouter;