import React from "react";

function ThemeDiv(props) {
    console.log(props)

  return (
    <div className="px-6">
    <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
        <div className="flex items-center">
            <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png" alt="Logo" />
            <div className="ml-2">
                <div className="text-sm font-semibold text-gray-600">Lirik</div>
                <div className="text-sm font-light text-gray-500">Level 6 - Warlock</div>
            </div>
        </div>
        <div>
            <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center">
                <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</div>
  )
}

export default ThemeDiv