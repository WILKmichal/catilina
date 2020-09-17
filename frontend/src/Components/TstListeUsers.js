import React from 'react';
// import Loader from '../Loader';
import TstFormBody from './TstFormBody.js'
import TstFormHeader from './TstFormHeader.js'
import Loader from './Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

function ListTheme(props) {


    const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/user`

    let user = useAxiosGet(url)


    let content = null
    let loader = null

    if (user.error) {
        content = <p>erreur pas de concours</p>
    }

    if (user.loading) {
        loader = <Loader></Loader>
    }

    if (user.data) {
        content =
            user.data.map((data, key) =>
                <div key={key}>
                    <TstFormBody user={data} showP={props.showPro} setShowP={props.setShowPro}/>
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
                        
                            <TstFormHeader />
                            {loader}
                                {content}
                                

                        
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





