import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {apiQuery} from '../api/ApiRequest'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchData(action) {
   try {
      const results = yield call(() => apiQuery());
      yield put({type: "RESULTS_FETCH_SUCCEEDED", results: results});
   } catch (e) {
      yield put({type: "RESULTS_FETCH_FAILED", message: results});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("RESULTS_FETCH_SUCCEEDED", fetchData);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("RESULTS_FETCH_SUCCEEDED", fetchData);
}

export default mySaga;