import React from "react";

function InfoProfilButton(props) {
    console.log(props.user.photo)

    return (
        <div className="flex items-start m-3">
            <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.setShowP(!props.showP)}>
                Info
            </button>
        </div>
    )
}

export default InfoProfilButton;