import React from 'react';
import ListMovies from '../components/listMovies';
import Search from '../components/search';

const Home = () => {

    return(
        <div className="page">
            <div className="welcome-message">
                <h2>Welcome to the Lattice Movie Finder</h2>
                <p>Browse popular movies or search for movies by keyword in the searchbar below.</p>
            </div>
            <Search />
            <ListMovies />
        </div>
    )
}

export default Home;