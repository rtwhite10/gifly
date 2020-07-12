const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
const RESULTS_FETCH_SUCCEEDED = 'RESULTS_FETCH_SUCCEEDED'

export function requestApiData(text) {
  return {
    type: USER_FETCH_REQUESTED,
    text,
  }
}

export function recieveApiData(data) {
  return {
    type: RESULTS_FETCH_SUCCEEDED,
    data
  }
}