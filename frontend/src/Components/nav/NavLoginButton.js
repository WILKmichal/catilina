import React from "react";




function LoginSliderRight(props) {
   
    return (
        <div>
            <div >
                <button className="h-10 text-center w-24 text-xs p-2 my-15 mx-2 bg-white text-teal-500 font-medium rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl" onClick={() => props.setShowL(!props.showL)}>Login</button>
            </div>
            
        </div>

    )
}

export default LoginSliderRight