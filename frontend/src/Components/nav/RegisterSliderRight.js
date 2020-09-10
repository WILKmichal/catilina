import React, { useState } from "react";
import RegisterComponent from "./RegisterComponent"
import { useTransition, animated } from 'react-spring';


function RegisterSliderRight() {
    const [showLogin, setShowLogin] = useState(false)

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

    return (
        <div>
            <div>
                <button  className="h-10 text-center w-24 text-xs p-2 my-15 mx-2 bg-white text-teal-500 font-medium rounded border border-teal-500 hover:border-teal-500 hover:bg-gray-100 shadow-xl" onClick={() => setShowLogin(!showLogin)} > Register </button>

            </div>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        className="text-center bg-black-t-50 fixed top-0 right-0  h-full w-full z-50"
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
                        <RegisterComponent />
                    </animated.div>
                )
            }
        </div>


    )
}

export default RegisterSliderRight
