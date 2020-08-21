import React from 'react';
import { Link } from "react-router-dom"
import Icon from '@mdi/react'
import { mdiSchool } from '@mdi/js'

function NavigationMenu() {
  return (
    <div>
      
      <ul>
        <li>
          

        </li>
        <li>
          <Link to="/"><Icon path={mdiSchool}
            title="User Profile"
            size={8}
            // horizontal
            // vertical
            // rotate={180}
            color="red"
            // spin={4} 
            /></Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>

  );
}

export default NavigationMenu;