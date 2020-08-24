import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
import LoginSliderRight from "./LoginSliderRight";


function NavigationMenu() {
  return (

    <nav className="justify-around">
      <div className="block  sticky menu w-full md:flex ">
        <div className="">
          <span className="text-teal-500"> <Link to="/">
            {/* pour les icones https://heroicons.dev */}

            <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
        </div>
        <div className="mt-3">

          <div href="#responsive-header"
            className="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2 ">
            Thèmes
                </div>
          <div href="#responsive-header"
            className="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </div>
          <div href="#responsive-header"
            className="block sticky justify-center hover:text-white py-2 rounded hover:bg-blue-700 mr-2">
            Thèmes
                </div>

          <div className="float-left mb-4 md:float-right">
          <LoginSliderRight />
            <div className="block sticky justify-center py-2"><Link to="/Login" className="hover:text-white py-2 rounded hover:bg-blue-700 mr-2">Login</Link></div>
            <div className="block sticky justify-center py-2"> <Link to="/Register" className="hover:text-white4 py-2 rounded hover:bg-blue-700 mr-2">Register</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;


