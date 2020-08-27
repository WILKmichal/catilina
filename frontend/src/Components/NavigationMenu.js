import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
import MenuSliderRight from "./MenuSliderRight";
import SearchBar from "./SearchBar";


function NavigationMenu() {
  return (
    <div className="flex bg-gray-200">
      <div className="flex-initial  text-center px-4 py-2 m-2">
      <span className="text-teal-500"> <Link to="/">
            {/* pour les icones https://heroicons.dev */}

            <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>t
  </div>
      <div className="flex-initial  text-center px-4 py-2 m-2">
      <MenuSliderRight />
  </div>
      <div className="flex-initial text-center px-4 py-2 m-2">
      <SearchBar />
  </div>
    </div>


    // <nav className="justify-around">
    //   <div className="display: inline-flex menu w-full md:flex ">
    //     <div className="">
    //       <span className="text-teal-500"> <Link to="/">
    //         {/* pour les icones https://heroicons.dev */}

    //         <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
    //     </div>
    //     <div className="	display: inline-flex px-5 mt-3 rounded  mr-2">

    //       <div className="bg-white text-teal-500 font-mono my-1 px-3 border-2 border-teal-500 rounded ">
    //         <MenuSliderRight />
    //       </div>

    //     </div>
    //     <div className="w-full">
    //       <SearchBar />
    //     </div>

    //   </div>
    // </nav>
  );
}

export default NavigationMenu;


