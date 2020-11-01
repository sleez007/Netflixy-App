import { createAction } from "redux-actions";
import { normalize, schema } from "normalizr"; 
import { apiPayloadCreator } from "../utils/appUtils";
import { API } from "../constants/actionTypes";
import { SET_MOVIES, SELECT_MOVIE} from '../constants/actionTypes';
import { GET_MOVIES } from '../constants/labels';

const getMoviesAC = createAction(API, apiPayloadCreator);

export const getMovies = () =>
  getMoviesAC({ url: "/vcvx0", onSuccess: setMovies, label : GET_MOVIES });

function setMovies(movies) {
  const movieSchema = new schema.Entity("movies");
  const movieListSchema = new schema.Array(movieSchema);
  const normalizedData = normalize(movies, movieListSchema);
  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies
  };
}

export const selectMovie = createAction(SELECT_MOVIE);