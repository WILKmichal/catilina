import React from "react";

function ThemeButton(props) {
    return (
        <button className="m-1 h-1/5 p-1 bg-teal-500 text-gray-100 font-semibold border border-teal-600 rounded hover:border-transparent hover:bg-teal-600 text-white font-bold">
            {props.theme.nom_theme}
        </button>
    )
}

export default ThemeButton