import React, { useState } from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Register from "./Views/Register"
import NavigationMenu from './Components/nav/NavigationMenu';
import Postuler from './Components/Postuler';
import Footer from "./Components/Footer";
import Tst from "./Components/Tst"
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom"


function App() {
  // eslint-disable-next-line
  const [showLogin, setShowLogin] = useState(false);
 
  const [userRole, setUserRole] = useState(null);
  
  
  const role = [
    {role:0, name:'candidat'},
    {role:1, name:'gestionconcours'},
    {role:2, name:'recrutement'},
    {role:3, name:'admin'},
  ]




  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Tst />
        <NavigationMenu role={userRole} setRole={setUserRole}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <Postuler />
    </div>
  );
}

export default App;
