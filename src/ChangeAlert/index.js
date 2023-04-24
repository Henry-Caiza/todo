import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);
    if (show) {
        return (
            <div className="alert-container">
                <p className="p-alert">
                    Hubo cambios en la lista<br></br>
                    Quieres sincronizar tus todos?
                </p>
                <button onClick={() => toggleShow(false)} className="btn-alert">
                    Si
                </button>
            </div>
        )
    } else {
        return null
    }
}

export { ChangeAlert }