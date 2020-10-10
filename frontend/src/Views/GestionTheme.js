import React from "react";
import SearchBar from "../Components/GCcomponents/SearchBar"
import ThemeDiv from "../Components/GCcomponents/ThemeDiv"
import Axios from "axios";

function GestionTheme() {

    let themeL = null
    let response


    Axios.get("http://localhost:3001/maxiconcours/theme")
        .then(res => {

            // console.log(res.data)
            
            response = res.data
            console.log(response)


        })
        .catch(err => { console.log(err) });

        console.log(response)

    // themeL = response.data.map((theme, key) =>
    //     // console.log(theme)

    //     <div key={key}>
    //         <ThemeDiv theme={theme} />
    //     </div>
    //     // <div>lel</div>
    // )


    return (
        <div className="flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                <div className="p-6 ">
                    <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">New theme</button>
                </div>
                {themeL}
                {/* ici */}
            </div>
        </div>
    )
}
export default GestionTheme