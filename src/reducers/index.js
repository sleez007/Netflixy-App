import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import selectedMovie from './selectedmovies';
import movies from './movies';
import isLoading from './isLoading';


const persistConfig = {
    key :"netflixy",
    storage
}

const rootReducer = combineReducers({
    movies,
    selectedMovie,
    isLoading
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;