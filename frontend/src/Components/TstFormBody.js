import React from "react";
import InfoProfilButton from "./InfoProfilButton";

function TstFormBody(props) {
    console.log(props.user.photo)

    return (
        <table className="min-w-full leading-normal">

            <tbody >
                <tr className="grid grid-cols-4">
                    <td className="py-5 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex pl-5 ">
                            <p className="text-gray-900 text-center">
                                {props.user.id}
                            </p>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" >
                        <div className="flex items-start m-3">
                            <div className="flex-shrink-0 w-10 h-10"><img className="w-full h-full rounded-full" src={props.user.photo} alt="photo_de_profil"></img>
                            </div>
                            <div className="m-3"></div>
                            <div className="m-3">{props.user.name}</div>
                        </div>

                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-start m-3"> <p className="text-gray-900">
                            Jan 21, 2020
                                    </p></div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <InfoProfilButton user={props.user}/>
                    </td>

                </tr>

            </tbody>

        </table>


    )
}

export default TstFormBody;