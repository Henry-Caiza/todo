import React, { useState } from "react";
import './TodoList.css'

function TodoList(props) {
    const renderFunc = props.children || props.render;
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedNotCompleted, setIsCheckedNotCompleted] = useState(false);

    return (
        <section className="TodoList-container">
            <div className="checks-wrapper">
                <div className="checkBox-container">
                    <label className="container">Esconder Todo's completados
                        <input className="input" type="checkbox" name="radio" checked={isChecked}
                            onChange={() => {
                                setIsChecked((prev) => !prev)

                            }}
                        />
                        <span className="checkmark"></span>
                    </label>

                </div>
                <div className="checkBox-container">
                    <label className="container">Esconder Todo's incompletos
                        <input className="input" type="checkbox" name="radio" checked={isCheckedNotCompleted}
                            onChange={() => {
                                setIsCheckedNotCompleted((prev) => !prev)

                            }}
                        />
                        <span className="checkmark"></span>
                    </label>

                </div>
            </div>



            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!isChecked && !isCheckedNotCompleted && !props.loading && !props.error) ? props.searchedTodos.map(renderFunc)
                : (isChecked && !isCheckedNotCompleted && !props.loading && !props.error) ? props.searchedTodosCompleted.map(renderFunc)
                    : props.searchedTodosIncompleted.map(renderFunc)}
            {/* 
            {!isCheckedNotCompleted ? props.searchedTodos.map(renderFunc) : props.searchedTodosIncompleted.map(renderFunc)} */}

        </section>
    );
}

export { TodoList };