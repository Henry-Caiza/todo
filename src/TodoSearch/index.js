import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
    }
    return [
        <input className="TodoSearch"
            placeholder='Ejemplo: React'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    ]
}

export { TodoSearch };