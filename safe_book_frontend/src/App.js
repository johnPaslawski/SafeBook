import React, {Component, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import MainPage from './MainPage/MainPage';
import HRMS from './HRMS/HRMS.JS';
import Shop from './Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="mainPage">
            <MainPage />
          </Route>
          <Route path="hrms">
            <HRMS />
          </Route>
          <Route path="shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
