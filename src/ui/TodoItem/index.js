import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <div className="Icon-Container">
                <span className="Icon Icon-edit" onClick={props.onEdit}></span>
                <span className="Icon Icon-delete" onClick={props.onDelete}></span>
            </div>

        </li>
    )
}

export { TodoItem };