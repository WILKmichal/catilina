
// import React, { useState } from "react";
// import { useAxiosGet } from "../Hooks/GetRequest";
// import Axios from "axios" ; 


//  function Dash() {

//     const bouf = {"ID_STATUT":1}

//     let loul =  Axios.get("91.168.142.9:32777/maxiconcours/gestionDashboard", bouf)
//     .then(res => {res = setDashboard(res.data)}).catch(err => {console.log("lel")})


//     const [dashboard, setDashboard] = useState("0")


//     return (
//         <div>


//             <div className=" bg-white-300 flex-1 p-3 overflow-hidden">

//                 <div className="flex flex-col">


//                     <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">


//                         <div className="shadow-lg bg-blue-600 border-l-8 hover:bg-bg-red-800 hover:border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
//                             <div className="p-4 flex flex-col">
//                                 <a href="#" className="no-underline text-white text-2xl">
//                                     Statut
//                     </a>
//                                 <a href="#" className="no-underline text-white text-lg">

//                                     0
//                     </a>
//                             </div>
//                         </div>

//                         <div className="shadow bg-info bg-blue-600 border-l-8 hover:bg-red-600 border-info-dark mb-2 p-2 md:w-1/4 mx-2">
//                             <div className="p-4 flex flex-col">
//                                 <a href="#" className="no-underline text-white text-2xl">
//                                     Statut
//                     </a>
//                                 <a href="#" className="no-underline text-white text-lg">


                                   

//                     </a>
//                             </div>
//                         </div>

//                         <div className="shadow bg-warning bg-blue-600 border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
//                             <div className="p-4 flex flex-col">
//                                 <a href="#" className="no-underline text-white text-2xl">
//                                     Statut
//                     </a>
//                                 <a href="#" className="no-underline text-white text-lg">

//                                     2
//                     </a>
//                             </div>
//                         </div>

//                         <div className="shadow bg-success bg-blue-600 border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
//                             <div className="p-4 flex flex-col">
//                                 <a href="#" className="no-underline text-white text-2xl">
//                                     Statut
//                     </a>
//                                 <a href="#" className="no-underline text-white text-lg">

//                                     3
//                     </a>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">



//                         <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
//                             <div className="px-6 py-2  border-b border-light-grey bg-teal-200">
//                                 <div className="font-bold text-xl ">Concours consulter</div>
//                             </div>
//                             <div className="table-responsive">
//                                 <table className="table   w-full  text-gray-500">
//                                     <thead className=" text-black text-normal">
//                                         <tr>
//                                             <th className=""></th>
//                                             <th className="" >Concours</th>
//                                             <th className="">Postuler</th>
//                                             <th className="">Vue</th>
//                                             <th className=""></th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <th scope="row">1</th>
//                                             <td>
//                                                 <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
//                                                     Chef de Projet  {dashboard}
//                                 </button>
//                                             </td>
//                                             <td>4500</td>
//                                             <td>4600</td>
//                                             <td>
//                                                 <span className="text-green-500"><i className="fas fa-arrow-up"></i>5%</span>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <th scope="row">2</th>
//                                             <td>
//                                                 <button className="bg-blue-500 hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
//                                                     Data Analyst
//                                 </button>
//                                             </td>
//                                             <td>10000</td>
//                                             <td>3000</td>
//                                             <td>
//                                                 <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <th scope="row">3</th>
//                                             <td>
//                                                 <button className="bg-blue-500 hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
//                                                     Developer Web
//                                 </button>
//                                             </td>
//                                             <td>10000</td>
//                                             <td>3000</td>
//                                             <td>
//                                                 <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <th scope="row">4</th>
//                                             <td>
//                                                 <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
//                                                     Scrum Master
//                                 </button>
//                                             </td>
//                                             <td>10000</td>
//                                             <td>3000</td>
//                                             <td>
//                                                 <span className="text-green-500"><i classNameName="fas fa-arrow-up"></i>65%</span>
//                                             </td>
//                                         </tr>

//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>



//                     </div>



//                     <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2">
//                         <div className="rounded overflow-hidden shadow bg-white mx-2 w-full ">
//                             <div className="px-6 py-2 border-b border-light-gray bg-teal-100">
//                                 <div className="font-bold text-xl ">Connexion</div>
//                             </div>
//                             <div className="p-4 flex flex-col">
//                                 <div className="w-full">

//                                     <div className="shadow w-full bg-grey-light">
//                                         <div className="bg-red-500 text-xs leading-none py-1 text-center text-white w-3/4">75%
//                             </div>
//                                     </div>


//                                     <div className="shadow w-full bg-grey-light mt-2">
//                                         <div className="bg-red-500 text-xs leading-none py-1 text-center text-white w-3/4">75%
//                             </div>
//                                     </div>


//                                     <div className="shadow w-full bg-grey-light mt-2">
//                                         <div className="bg-red-500 text-xs leading-none py-1 text-center text-white w-3/4">75%
//                             </div>
//                                     </div>


//                                     <div className="shadow w-full bg-grey-300 mt-2">
//                                         <div className="bg-red-500 text-xs leading-none py-1 text-center text-white w-3/4" >75%
//                             </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Dash;
