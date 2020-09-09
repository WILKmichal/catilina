import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";
import ProfilButton from "./ProfilButton";
import ArchiveButton from "./role0/ArchiveButton";
import SaveButton from "./role0/SaveButton";
import GestionThemeButton from "./role1/GestionThemeButton";
import GestionConcoursButton from "./role1/GestionConcoursButton";
import GestionCandidatButton from "./role2/GestionCandidatButton";
import GestionEqRecrutButton from "./role3/GestionEqRecrutButton";
import GestionEqGestConcoursButton from "./role3/GestionEqGestConcoursButton";



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
      <div className="flex justify-center">
        <ArchiveButton />
        <SaveButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "1") {
    affBouton =
      <div className="flex justify-center">
        <GestionThemeButton />
        <GestionConcoursButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "2") {
    affBouton =
      <div className="flex justify-center">
        <GestionCandidatButton />
        <ProfilButton />
      </div>
  }
  if (props.role === "3") {
    affBouton =
      <div className="flex justify-center">
        <GestionEqRecrutButton />
        <GestionEqGestConcoursButton />
        <ProfilButton />
      </div>
  }
  return (

    <div className="w-full fixed z-50 bg-teal-100 text-white p-1 md:pt-4 md:grid grid-cols-3 md:gap-4 md:items-center">
      <div>
        <span className="flex justify-center "><Link to="/"><img className="m-3 h-16 md:h-20 lg:h-32" src={logo2} alt="Maxiconcours"></img></Link></span>
      </div>
      <div className="flex justify-center">
        <span className="mb-2 text-teal-500 lg:w-full"><SearchBar /></span>
      </div>
      {affBouton}
      <div>
        <button onClick={setRole0} className="bg-gray-500 rounded mx-2">candidat</button>
        <button onClick={setRole1} className="bg-gray-500 rounded mx-2">concours</button>
        <button onClick={setRole2} className="bg-gray-500 rounded mx-2">recrut</button>
        <button onClick={setRole3} className="bg-gray-500 rounded mx-2">admin</button>
      </div>
    </div>
  );
}

export default NavigationMenu;
