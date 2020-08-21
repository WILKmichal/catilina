import React from "react";

function ConcoursCard(props) {

    let currentDate = new Date();
    currentDate = currentDate.getTime();

    let finDateParse = new Date(props.concour.date_fin);
    let finDate = finDateParse.getTime()

    let differenceJour = parseInt((finDate - currentDate) / 86400000)

    let dateClassName
    let finDateInfo

    if (differenceJour <= 7) {
        dateClassName = "bg-red-600 absolute rounded bg-opacity-50";
        finDateInfo = "fin des inscription dans " + differenceJour;
    }
    else if (differenceJour <= 14 && differenceJour > 7) {
        dateClassName = "bg-green-600 absolute rounded bg-opacity-50";
        finDateInfo = "fin des inscription dans " + differenceJour;
    }
    else if (differenceJour <= 21 && differenceJour > 14) {
        dateClassName = "bg-teal-600 absolute rounded bg-opacity-50";
        finDateInfo = "fin des inscription dans " + differenceJour;
    }
    else if (differenceJour <= 31 && differenceJour > 21) {
        dateClassName = "bg-blue-600 absolute rounded bg-opacity-50";
        finDateInfo = "fin des inscription dans " + differenceJour;
    }
    else {
        dateClassName = "bg-purple-600 absolute rounded bg-opacity-50"
        finDateInfo = "fin des inscription le "+ finDateParse.getFullYear(2020) + "/" +(finDateParse.getMonth()+1) + "/"+finDateParse.getDate();
    }





    return (
        //tout les props


        //      {props.concour.image}
        //     {props.concour.id_concours}
        //     {props.concour.libel_sh}
        //     {props.concour.libel_l}
        //     {props.concour.date_fin}
        //     {props.concour.id_sous_theme}

        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:opacity-50">
            <span className={dateClassName}>
                <p className="px-2 py-1"> {finDateInfo} </p>
            </span>
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
