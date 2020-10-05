import React, {useContext, useState} from "react";
import logo2 from '../img/LogoMaxiconcourHibou3.png';
import { Link } from "react-router-dom"
import {useAxiosPost} from "../../Hooks/PostRequest";
import Axios from "axios";
import UserContext from "../../Context/UserContext";
import {useHistory} from "react-router-dom";

function Login() {

    const [COURRIEL, setCourriel] = useState(undefined);
    const [MDP, setMdp] = useState(undefined);

    const {setUserData} = useContext(UserContext);

    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault(); //pour éviter le rechargerment de la page lors du submit
        const newUser = {"COURRIEL":COURRIEL, "MDP":MDP};
        let res 
        let err 
        const loginRes = await Axios.post("http://localhost:3001/maxiconcours/login", newUser).then(res => {console.log(res)}).catch(err => {console.log(err)})
        setUserData({
            token: loginRes.data.token,
            role: loginRes.data.role
        })
        localStorage.setItem("token", loginRes.data.token);
        history.push("/");
    };

    
    // let login = useAxiosPost(url,{'COURRIEL': COURRIEL, 'MDP': MDP } );
    //Faire un useState + condition + 

    // function loginFunction(e) {  
        
    // console.log(login)
      
        // }

    return (
        <div className="p-4">
            <div>
                <span className="flex justify-center "><Link to="/"><img className="m-3" src={logo2} alt="Maxiconcours"></img></Link></span>
            </div>
            <form className="w-full ml-3 md:ml-0 pt-8" onSubmit={submit}>
                <div className="md:flex items-center mb-6">
                    <div className=" md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">E-mail</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="COURRIEL" 
                        type="text" 
                        placeholder="E-mail"
                        onChange = {(e) => setCourriel(e.target.value) }
                       />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Password</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="MDP" 
                        type="password" 
                        placeholder="******************" 
                        onChange = {(e) => setMdp(e.target.value) }
                        
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="button" >Log In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login