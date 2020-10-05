import React from "react";
import {useHistory} from "react-router-dom";



function ArchiveButton() {

    const history = useHistory();

    const archive = () => history.push("/archive")

    return (
        <div>
            <button className="h-10 text-center w-24 text-xs p-2 my-15 mx-2 bg-white text-teal-500 font-medium border-gray-100 rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl"
            onClick = {archive}>Archive</button>
        </div>
    )
}

export default ArchiveButton