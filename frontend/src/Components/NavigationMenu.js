import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';

function NavigationMenu() {
  return (


    <nav class="flex items-center justify-between bg-pink py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div class="flex justify-between">
        <div class="flex items-center flex-shrink">
          <span class="fill-current text-teal-500 font-semibold text-xl"> <Link to="/">
            {/* pour les icones https://heroicons.dev */}
            <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
        </div>
        <div class="block sm:hidden justify-end">
          <button
            id="nav" class=" px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
            <svg class="  fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="hidden sm:block menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div class="text-md font-bold text-blue-700 lg:flex-grow">

          <a href="#responsive-header"
            class="mt-4 inline-block  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </a>
          <a href="#responsive-header"
            class="mt-4 inline-block  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </a>
          <a href="#responsive-header"
            class="mt-4 inline-block  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </a>

         <a><Link to="/Login" class=" float-right inline-block mt-4  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Login</Link></a>
         <a> <Link to="/Register" class=" float-right inline-block mt-4  hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Register</Link></a>
        </div>
       {/* <div class="flex justify-end">
          <Link to="/Login" class="mt-4 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Login</Link>
          <Link to="/Register" class="mt-4  lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">Register</Link>
        </div> */}
      </div>

    </nav>
  );
}

export default NavigationMenu;


