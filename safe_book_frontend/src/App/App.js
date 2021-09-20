import { BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';
import { useState } from 'react';

import MainPage from './MainPage/MainPage';
import Hrms from './Hrms/Hrms';
import Shop from './Shop/Shop';
//import UserRouter from './User/UserRouter';
import SignIn from '../Auth/SignIn';
import { AuthProvider } from '../Auth/AuthContext';

import './App.css'

function App() {
  //console.warn = () => {};  Hide yellow warnings
  const [userLogged, setUserLogged] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div className='app'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <Route path="/main">
              <MainPage userId={userId} userLogged={userLogged}/>
            </Route>
            <Route path="/hrms">
              <Hrms userId={userId}/>
            </Route>
            <Route path="/shop">
              <Shop userId={userId}/>
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
