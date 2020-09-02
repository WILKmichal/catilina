import React from "react";
import logo from './img/LogoMaxiconcourHibou3.png';
import { Link } from "react-router-dom";

function footer() {
    return (
        <div className=" bg-teal-100 text-teal-500 absolute w-full flex ">
            <div className="text-sm w-2/12">
                <p>LINKS</p>
                <ul className="text-xs mb-6">
                    <li className="mt-2 mr-2 block sm:mr-0"><a href="#">FAQ</a>

                    </li>
                    <li className="mt-2 mr-2 block sm:mr-0">
                        <a href="#"> Help</a>
                    </li>
                </ul>
            </div>
            <div className="text-sm w-2/12">
                <p>LEGAL</p>
                <ul className="text-xs mb-6">
                    <li className="mt-2 mr-2 block sm:mr-0">
                        <a href="#">Terms</a>
                    </li>
                </ul>
            </div>
            <div className="text-sm w-2/12">
                <p>SOCIAL</p>
                <ul className="text-xs mb-6">
                    <li className="mt-2 mr-2 block sm:mr-0">
                        <a href="#"> Facebook</a>
                    </li>
                    <li className="mt-2 mr-2 block sm:mr-0">
                        <a href="#"> Twitter</a>
                    </li>
                    <li className="mt-2 mr-2 block sm:mr-0">
                        <a href="#"> Instagram</a>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-sm w-2/12">COMPAGNY</p>
                <ul className="text-xs mb-6">
                    <li className="mt-2 mr-2 block sm:mr-0">
                    <a href="#"> About us</a>
                    </li>
                    <li className="mt-2 mr-2 block sm:mr-0">
                    <a href="#"> Contact</a>
                    </li>

                </ul>
            </div>
            <div className="w-1/12">

            </div>
            <div className="w-3/12">
                <a><Link to="/"><img className="w-full mt-3 md:h-20 md:w-auto" src={logo} alt="Maxiconcours"></img></Link></a>


            </div>
        </div>
    )
}

export default footer
