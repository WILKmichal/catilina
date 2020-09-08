import React from "react";

function ThemeButton(props) {
    return (
        <div className = 'p-1 flex flex-shrink-0'>
        <button className="p-1 bg-teal-500 text-gray-100 font-semibold border border-teal-600 rounded hover:border-transparent hover:bg-teal-600 hover:text-white hover:font-bold h-24 whitespace-no-wrap w-64">
            {props.theme.nom_theme}
        </button>
        </div>
    )
}

export default ThemeButton