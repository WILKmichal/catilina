import React from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Register from "./Views/Register"
import NavigationMenu from './Components/NavigationMenu';
import Postuler from './Components/Postuler';
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom"


function App() {
  return (
    <div className = "relative pb-10 min-h-screen">
      <Router>
        <NavigationMenu  />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </Router>
      <Postuler/>
      <Footer />
    </div>
  );
}

export default App;
