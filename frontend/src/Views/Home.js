import React from "react";
import ListeAleatoireConcours from "../Components/ListeConcours";
import LandingPage from "../Components/LandingPage"
import Tst from "../Components/Tst"

function Home(){
    return(
        <div >
            <LandingPage />
            <Tst/>
            <ListeAleatoireConcours />
        </div>
    )
}

export default Home 
