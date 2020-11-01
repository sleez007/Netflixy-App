import {takeEvery, put, call} from 'redux-saga/effects';
import { API } from "../constants/actionTypes";
import axios from 'axios';
function* makeRequest(){
    yield call(axios.get,"");
}

function* watchCalls(){
    yield takeEvery(API, makeRequest);
}