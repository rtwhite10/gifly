import { call, put, takeLatest, delay } from 'redux-saga/effects'
import {apiQuery} from '../api/ApiRequest'



function* fetchData(action) {
   try {
      const results = yield call(apiQuery, action.text, action.count);
      // yield put({ type: 'LOADING' })
      yield put({ type: 'RESULTS_FETCH_SUCCEEDED', results});
   } catch (error) {
      const Error = "oops something went wrong"
      yield put({ type: 'RESULTS_FETCH_FAILED', Error })
   }
}

function* fetchAdditonalData(action) {
   try {
      const results = yield call(apiQuery, action.text);
      yield delay(1000)
      // yield put({ type: 'LOADING' })
      yield put({ type: 'REQUEST_ADDITIONAL_DATA_SUCCEEDED', results});
   } catch (error) {
      const Error = "oops something went wrong"
      yield put({ type: 'RESULTS_FETCH_FAILED', Error })
   }
}

function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchData);
  yield takeLatest('REQUEST_ADDITIONAL_DATA', fetchAdditonalData)
}

export default mySaga;