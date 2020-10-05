import React from "react";
import {useHistory} from "react-router-dom";

function GestionThemeButton() {

    const history = useHistory();

    const gestTheme = () => history.push("/gestiontheme")

    return (
        <div>
            <button className="h-10 text-center w-24 text-xs my-15 mx-2 bg-white text-teal-500 font-medium border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl"
            onClick = {gestTheme}>Gestion Theme</button>
        </div>
    )
}

export default GestionThemeButton