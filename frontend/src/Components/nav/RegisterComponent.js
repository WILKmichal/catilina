import React, { useState, useContext } from "react";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../Context/UserContext";

function Register() {

    const [NOM, setNom] = useState(undefined);
    const [COURRIEL, setCourriel] = useState(undefined);
    const [MDP, setMdp] = useState(undefined);

    const { setUserData } = useContext(UserContext);

    const history = useHistory();

    const submit = async (e) => {

        e.preventDefault(); //pour éviter le rechargerment de la page lors du submit
        const newUser = { "COURRIEL": COURRIEL, "MDP": MDP, "NOM": NOM };
        console.log(newUser)
        
        let err 
        let res
        await Axios.post("http://localhost:3000/maxiconcours/register",newUser)
        .then(res => { console.log(res.data) })
            .catch(err => { console.log(err) })
        // console.log(response)
        // console.log("1")
        
        // const headers = {
        //     "Content-Type": "application/json"
        // }
        
        
        // await Axios.post("http://localhost:3001/maxiconcours/register", newUser, headers).catch(e)
        // console.log("2")
        // const loginRes = await Axios.post("http://localhost:3001/maxiconcours/login", {
        //     COURRIEL,
        //     MDP
        // })
        // console.log("3")
        // setUserData({
        //     token: loginRes.data.token,
        //     role: loginRes.data.role
        // })
        // localStorage.setItem("token", loginRes.data.token);
        // history.push("/");
    };


    return (
        <div className="p-4">
            <form className="w-full ml-3 md:ml-0" onSubmit={submit}>
                <div>
                    <span className="flex justify-center "><Link to="/"><img className="m-3" src={logo2} alt="Maxiconcours"></img></Link></span>
                </div>
                <div className="md:flex md:items-center mb-6 pt-8">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Full-Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Email</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-email"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setCourriel(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Password</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password"
                            type="password"
                            placeholder="******************"
                            onChange={(e) => setMdp(e.target.value)}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register