import { BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';
import { useState } from 'react';

import MainPage from './MainPage/MainPage';
import Hrms from './Hrms/Hrms';
import Shop from './Shop/Shop';
import UserRouter from './User/UserRouter';

import './App.css'

function App() {
  //console.warn = () => {};  Hide yellow warnings
  const [userLogged, setUserLogged] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div className='app' style={{backgroundImage: "url(/public/BackgroundMusiNotes.jpg"}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main">
            <MainPage userId={userId} userLogged={userLogged}/>
          </Route>
          <Route exact path="/hrms">
            <Hrms userId={userId}/>
          </Route>
          <Route exact path="/shop">
            <Shop userId={userId}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
