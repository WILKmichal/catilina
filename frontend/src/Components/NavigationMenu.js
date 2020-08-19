import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';

function NavigationMenu() {
  return (
    <div>
      <ul>
        <li>
          

        </li>
        <li>
          <Link to="/">

            {/* pour les icones https://heroicons.dev */}
            <SchoolIcon style={{fontSize: '5vw'}}></SchoolIcon>
            </Link>
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