import { handleActions} from 'redux-actions';
import { GET_MOVIES } from "../constants/actionTypes"

export default handleActions({
    [GET_MOVIES]: (state, action) => state 
},{});