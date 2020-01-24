import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions/movieDetailsAction';

const AboutMovie = ({dispatch, activeMovie, activeMovieDetails}) => {

    React.useEffect(() => {
        console.log('about movie checkpoint1');
          dispatch(getMovieDetails(activeMovie));
      }, []);

    return(
        <React.Fragment>
            {/* conditional rendering if an active movie is present in the Redux store */}
            {!activeMovie? 
                <p>No movie has been selected.</p>
                :
                <div className="about-movie-container">
                    <img className="about-movie-image" src={`https://image.tmdb.org/t/p/w300/${activeMovieDetails.poster_path}`} />
                    <div className="about-movie-preview">
                        <h3>{activeMovieDetails.title}</h3>
                        <p>released: {activeMovieDetails.release_date}</p>
                        <p>rating: {activeMovieDetails.vote_average}</p>
                        <span>overview:</span>
                        <p>{activeMovieDetails.overview}</p>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return({
        activeMovie: state.movieDetailsReducer.activeMovie,
        activeMovieDetails: state.movieDetailsReducer.activeMovieDetails
    })    
}

export default connect(mapStateToProps)(AboutMovie);
