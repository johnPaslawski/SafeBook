import { Switch, Route, Redirect} from 'react-router-dom';
import LoginRequest from './Components/LoginRequest'
const UserRouter = () => {
    
    return(
        <div>
            <Switch>
                <Route exact path="/user/login-request">
                    <LoginRequest />
                </Route>
                <Route exact path="/logout">
                    <div>Hello</div>
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