import React, { useState} from 'react';
import './tailwind.css';
import Home from "./Views/Home"
import Archive from "./Views/Archive"
import Profil from "./Views/Profil"
import Sauvegarde from "./Views/Sauvegarde"
import GestionTheme from "./Views/GestionTheme"
import GestionConcours from "./Views/GestionConcours"
import GestionCandidat from "./Views/GestionCandidat"
import RecruitementTeam from "./Views/RecruitementTeam"
import ManagingTeam from "./Views/ManagingTeam"
import NavigationMenu from './Components/nav/NavigationMenu';
import Postuler from './Components/Postuler';
import Footer from "./Components/Footer";
import InfoProfil from "./Components/InfoProfil";
import TstListeUsers from "./Components/TstListeUsers"
import TstDashboard from "./Components/TstDashboard";
import UserContext from "./Context/UserContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom";
import RegisterComponent from "./Components/nav/RegisterComponent.js";
import LoginComponent from "./Components/nav/LoginComponent.js";
import { useTransition, animated } from 'react-spring';


function App() {
  // eslint-disable-next-line
  const [userRole, setUserRole] = useState(null);
  
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });


  const [showLogin, setShowLogin] = useState(false);
  const maskTransitions = useTransition(showLogin, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const loginTransitions = useTransition(showLogin, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  })
  

  const [showReg, setShowReg] = useState(false)
  const maskRegTransitions = useTransition(showReg, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const regTransitions = useTransition(showReg, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  })


  const [showProfil, setShowProfil] = useState(false)
  const maskProfilTransitions = useTransition(showProfil, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const profilTransitions = useTransition(showProfil, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  })



  // const role = [
  //   { role: 0, name: 'candidat' },
  //   { role: 1, name: 'gestionconcours' },
  //   { role: 2, name: 'recrutement' },
  //   { role: 3, name: 'admin' },
  // ]




  return (
    <div className="relative pb-10 min-h-screen">
      
      <Router>
      <UserContext.Provider value={{userData, setUserData}}>
        {
          maskTransitions.map(({ item, key, props }) =>
            item && <animated.div

              key={key}
              style={props}
              className="text-center bg-black-t-50 fixed top-0 right-0 h-full w-full z-50"
              onClick={() => setShowLogin(false)}>
            </animated.div>
          )
        }

        {
          loginTransitions.map(({ item, key, props }) =>
            item && <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 right-0 w-2/3 h-full z-50 shadow">
              <LoginComponent />
            </animated.div>
          )
        }

{
          maskRegTransitions.map(({ item, key, props }) =>
            item && <animated.div
              key={key}
              style={props}
              className="text-center bg-black-t-50 fixed top-0 right-0 h-full w-full z-50"
              onClick={() => setShowReg(false)}>
            </animated.div>
          )
        }

        {
          regTransitions.map(({ item, key, props }) =>
            item && <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 right-0 w-2/3 h-full z-50 shadow">
              <RegisterComponent />
            </animated.div>
          )
        }


{
          maskProfilTransitions.map(({ item, key, props }) =>
            item && <animated.div
              key={key}
              style={props}
              className="text-center bg-black-t-50 fixed top-0 right-0 h-full w-full z-50"
              onClick={() => setShowProfil(false)}>
            </animated.div>
          )
        }

        {
          profilTransitions.map(({ item, key, props }) =>
            item && <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 right-0 w-2/3 h-full z-50 shadow">
              <InfoProfil/>
            </animated.div>
          )
        }

        
        <NavigationMenu role={userRole} setRole={setUserRole} showLog={showLogin} setShowLog={setShowLogin} showR={showReg} setShowR={setShowReg} />
         <Switch>
          <Route exact path="/">
            <Home showRe={showReg} setShowRe={setShowReg}/>
          </Route>
          <Route path="/archive" component={Archive} />
          <Route path="/sauvegarde" component={Sauvegarde} />
          <Route path="/Profil" component={Profil} />
          <Route path="/gestiontheme" component={GestionTheme} />
          <Route path="/gestionconcours" component={GestionConcours} />
          <Route path="/gestioncandidat" component={GestionCandidat} />
          <Route path="/recruitementteam" component={RecruitementTeam} />
          <Route path="/managingteam" component={ManagingTeam} />
           
        </Switch>
        <Footer />
        </UserContext.Provider>
      </Router>
      <TstDashboard/>
      <TstListeUsers showPro={showProfil} setShowPro={setShowProfil}/>
      <Postuler />
    </div>
  );
}

export default App;
