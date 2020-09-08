import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";
import ProfilButton from "./ProfilButton";



function NavigationMenu(props) {


  let affBouton
  function setRole1() {
    props.setRole("1")
  }

  function setRole0() {
    props.setRole("0")
  }

  function setRole2() {
    props.setRole("2")
  }

  function setRole3() {
    props.setRole("3")
  }

  if (props.role === null) {
    affBouton =
      <div className="mb-4 flex justify-center">
        <LoginSliderRight />
        <RegisterSliderRight />
      </div>
      }
  
  if (props.role === "0") {
    affBouton =
      <div className="mb-4 flex justify-center"><p>candidat</p>
        <ProfilButton />
        <ProfilButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "1") {
    affBouton =
      <div className="mb-4 flex justify-center"><p>concours</p>
        <ProfilButton />
        <ProfilButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "2") {
    affBouton =
      <div className="mb-4 flex justify-center"><p>recrut</p>
        <ProfilButton />
        <ProfilButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "3") {
    affBouton =
      <div className="mb-4 flex justify-center"><p>admin</p>
        <ProfilButton />
        <ProfilButton />
        <ProfilButton />
      </div>
  }
  return (

    <div className="w-full fixed z-50 bg-teal-100 text-white p-1 md:pt-4 md:grid grid-cols-3 md:gap-4 md:items-center">
      <div>
        <span className="flex justify-center "><Link to="/"><img className="m-3 h-16 md:h-20 lg:h-32" src={logo2} alt="Maxiconcours"></img></Link></span>
      </div>
      <div className="flex justify-center">
        <span className="mb-4 text-teal-500 lg:w-full"><SearchBar /></span>
      </div>
      {affBouton}
      <div>
        <button onClick={setRole0} className="bg-gray-500 rounded mx-2">0</button>
        <button onClick={setRole1} className="bg-gray-500 rounded mx-2">1</button>
        <button onClick={setRole2} className="bg-gray-500 rounded mx-2">2</button>
        <button onClick={setRole3} className="bg-gray-500 rounded mx-2">3</button>
      </div>
    </div>
  );
}

export default NavigationMenu;
