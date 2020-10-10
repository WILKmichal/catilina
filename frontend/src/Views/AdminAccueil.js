import React from "react";
import Dash from "../Components/TstDashboard"

function AdminAccueil() {
    return (
        <div>
            <div className="italic border-b p-3">
                <h1>Bienvenue Admin</h1>
            </div>
            <div>
                < Dash />
            </div>
        </div>
    )
}
export default AdminAccueil