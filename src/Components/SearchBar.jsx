import React from 'react';

const SearchBar = ({setSearchQuery}) => {

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }
    return(
        <form>
            <input type="text" onChange={handleChange} placeholder="Type in to search" className="search-bar"/>
        </form>
    )
}

export default SearchBar;