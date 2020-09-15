import React from "react";

function TstFormBody(props) {
    console.log(props.user.photo)

    return (

        <div>
           
                    <div className="flex items-center">
                        <div className="m-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {props.user.id}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10"><img className="w-full h-full rounded-full" src={props.user.photo} alt="photo_de_profil"></img>
                        </div>
                        <div className="m-3"></div>
                        <div className="m-3">{props.user.name}</div>
                    </div>
               
        </div>



    )
}

export default TstFormBody;