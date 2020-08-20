import React from "react";

function ConcoursCard(props) {
    return (
        // <div>

        //      {props.concour.image}
        //     {props.concour.id_concours}
        //     {props.concour.libel_sh}
        //     {props.concour.libel_l}
        //     {props.concour.date_fin}
        //     {props.concour.id_sous_theme}
        //     
        // </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:opacity-50">
            <img className="w-full" src={props.concour.image} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.concour.libel_sh}</div>
                <p className="text-grey-darker text-base">
                    {props.concour.libel_l}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{props.concour.date_fin}</span>
            </div>
        </div>
    )
}

export default ConcoursCard
