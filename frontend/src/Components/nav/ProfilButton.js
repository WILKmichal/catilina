// import React from "react";
import React, { useState } from 'react';

function ProfilButton() {

    const [state, setState] = useState(false);
    let affBtn


    if (state === false) {
        affBtn =" "
    
        }

    if (state === true) {
        affBtn =
            <div className="absolute right-0 mt-1 bg-white text-teal-500 rounded border border-teal-500 font-semibold">
                <div className="block px-4 py-2 border-1 hover:bg-teal-300 hover:text-white">Profil</div>
                <div className="block px-4 py-2 border-1 hover:bg-teal-300 hover:text-white">Logout</div>
            </div>
    }

    return (
        <div className="relative">
            <button onClick={() => setState(!state)} className="text-center w-20 text-l p-2 my-15 mx-2 bg-white text-teal-500 font-semibold rounded border border-teal-500 hover:bg-gray-100 shadow-xl">Profil</button>

            {affBtn}
        </div>
    )

}

export default ProfilButton