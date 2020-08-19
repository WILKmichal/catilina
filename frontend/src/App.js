import React from 'react';
import './tailwind.css';
import HelloWorld from './Components/HelloWorld'
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
        <HelloWorld />
        <Tst />
        <Concours />
        <NavigationMenu />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
