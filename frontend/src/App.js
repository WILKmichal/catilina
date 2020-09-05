import React, { useState } from 'react';
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
  // eslint-disable-next-line
  const [showLogin, setShowLogin] = useState(false);
  // eslint-disable-next-line
  const [connected, setConnected] = useState("");


  return (
    <div className="relative pb-10 min-h-screen">
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
        <Footer />
      </Router>
      <Postuler/>
    </div>
  );
}

export default App;
