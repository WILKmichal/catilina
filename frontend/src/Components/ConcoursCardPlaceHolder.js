import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import logo512 from '../Components/img/logo512.png';

function ConcoursCardPlaceHolder() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <span className="absolute rounded bg-indigo-200 bg-opacity-50">
                <p className="px-2 py-1">fin des inscription le 20/12/20</p>
            </span>
            <img className="w-full" src={logo512} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">libel short place holder</div>
                <p className="text-grey-darker text-base">
                    libel long place holder
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 text-left hover:opacity-50">
                    <TurnedInNotIcon />
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 text-left hover:opacity-50">
                    <PostAddIcon />
                </span>


            </div>
        </div>
    )
}

export default ConcoursCardPlaceHolder
