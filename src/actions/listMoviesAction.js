import axios from 'axios';

// indicates which port the Backend is listening on
const PORT = 4000;

// Action to update movie list in Redux store
export const setMovies = movies => ({
    type: "SET_MOVIES",
    movies
});

// Action to update keyword in Redux store
export const setKeyword = keyword => ({
    type: "SET_KEYWORD",
    keyword
});

// Pull in list of popular movies
export const listMovies = () => {
  return (dispatch) => {
    return axios ({
      url: `http://localhost:${PORT}/popular_movies`,
      method: "get",
      responseType: "json"
      })
      .then(res => dispatch(setMovies(res.data.results)))
      .catch(console.log)
  }
};

// Update movie list with results from keyword search
export const searchMovies = (keyword) => {
  return (dispatch) => {
    // update keyword value in redux store
    dispatch(setKeyword(keyword));

    return axios ({
      url: `http://localhost:${PORT}/search_movies?keyword=${keyword}`,
      method: "get",
      responseType: "json"
      })
      .then(res => dispatch(setMovies(res.data.results)))
      .catch(console.log)
  }
};