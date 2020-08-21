import React from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Register from "./Views/Register"
import Login from "./Views/Login"
import NavigationMenu from './Components/NavigationMenu';
import Footer from "./Components/Footer"
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
        <NavigationMenu className="fix-text-5xl" />
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
      <Footer />
     


    </div>
  );
}

export default App;
