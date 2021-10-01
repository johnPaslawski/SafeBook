import { BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import Hrms from './Hrms/Hrms';
import Shop from './Shop/Shop';
//import UserRouter from './User/UserRouter';
import SignIn from '../Auth/SignIn';
import { AuthProvider } from '../Auth/AuthContext';

import './App.css'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="/main">
              <MainPage/>
            </Route>
            <Route path="/hrms">
              <Hrms/>
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route>
              <SignIn/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
