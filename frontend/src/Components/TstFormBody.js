import React from "react";
// import Loader from './Loader';
// import InfoProfil from './InfoProfil';
// import { useAxiosGet } from '../Hooks/GetRequest';

function TstFormBody(props) {
    // console.log(props)   




    const handleListItemClick = () => {
        props.setShowP(!props.showP)

    }

    //   console.log(handleListItemClick)

    return (
        <table className="min-w-full leading-normal">

            <tbody >
                <tr className="grid grid-cols-6">
                    <td className="py-5 border-b border-gray-200 bg-white text-sm col-span-1 ">
                        <div className="flex pl-5 pt-3">
                            <p className="text-gray-900 text-center">
                                {props.user.id}
                            </p>
                        </div>
                    </td>
                    <td className=" py-5 border-b border-gray-200 bg-white text-sm col-span-1" >
                        <div className="flex items-start flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full" src={props.user.photo} alt="photo_de_profil"></img>
                        </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm col-span-2 md:col-span-3">

                        <div className="flex items-start md:pt-3 ">{props.user.name}</div>


                    </td>

                    <td className="py-5 border-b border-gray-200 bg-white text-sm col-span-2 md:col-span-1">
                        <div className="flex items-end">
                            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={handleListItemClick}>
                                Info
                              </button>
                        </div>
                    </td>

                </tr>

            </tbody>

        </table>


    )
}

export default TstFormBody;