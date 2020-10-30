import { handleActions } from "redux-actions";
import { SELECT_MOVIE } from "../constants/actionTypes";

export default handleActions(
  {
    [SELECT_MOVIE]: (state, action) => state
  },
  1
);