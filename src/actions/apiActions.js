import { createAction } from "redux-actions";
import { API_START, API_END } from "../constants/actionTypes";

export const apiStart = createAction(API_START);
export const apiEnd = createAction(API_END);