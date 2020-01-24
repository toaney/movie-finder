const INITIAL_STATE = {
    activeMovie: "",
    activeMovieDetails: {}
}

const movieDetailsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_MOVIE':
            return {
                ...state,
                activeMovie: action.activeMovie
            }
        case 'UPDATE_MOVIE_DETAILS':
            return {
                ...state,
                activeMovieDetails: action.activeMovieDetails
            }
        default: 
            return state
    }
}

export default movieDetailsReducer;