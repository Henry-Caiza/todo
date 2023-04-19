import React from "react";
import './EmptyTodos.css';
import empty from './empty.png';

function EmptyTodos() {
    return (
        <div className="empty-container">
            <img className="empty" src={empty}>
            </img>
            <p className="p-empty">
                Crea tu primer Todo usando el icono +!
            </p>

        </div>
    )
}
export { EmptyTodos }