import React from "react";

function TstFormBody(props) {
    console.log(props.user.photo)
   
    return (

        <tbody>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="m-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {/* {props.user.id} */}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10"><img className="w-full h-full rounded-full" src={props.user.photo} alt="profil"> </img>
                        </div>
                        <div className="m-3"></div>
                        {/* <div className="m-3">{props.user.name}</div> */}
                    </div>
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                                    </p>
                </td>
            </tr>
            <tr>

            </tr>
        </tbody>


    )
}

export default TstFormBody;