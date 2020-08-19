import React, { useState, useEffect } from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";


function Concours() {

    //const {id} = useParams()
    const url = "https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/concours/"
    const [concours, setConcours] = useState(null)

    useEffect(() => {
        axios.get(url).then(response => {
            setConcours(response.data)
        })
    }, [url])


    if (concours) {
        return (
            <h1 className="border-b font-bold p-3">{concours.libel_sh}</h1>
        )
    }
    return (<div>pas de data</div>)
}

export default Concours