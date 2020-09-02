import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Demo from './PostuleButton.js';
import Exam from './img/Exam.jpg';
import Graduation from './img/Graduation.jpg'

function LandingPage() {
    return (
        <div className="bg-cover bg-center opacity-50" style={{ backgroundImage:`url(${Graduation})` }}>
            <div className="text-center text-white font-sans">
                {/* eslint-disable-next-line */}
                <div className="h-32"></div>
                {/* eslint-disable-next-line */}
                <a className="text-base tracking-tight font-semibold md:text-base text-3xl">inscription concours en ligne</a>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <span className="text-4xl font-extrabold tracking-widest md:text-6xl ">MAXICONCOURS</span>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <a className="text-2xl tracking-tight font-semibold">Votre avenir à la portée d'un clic</a>
                <div className="h-24"></div>
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold px-6 rounded inline-flex items-center py-3 z-40">
                    < ArrowForwardIosIcon />
                    <span className="text-xl"><Demo /></span>
                </button>
                <div className="h-32"></div>
            </div>
        </div>
    )
}

export default LandingPage
