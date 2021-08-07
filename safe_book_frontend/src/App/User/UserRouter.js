import { Switch, Route} from 'react-router-dom';

const UserRouter = ({setUserId, setUserLogged}) => {
    return(
        <div>
            <Switch>
                <Route exact path="/login">
                    
                </Route>
                <Route exact path="/logout">
                    
                </Route>
                <Route exact path="/register">
                    
                </Route>
                <Route exact path="/user/:id/user-page">
                    
                </Route>
                <Route exact path="/user/:id/admin-page">

                </Route>
                <Route exact path="/user/:id/manager-page">

                </Route>
                <Route exact path="/user/:id/member-page">
                    
                </Route>
            </Switch>
        </div>
    );
};

export default UserRouter;