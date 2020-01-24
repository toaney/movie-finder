import { combineReducers } from 'redux';
import listMoviesReducer from './listMoviesReducer';
import movieDetailsReducer from './movieDetailsReducer';

export default combineReducers({
    listMoviesReducer,
    movieDetailsReducer
})