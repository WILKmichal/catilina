// import React from "react";
import React, { useState } from 'react';
import RegisterSliderRight from "./RegisterSliderRight";
import LoginSliderRight from "./LoginSliderRight";
import { Link } from "react-router-dom";

function ProfilButton(props) {

    const [state, setState] = useState(false);

    let affBtn
    let logout = <button onClick={() => props.setRoleb(null)} className="block px-4 py-2 border-1 w-24 text-xs font-medium hover:bg-teal-300 hover:text-white">Logout</button>


    if (state === false) {
        affBtn = " "
    }

    if (state === true) {
        affBtn =
            <div className="absolute right-0 bg-white text-teal-500 rounded border border-teal-500 text-xs">
                <button className="block px-4 py-2 border-1 w-24 text-xs font-medium hover:bg-teal-300 hover:text-white">Profil</button>
                <Link to="/">{logout}</Link>
            </div>
    }


    return (
        <div className="relative">
            <button onClick={() => setState(!state)} className="h-10 text-center w-24 content-center h-55 w-20 text-xs mx-2 bg-white text-teal-500 font-medium border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl">Profil</button>

            {affBtn}

        </div>
    )

}

export default ProfilButton