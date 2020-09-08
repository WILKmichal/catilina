import React, { useState } from "react";

function ProfilButton() {
    
    // eslint-disable-next-line
    const [classN, setClassN] = useState("text-center w-20 text-l p-2 my-15 mx-2 bg-white text-teal-500 font-semibold border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl");

    return (
        <div>
            <button className={classN}>Profil</button>
        </div>
    )
}

export default ProfilButton