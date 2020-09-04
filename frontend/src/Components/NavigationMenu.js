import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from './img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";


function NavigationMenu() {
  return (

    <div className=" w-full fixed z-50 bg-teal-100 text-white p-1 md:pt-4 md:grid grid-cols-3 md:gap-4 md:items-center">
        <div>
        <a className="flex justify-center "><Link to="/"><img className="m-3 h-16 md:h-20 lg:h-32" src={logo2} alt="Maxiconcours"></img></Link></a>
        </div>
        <div class="flex justify-center">
          <a class="mb-4 text-teal-500 lg:w-full"><SearchBar /></a>
        </div>
        <div className="mb-4 flex justify-center">
         <LoginSliderRight />
        <RegisterSliderRight />
        </div>
    </div>
  );
}

export default NavigationMenu;


