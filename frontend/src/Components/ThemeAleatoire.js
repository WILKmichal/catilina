import React from "react";
import ListeTheme from "../Components/ListeTheme"

import LoopIcon from '@material-ui/icons/Loop';

function Model() {
    return (
        <div className="text-center p-6">
            {/* eslint-disable-next-line */}
            <a className="text-2xl tracking-tight font-semibold p-5">exemple de themes</a>
            <ListeTheme />
            <div className="p-5">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <LoopIcon />
                    <span>randomize more</span>
                </button>
            </div>
        </div>
    )
}

export default Model
