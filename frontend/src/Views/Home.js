import React from "react";
import ListeAleatoireConcours from "../Components/ListeConcours";
import ThemeAleatoire from "../Components/ThemeAleatoire"
import LandingPage from "../Components/LandingPage"
// eslint-disable-next-line
import Tst from "../Components/Tst"
import ConcoursFoisTrois from "../Components/ConcoursFoisTrois"
import { ParallaxProvider } from 'react-scroll-parallax';
import PresentationSite from "../Components/PresentationSite";

function Home() {
    return (
        <div>
            <div className="overflow-hidden">
                <ParallaxProvider>
                    <LandingPage />
                    {/* <Tst /> */}
                    <ThemeAleatoire />
                    <PresentationSite/>
                    <ConcoursFoisTrois />
                    {/* a modifer pour la recherche */}
                    <ListeAleatoireConcours />
                </ParallaxProvider>
            </div>
        </div>
    )
}

export default Home 
