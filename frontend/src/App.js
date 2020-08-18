import React from 'react';
import './tailwind.css';
import HelloWorld from './Components/HelloWorld'
import Tst from './Components/tst'
import Concours from './Components/Concours'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom"


function App() {
  return (
    <div>
      <HelloWorld />
      <Tst />
      <Router>
        <Concours />
      </Router>

    </div>
  );
}

export default App;
