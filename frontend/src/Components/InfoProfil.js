import React from "react";


function InfoProfil(props) {
    return (

        <table className="min-w-full leading-normal">

            <tbody>
                <tr className="grid grid-cols-2">
                    <td className="py-10 px-10 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex-shrink-0 w-64 h-64"><img className="w-full h-full rounded-full" src="data:image/jpeg;base64,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"></img>
                        </div>
                    </td>
                    <td className="py-10 px-10">
                        <div>
                            <input placeholder={props.user.id}  disabled></input>
                        </div>
                        <div>
                            <input placeholder="Nom" disabled></input>
                        </div>
                        <div>
                            <input placeholder="Prénom" disabled></input>
                        </div>
                        <div>
                            <input placeholder="DatedeNaissance" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr className="grid grid-cols-2">
                    <td>
                        <div>
                            <input placeholder="Genre" disabled></input>
                        </div>
                    </td>
                    <td>
                        <div>
                            <input placeholder="Tel" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input placeholder="adresse" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input placeholder="courriel" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr className="grid grid-cols-2">
                    <td>
                        <div>
                            <input placeholder="ID legal" disabled></input>
                        </div>
                    </td>
                    <td>
                        <div>
                            <input placeholder="Nationalité" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input placeholder="Facebook" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input placeholder="Instagral" disabled></input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input placeholder="Twitter" disabled></input>
                        </div>
                    </td>
                </tr>
                {/* <tr className="grid grid-cols-2">
                    <td className="py-5 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex pl-5 ">
                            <img className="w-full h-full rounded-full" src="" alt="photo_de_profil">image</img>
                        </div>
                    </td>
                    
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" >
                        <input className="disabled">ale</input>
                        <input className="disabled">ale</input>
                        <input className="disabled">ale</input>
                        <input className="disabled">ale</input>

                    </td>
                </tr>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-start m-3"> <p className="text-gray-900">
                            Jan 21, 2020
                                    </p></div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-start m-3">
                            <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                                Info
                              </button>
                        </div>
                    </td>

                </tr> */}

            </tbody>

        </table>

    )
}

export default InfoProfil;