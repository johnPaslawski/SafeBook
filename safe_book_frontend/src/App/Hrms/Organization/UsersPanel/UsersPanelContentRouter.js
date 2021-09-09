import { Switch, Route, Redirect } from "react-router";
import { useState } from "react";
import UsersList from "./Content/UsersList.js";

import UserProfile from "./Content/UserProfile.js";
import AddUserDetails from "./Content/AddUserDetails.js";

const UsersPanelContentRouter = () => {

    const [searchValue, setSearchValue] = useState("");
    
    const HandleChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
        
    }

    return (<div>

        <Switch>
             <Route exact path="/hrms/organization/users">
                <Redirect to="/hrms/organization/users/list" />
            </Route>

            <Route path="/hrms/organization/users/list">
                <UsersList searchValue={ searchValue } HandleChange={ HandleChange }/>
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