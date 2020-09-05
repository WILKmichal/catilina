import React, { useState } from "react";

function HiddenButton() {
    const [affiche, setAffiche] = useState("azerty");
    const [classN, setClassN] = useState("hidden text-center w-20 text-l p-2 my-15 mx-2 bg-white text-teal-500 font-semibold border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl");

    return (
        <div>
           <button className= {classN}>{affiche}</button>
        </div>
    )
}

export default HiddenButton