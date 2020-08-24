import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';

function NavigationMenu() {
  return (

    <nav class="justify-around">
      <div class="block  sticky menu w-full md:flex ">
        <div class="">
          <span class="text-teal-500"> <Link to="/">
            {/* pour les icones https://heroicons.dev */}

            <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
        </div>
        <div class="mt-3">

          <div href="#responsive-header"
            class="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2 ">
            Thèmes
                </div>
          <div href="#responsive-header"
            class="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </div>
          <div href="#responsive-header"
            class="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </div>

          <div class="float-left mb-4 md:float-right">
            <div class="block sticky justify-center py-2"><Link to="/Login" class="hover:text-white py-2 rounded hover:bg-blue-700 mr-2">Login</Link></div>
            <div class="block sticky justify-center py-2"> <Link to="/Register" class="hover:text-white4 py-2 rounded hover:bg-blue-700 mr-2">Register</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;


