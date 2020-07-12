import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {apiQuery} from '../api/ApiRequest'
import { requestApiData, recieveApiData } from './actions'
import axios from 'axios'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchData(action) {
   try {
      const results = yield call(apiQuery(action.search));
      yield put(recieveApiData(results));
   } catch (e) {
      console.log(e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("RESULTS_FETCH_SUCCEEDED", fetchData);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(requestApiData, fetchData);
}

export default mySaga;