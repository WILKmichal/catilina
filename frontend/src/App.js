import React from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Register from "./Views/Register"
import Login from "./Views/Login"
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
            <Home/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Router></Router>


    </div>
  );
}

export default App;
