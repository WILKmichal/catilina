import React ,{ useContext } from 'react';
import UserContext from "../../Context/UserContext";
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import RegisterSliderRight from "./NavRegisterButton";
import LoginSliderRight from "./NavLoginButton";
import ProfilButton from "./ProfilButton";
import ArchiveButton from "./role0/ArchiveButton";
import SaveButton from "./role0/SaveButton";
import GestionThemeButton from "./role1/GestionThemeButton";
import GestionConcoursButton from "./role1/GestionConcoursButton";
import GestionCandidatButton from "./role2/GestionCandidatButton";
import GestionEqRecrutButton from "./role3/GestionEqRecrutButton";
import GestionEqGestConcoursButton from "./role3/GestionEqGestConcoursButton";



function NavigationMenu(props) {

  // eslint-disable-next-line
  const { userData, setUserData } = useContext(UserContext);
  // setUserData(useContext(UserContext))

  let affBouton
  // function setRole1() {
  //   props.setRole("1")
  // }

  // function setRole0() {
  //   props.setRole("0")
  // }

  // function setRole2() {
  //   props.setRole("2")
  // }

  // function setRole3() {
  //   props.setRole("3")
  // }
  if (userData.role === 3)
  {
    affBouton =
      <div className="flex justify-center col-start-8 col-end-12 right-align md:pt-4">
        <GestionEqRecrutButton />
        <GestionEqGestConcoursButton />
        <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
      </div>
      
  }
  if (userData.role === 2)
  {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <GestionCandidatButton />
        <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
      </div>
  }
  if (userData.role === 1)
  {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <GestionThemeButton />
        <GestionConcoursButton />
        <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
      </div>
  }
  if (userData.role === 0)
  {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
        <ArchiveButton />
        <SaveButton />
        <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
      </div>
  }
  if (userData.role == null)
   {
    affBouton =
    <div className="flex justify-center col-start-8 col-end-12 md:pt-4">
        <LoginSliderRight showL={props.showLog} setShowL={props.setShowLog} />
        <RegisterSliderRight show={props.showR} setShow={props.setShowR}/>
      </div>
  }
  console.log(userData.role)

  // console.log(userData.role)
  // if (props.role === null) {
  //   affBouton =
  //   <div className="flex justify-center col-start-8 col-end-12 md:pt-4">
  //       <LoginSliderRight showL={props.showLog} setShowL={props.setShowLog} />
  //       <RegisterSliderRight show={props.showR} setShow={props.setShowR}/>
  //     </div>
  // }

  // if (props.role === "0") {
  //   affBouton =
  //   <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
  //       <ArchiveButton />
  //       <SaveButton />
  //       <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
  //     </div>
  // }
  // if (props.role === "1") {
  //   affBouton =
  //   <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
  //       <GestionThemeButton />
  //       <GestionConcoursButton />
  //       <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
  //     </div>
 // }
  // if (props.role === "2") {
  //   affBouton =
  //   <div className="flex justify-center col-start-8 col-end-12 right-align  md:pt-4">
  //       <GestionCandidatButton />
  //       <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
  //     </div>
  // }
  // if (props.role === "3") {
  //   affBouton =
  //     <div className="flex justify-center col-start-8 col-end-12 right-align md:pt-4">
  //       <GestionEqRecrutButton />
  //       <GestionEqGestConcoursButton />
  //       <ProfilButton roleB={props.role} setRoleB={props.setRole}/>
  //     </div>
  // }
  return (

    <div className="w-full relative z-40 bg-teal-100 text-white p-1 md:items-center md:grid grid-cols-12">
      <div>
        <span className="flex justify-center "><Link to="/"><img className=""src={logo2} alt="Maxiconcours"></img></Link></span>
      </div>
      <div className="flex justify-center md:col-start-4 md:col-end-7 md:pt-4">
        <span className="my-4 text-teal-500 md:w-3/4  lg:w-full"><SearchBar /></span>
      </div>
      {affBouton}
      {/* <div className="absolute">
        <button onClick={setRole0} className="bg-gray-500 rounded mx-2">candidat</button>
        <button onClick={setRole1} className="bg-gray-500 rounded mx-2">concours</button>
        <button onClick={setRole2} className="bg-gray-500 rounded mx-2">recrut</button>
        <button onClick={setRole3} className="bg-gray-500 rounded mx-2">admin</button>
      </div> */}
    </div>
  );
}

export default NavigationMenu;
