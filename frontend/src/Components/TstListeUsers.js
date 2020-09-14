import React from 'react';
// import Loader from '../Loader';
import TstFormBody from './TstFormBody.js'
import TstFormHeader from './TstFormHeader.js'

import { useAxiosGet } from '../Hooks/HttpRequest'

function ListTheme() {
    

    const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/user`

    let themes = useAxiosGet(url)


    let content = null
    // let loader = null

    if (themes.error) {
        content = <p>erreur pas de concours</p>
    }

    // if (themes.loading) {
    //     loader = <Loader></Loader>
    // }

    if (themes.data) {
        content =
            themes.data.map((photo, key) =>
                <div key={key}>
                    <TstFormBody user={photo}  />
                </div>
            )
    }


    return (
        
            
                <div className="container mx-auto px-4 pt-20 sm:px-8">
                    <div className="py-8">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Recruitment Team</h2>
                        </div>

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <TstFormHeader />
                                    {content}
                                </table>
                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1
                                  </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                      </button>
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                      </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        
    )
}
    
export default ListTheme





