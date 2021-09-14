import { BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import Hrms from './Hrms/Hrms';
import Shop from './Shop/Shop';
import UserRouter from './User/UserRouter';

import './App.css'

function App() {
  //console.warn = () => {};  Hide yellow warnings
  // const [userLogged, setUserLogged] = useState(false);
  // const [userId, setUserId] = useState(null);

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main">
            <MainPage/>
          </Route>
          <Route exact path="/hrms">
            <Hrms/>
          </Route>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route path="/user">
            <UserRouter/>
          </Route>
          <Route path="/home/signin"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
