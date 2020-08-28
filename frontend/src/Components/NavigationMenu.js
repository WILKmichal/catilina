import React from 'react';
import { Link } from "react-router-dom"
import MenuSliderRight from "./MenuSliderRight";
import SearchBar from "./SearchBar";
import logo from './img/LogoMaxiconcours.png';
import logo2 from './img/LogoMaxiconcourHibou.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";


function NavigationMenu() {
  return (

    <div className="w-full">
      <header className="flex bg-teal-100">
        <nav className="flex justify-between w-full bg-teal-100 text-white p-1">
          <a><Link to="/"><img src={logo2} alt="Maxiconcours"></img></Link></a>
          <div className="items-center w-auto flex">
            <div class="md:flex hidden">
              <a class="block md:text-teal-500 mr-4" href="/link"><SearchBar /></a>
            </div>
            <div className="flex text-md">
              <a className="m-2 h-1/4 bg-white text-teal-500 font-semibold border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"><LoginSliderRight/></a>
              <a className="m-2 h-1/5  bg-teal-500 text-gray-100 font-semibold border border-teal-600 rounded hover:border-transparent hover:bg-teal-600"><RegisterSliderRight/></a>
            </div>
          </div>
        </nav>
      </header>
      
       
    </div>





    // return (
    //   <div className="grid grid-cols-12 gap-4 w-full bg-teal-100 items-center">
    //     <div className="block fixed col-start-1 col-end-2 text-center px-4 py-2 m-2">
    //       <span className="text-teal-500"> <Link to="/">
    //         {/* pour les icones https://heroicons.dev */}

    //         <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
    //     </div>
    //     <div className=" block col-start-2 col-end-3 text-center px-4 py-2 m-2">
    //       <MenuSliderRight />
    //     </div>
    //     <div className="text-center col-end-6 col-span-1 px-4 py-2 m-2">
    //       <SearchBar />
    //     </div>
    //   </div>
  );
}

export default NavigationMenu;


