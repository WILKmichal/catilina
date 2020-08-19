import React from 'react';
import HelloWorld from '../Components/HelloWorld'

function Home() {
        return (
                <div className="border-b font-bold p-3">
                        <h1>
                                Vous etes sur la page /Home
                        </h1>
                        <HelloWorld />
                </div>
        );
}

export default Home;