import { combineReducers} from 'redux';
import movies from './movies';
import selectedMovie from './selectedmovies';

export default combineReducers({
    movies,
    selectedMovie
});