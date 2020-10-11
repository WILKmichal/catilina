import React, { useEffect } from "react";
// import SearchBar from "../Components/GCcomponents/SearchBar"
import ThemeDiv from "../Components/GCcomponents/ThemeDiv"
// import { useAxiosGet } from "../Hooks/GetRequest"
// import Loader from '../Components/Loader'
import { useState } from "react";
// import { SettingsRemoteSharp } from "@material-ui/icons";
import Axios from "axios";

function GestionTheme() {

    const [listeTheme, setListeTheme] = useState([])
    const [nomTheme, setNomTheme] = useState(undefined);

    useEffect(() => {
        getTheme();

    }, [])


    const getTheme = () => {
        Axios.get("http://localhost:3001/maxiconcours/theme").then(data => {
            let theme = data.data
            setListeTheme(theme)
        })
            .catch(err => console.log(err))
    }


    const delet = (e) => {

        var i
        for (i = 0; i < listeTheme.length; i++) {

            if (listeTheme[i].ID_THEME === e) {
                let newList = listeTheme
                newList.splice(i, 1);
                setListeTheme(newList)
                console.log(listeTheme[i].ID_THEME)

                content = null
            }
        }
    }

    const submit = async (e) => {
        console.log("lel")

        e.preventDefault(); //pour éviter le rechargerment de la page lors du submit

        const token = localStorage.getItem('token')
        // let newListeTheme = listeTheme.push(nomTheme);
        // setListeTheme(newListeTheme)

        const payload = {'TOKEN':token , "NOM_THEME" : nomTheme}
        await Axios.post("http://localhost:3001/maxiconcours/gestionTheme",payload)
            .then(res => {
                console.log(res.data)
            }
            )
            .catch(err => { console.log(err) });
    };


    let content = listeTheme.map((theme, key) =>
        <ThemeDiv theme={theme} key={key} del={delet} />)


    return (
        <div className="flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                <div className="p-6 ">
                    <form onSubmit={submit}>
                        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="nouveau theme nom"  onChange={(e) => setNomTheme(e.target.value)}/>
                        <div className = "p-1"></div>
                            <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white" type="submit">New theme</button>
                    </form>
                </div>
                    {content}
                    {/* ici */}
                </div>
            </div>
    )
}
export default GestionTheme