import React from "react";
import TstFormBody from '../Components/TstFormBody'
import TstFormHeader from '../Components/TstFormHeader'
import Loader from '../Components/Loader'
import Axios from "axios";

function RecruitementTeam(props) {

    let loader = null;
    
    const content = async (e) => {

        const data = {
             "ID_ROLE": "1",
             "TOKEN": localStorage.getItem()
     };
        
        e.preventDefault();
    let emp = await Axios.post("http://localhost:3001/maxiconcours/searchAdmin", data)
    console.log(emp)
            // .then(res => 
            //     {console.log(emp.data)
                    
                // if (res.user.error) {
                //     content = <p>erreur pas d'employé</p>
                // }
            
                // if (res.user.loading) {
                //     loader = <Loader></Loader>
                // }
            
                // if (res.user.data) {
                //     content =
                //         user.data.map((ID_ROLE, key) =>
                //             <div key={key}>
                //                 <TstFormBody user={ID_ROLE} showP={props.showPro} setShowP={props.setShowPro} />
                //             </div>
                //         )
                        
                // }
            //     console.log(res.data)
            // },
            // console.log(emp.data)
            // )
            // .catch(err => { console.log(err) });
    }


    
    return (
        <div>
            <div className="italic border-b p-3">
                <h1>vous etes sur la page /RecruitementTeam</h1>
            </div>
            <div className="container mx-auto px-4 pt-20 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Recruitement Team</h2>
                    </div>

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                            <TstFormHeader />
                            {loader}
                            {content}



                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span className="text-xs xs:text-sm text-gray-900">

                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Prec
                                      </button>
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Suiv
                                      </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecruitementTeam