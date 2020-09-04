import React, { useState } from "react";
import { useAxiosPost } from '../Hooks/HttpRequest'

function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function LoginRequest() {
        const params = {
            userRequest: user,
            passwordRequest: password
          };

        //URl a changer pour la route du login
    
        const url = `https://5f3be1fcfff8550016ae5d56.mockapi.io/Projet/concours?page=1&limit=10`
    
        let request = useAxiosPost(url, params)
        let data = JSON.parse(request);
        if (data.token) {
            localStorage.setItem('token', data.token);
        }
        else {
            let message = "mot de passe ou utilisateur inconnu"
            console.log(message)
        }
    }

    return (
        <div className="p-4">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Full-Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Name" onChange={event => setUser(event.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">Password</label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" onChange={event => setPassword(event.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={LoginRequest}>Log In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login