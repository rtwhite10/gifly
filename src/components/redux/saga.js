import { call, put, takeLatest } from 'redux-saga/effects'
import {apiQuery} from '../api/ApiRequest'
import { requestApiData, recieveApiData } from './actions'



function* fetchData(action) {
   try {
     console.log(action)
      const results = yield call(apiQuery, action.text);
      yield put({ type: 'RESULTS_FETCH_SUCCEEDED', results});
   } catch (e) {
      // need to finish
      // yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
   }
}

function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchData);
}

export default mySaga;