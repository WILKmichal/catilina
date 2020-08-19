import React from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Register from "./Views/Register"
import Tst from './Components/tst'
import Concours from './Components/Concours'
import NavigationMenu from './Components/NavigationMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
        <Tst />
        <Concours />
      </Router>


    </div>
  );
}

export default App;
