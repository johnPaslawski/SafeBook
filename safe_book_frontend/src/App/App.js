import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
    <div className='app'>
      <Router>
          <MainPage userId={userId} userLogged={userLogged}/>
          <Hrms userId={userId}/>
          <Shop userId={userId}/>
          <UserRouter setUserId={setUserId} setUserLogged={setUserLogged}/>
      </Router>
    </div>
  );
}

export default App;
