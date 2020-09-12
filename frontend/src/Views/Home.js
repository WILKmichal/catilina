import React from "react";
import ListeAleatoireConcours from "../Components/concour/ListeConcours";
import LandingPage from "../Components/LandingPage"
import ListeTheme from "../Components/theme/ListeTheme"
// eslint-disable-next-line
// import Tst from "../Components/Tst"
import PresentationSite from "../Components/PresentationSite";

function Home(props) {
    return (
        <div>
            <div className="overflow-hidden">
                    <LandingPage showR={props.showRe} setShowR={props.setShowRe}/>
                    <ListeTheme/>
                    <PresentationSite/>
                    <ListeAleatoireConcours />
            </div>
        </div>
    )
}

export default Home 
