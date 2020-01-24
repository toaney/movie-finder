import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/listMoviesAction';

const Search = () => {
    const [ searchInput, setSearchInput ] = React.useState("");
    const dispatch = useDispatch();

    return(
        <div className="searchbar">
            <div className="search-input-container">
                <input 
                    className="search-input" 
                    placeholder="@username"
                    value={searchInput} 
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                }}></input>
                <button className="search-button" onClick={() => {
                    dispatch(searchMovies(searchInput))
                    setSearchInput("")
                }}>Search</button>
            </div>
        </div>
    )
}

export default Search;