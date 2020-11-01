import { handleActions } from "redux-actions";
import produce from "immer";
import { API_START, API_END } from "../constants/actionTypes";
import { GET_MOVIES } from "../constants/labels";

export default handleActions(
  {
    [API_START]: produce((state, action) => {
      if (action.payload === GET_MOVIES) state[GET_MOVIES] = true;
    }),
    [API_END]: produce((state, action) => {
      if (action.payload === GET_MOVIES) state[GET_MOVIES] = false;
    })
  },
  {}
); 