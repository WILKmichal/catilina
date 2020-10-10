import React from "react";
// import SearchBar from "../Components/GCcomponents/SearchBar"
import ThemeDiv from "../Components/GCcomponents/ThemeDiv"
import { useAxiosGet } from "../Hooks/GetRequest"
import Loader from '../Components/Loader'

function GestionTheme() {

    let response = useAxiosGet("http://localhost:3001/maxiconcours/theme")


    let content = null
    let loader = null

    if (response.error) {
        content = <p>erreur pas de theme</p>
    }

    if (response.loading) {
        loader = <Loader></Loader>
    }

    console.log(response.data)
    if (response.data) {
        content = response.data.map((theme, key) =>
            <div key={key}>
                <ThemeDiv theme={theme} />
            </div>
        )
    }

    return (
        <div className="flex-1 bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
                <div className="p-6 ">
                    <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">New theme</button>
                </div>
                {content}
                {loader}
                {/* ici */}
            </div>
        </div>
    )
}
export default GestionTheme