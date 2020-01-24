import axios from 'axios';

// indicates which port the Backend is listening on
const PORT = 4000;

// Action to update the active movie ID in the Redux store
export const updateMovie = activeMovie => ({
    type: "UPDATE_MOVIE",
    activeMovie
});

// Action to update details for the active movie in the Redux store
export const updateMovieDetails = activeMovieDetails => ({
    type: "UPDATE_MOVIE_DETAILS",
    activeMovieDetails
});

// Get movie details for the provided movie id
export const getMovieDetails = (movieID, dispatch) => {
  return (dispatch) => {
    axios ({
      url: `http://localhost:${PORT}/movie_details?movieid=${movieID}`,
      method: "get",
      responseType: "json"
    })
    .then(res => dispatch(updateMovieDetails(res.data)))
    .catch(console.log)
  }
};

