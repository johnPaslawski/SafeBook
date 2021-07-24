import { BrowserRouter as Router} from 'react-router-dom';
import { useState } from 'react';

import MainPageRouter from './MainPage/MainPageRouter';
import HrmsRouter from './Hrms/HrmsRouter';
import ShopRouter from './Shop/ShopRouter';
import UserRouter from './User/UserRouter';

function App() {

  const [userLogged, setUserLogged] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div>
      <Router>
          <MainPageRouter userId={userId}/>
          <HrmsRouter userId={userId}/>
          <ShopRouter userId={userId}/>
          <UserRouter setUserId={setUserId} setUserLogged={setUserLogged}/>
      </Router>
    </div>
  );
}

export default App;
