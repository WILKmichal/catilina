import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";

function ThemeDiv(props) {

    const [state, setState] = useState(false);
    const [nomSousTheme, setSousNomTheme] = useState([]);

    useEffect(() => {
        getSousTheme();
    }, [])

    
    const getSousTheme = () => {
        let payload = {"ID_THEME": props.theme.ID_THEME}
        Axios.get("http://localhost:3001/maxiconcours/sousTheme",payload).then(data => {
            let soustheme = data.data
            setSousNomTheme(soustheme)
        })
            .catch(err => console.log(err))
    }

    console.log(nomSousTheme)

    const submit = async () => {

        // e.preventDefault(); //pour éviter le rechargerment de la page lors du submit

        const token = localStorage.getItem('token')
        console.log(token)

        const payload = { 'TOKEN': token, "ID_THEME": props.theme.ID_THEME }
        await Axios.put("http://localhost:3001/maxiconcours/gestionTheme", payload)
            .then(res => {
                console.log(res.data)
            }
            )
            .catch(err => { console.log(err) });
    };

    const lel = () => {
        props.del(props.theme.ID_THEME)
        submit()
    }

    let affBtn = ""

    if (state === false) {
        affBtn = " "
    }

    if (state === true) {

        affBtn =
        <div>oui oui oui</div>
    }

    return (
        <div className="px-6">
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                <div className="flex items-center"  onClick={() => { setState(!state); console.log(state) }}>
                    <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png" alt="Logo" />
                    <div className="ml-2" >
                        <div className="text-sm font-semibold text-gray-600">{props.theme.NOM_THEME}</div>
                    </div>
                </div>
                <div onClick={e => { lel() }}>
                    {/* <form  onSubmit={submit}> */}
                    <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center" type="submit">
                        <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* </form> */}
                </div>
            </div>
            <div>

                {affBtn}

            </div>
        </div>
    )
}

export default ThemeDiv