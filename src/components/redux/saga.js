import { call, put, takeLatest } from 'redux-saga/effects'
import {apiQuery} from '../api/ApiRequest'



function* fetchData(action) {
   try {
      const results = yield call(apiQuery, action.text);
      yield put({ type: 'LOADING' })
      yield put({ type: 'RESULTS_FETCH_SUCCEEDED', results});
   } catch (error) {
      const Error = "oops something went wrong"
      yield put({ type: 'RESULTS_FETCH_FAILED', Error })
   }
}

function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchData);
}

export default mySaga;