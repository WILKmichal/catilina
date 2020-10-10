import React from "react";
import Axios from "axios";

function ThemeDiv(props) {
    
    const submit = async (e) => {

        e.preventDefault(); //pour éviter le rechargerment de la page lors du submit

        const token = localStorage.getItem('token')
        console.log(token)

        const payload = {'TOKEN':token}
        await Axios.post("http://localhost:3001/maxiconcours/gestionTheme",payload)
            .then(res => {
                console.log(res.data)
            }
            )
            .catch(err => { console.log(err) });
    };

    return (
        <div className="px-6">
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                <div className="flex items-center">
                    <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png" alt="Logo" />
                    <div className="ml-2">
                        <div className="text-sm font-semibold text-gray-600">{props.theme.NOM_THEME}</div>
                    </div>
                </div>
                <div>
                    <form  onSubmit={submit}>
                    <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center" type="submit">
                        <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ThemeDiv