import React from "react";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {

    const onSearchValueChange = (event) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
    }
    return [
        <input className="TodoSearch"
            placeholder='Ejemplo: React'
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    ]
}

export { TodoSearch };