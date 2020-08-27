import React from "react";

function ThemeButton(props) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
            {props.theme.nom_theme}
        </button>
    )
}

export default ThemeButton