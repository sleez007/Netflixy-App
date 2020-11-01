import { handleActions} from 'redux-actions';
import { SET_MOVIES } from "../constants/actionTypes"

export default handleActions({
    ['SET_MOVIES']: (state, action) => action.payload
},{});