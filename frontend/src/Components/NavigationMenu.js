import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from './img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";


function NavigationMenu() {
  return (

    <div className="w-full fixed z-50">
      <header className="flex bg-teal-100">
        <nav className="flex justify-between w-full bg-teal-100 text-white p-1">
          <a><Link to="/"><img className="w-full mt-3 md:h-32" src={logo2} alt="Maxiconcours"></img></Link></a>
          <div className="items-center w-auto flex">
            <div class="md:flex hidden">
              <a class="block md:text-teal-500" href="/link"><SearchBar /></a>
            </div>
            <div className="flex text-md">
              <a className="m-2 bg-white text-teal-500 font-semibold border border-gray-100 rounded hover:border-teal-500 hover:bg-gray-100"><LoginSliderRight /></a>
              <a className="m-2 bg-teal-500 text-gray-100 font-semibold border border-teal-600 rounded hover:border-white hover:bg-teal-600"><RegisterSliderRight /></a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavigationMenu;


