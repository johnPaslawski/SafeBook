import { Switch, Route, Redirect } from "react-router";

import UsersList from "./Content/UsersList.js";
import AddUser from "./Content/AddUser.js";

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
                <AddUser />
            </Route>
        </Switch>

    </div>);
}

export default UsersPanelContentRouter;