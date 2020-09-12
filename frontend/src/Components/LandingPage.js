import React from "react";
import RegisterButton from './RegisterButton.js';
import Graduation from './img/Graduation.jpg'

function LandingPage(props) {
    return (
        <div className="bg-cover bg-center opacity-50" style={{ backgroundImage:`url(${Graduation})` }}>
            <div className="text-center text-white font-sans">
                {/* eslint-disable-next-line */}
                <div className="h-48"></div>
                {/* eslint-disable-next-line */}
                <a className=" tracking-tight font-semibold md:text-base text-3xl"></a>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <span className="text-4xl font-extrabold tracking-widest md:text-6xl ">MAXICONCOURS</span>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <a className="text-2xl tracking-tight font-semibold">Votre avenir à la portée d'un clic</a>
                <div className="h-24"></div>
               
                    
                   <RegisterButton show={props.showR} setShow={props.setShowR}/>
                
                <div className="h-32"></div>
            </div>
        </div>
    )
}

export default LandingPage
