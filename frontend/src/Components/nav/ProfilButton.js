// import React from "react";
import React, { useContext, useState } from 'react';
import {useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";

function ProfilButton(props) {

    const history = useHistory();

    const profil = () => history.push("/profil")

    const [state, setState] = useState(false);

    const { userData, setUserData } = useContext(UserContext);

    // const logout = () => {
    //     setUserData({
    //         token: undefined,
    //         role: null
    //     })
    // }

    let affBtn



    let logout = () => (
        setUserData({
        role: null
        // eslint-disable-next-line
    }),localStorage.clear("token"),history.push("/"))

    //Completer le logout avec remise a null du role

    console.log(userData.role)
    //         token: undefined
    //          }),
    //     console.log(userData.token),
    //     console.log(userData.role),
    // localStorage.clear("token"),
    // console.log(userData.token)}
    //         className="block px-4 py-2 border-1 w-24 text-xs font-medium hover:bg-teal-300 hover:text-white">Logout
    //         </button>




    if (state === false) {
        affBtn = " "
    }

    if (state === true) {
        affBtn =
            <div className="absolute right-0 bg-white text-teal-500 rounded border border-teal-500 text-xs">
                <button className="block px-4 py-2 border-1 w-24 text-xs font-medium hover:bg-teal-300 hover:text-white"
                    onClick={profil}>Profil</button>
                <button className="block px-4 py-2 border-1 w-24 text-xs font-medium hover:bg-teal-300 hover:text-white"
                    onClick={logout} >Logout
        </button>
            </div>
    }


    return (
        <div className="relative">
            <button onClick={() => setState(!state)} className="h-10 text-center content-center h-55 w-20 text-xs mx-2 bg-white text-teal-500 font-medium rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl">Profil</button>

            {affBtn}

        </div>
    )

}

export default ProfilButton