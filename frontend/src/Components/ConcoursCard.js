import React from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

function ConcoursCard(props) {

    //recuperation de date maintenant en ms depuis 1970

    let currentDate = new Date();
    currentDate = currentDate.getTime();

    //recuperation de date fin de concours en ms depuis 1970


    let finDateParse = new Date(props.concour.date_fin);
    let finDate = finDateParse.getTime()

    //difference entre date de fin de concours et maintenant et passage de ms en jour

    let differenceJour = parseInt((finDate - currentDate) / 86400000)

    let dateClassName
    let finDateInfo

    //affichier le nombre restant si - de 30 jour restant si + 30 jour afficher la date 
    //++ changement fond en fonction de jour restant

    if (differenceJour <= 7) {
        dateClassName = "bg-red-600 absolute rounded bg-opacity-75";
        finDateInfo = "fin des inscription dans " + differenceJour + " jour";
    }
    else if (differenceJour <= 14 && differenceJour > 7) {
        dateClassName = "bg-green-600 absolute rounded bg-opacity-75";
        finDateInfo = "fin des inscription dans " + differenceJour + " jour";
    }
    else if (differenceJour <= 21 && differenceJour > 14) {
        dateClassName = "bg-teal-600 absolute rounded bg-opacity-75";
        finDateInfo = "fin des inscription dans " + differenceJour + " jour";
    }
    else if (differenceJour <= 31 && differenceJour > 21) {
        dateClassName = "bg-blue-600 absolute rounded bg-opacity-75";
        finDateInfo = "fin des inscription dans " + differenceJour + " jour";
    }
    else {
        dateClassName = "bg-purple-600 absolute rounded bg-opacity-75"
        finDateInfo = "fin des inscription le " + finDateParse.getFullYear(2020) + "/" + (finDateParse.getMonth() + 1) + "/" + finDateParse.getDate();
    }





    return (
        //tout les props


        //      {props.concour.image}
        //     {props.concour.id_concours}
        //     {props.concour.libel_sh}
        //     {props.concour.libel_l}
        //     {props.concour.date_fin}
        //     {props.concour.id_sous_theme}

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 text-left hover:opacity-50">
                    sauvgarder <TurnedInNotIcon />
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 text-right hover:opacity-50">
                    postuler <PostAddIcon />
                </span>
            </div>
        </div>
    )
}

export default ConcoursCard
