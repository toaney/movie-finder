import React from 'react';
import { connect } from 'react-redux';
import { listMovies, setKeyword } from '../actions/listMoviesAction';
import { updateMovie } from '../actions/movieDetailsAction';
import { Redirect } from 'react-router-dom';

const ListMovies = ({dispatch, keyword, movies}) => {

    const [ redirect, setRedirect ] = React.useState(false);

    React.useEffect(() => {
        dispatch(listMovies());
        dispatch(setKeyword(""))
    }, []);

    const learnMore = (input) => {
        dispatch(updateMovie(input));
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/about" />;
    };

    return(
        <React.Fragment>
            <br />
            <br />
            {!keyword? `Displaying popular movies.`: 
                movies.length <= 0? `no results found for "${keyword}".` : `Showing ${movies.length} results for "${keyword}".`
            }
            <br />
            <br />
            <div>
                {movies.map( item => (
                    <div className="movie-list-item">
                        <img className="movie-list-thumbnail" src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />
                        <div className="movie-list-preview">
                            <h3>{item.title}</h3>
                            <p>released: {item.release_date}</p>
                            <button className="movie-list-button" onClick={() => { learnMore(item.id) }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return({
        keyword: state.listMoviesReducer.keyword,
        movies: state.listMoviesReducer.movies,
        activeMovie: state.movieDetailsReducer.activeMovie
    })    
}

export default connect(mapStateToProps)(ListMovies);
