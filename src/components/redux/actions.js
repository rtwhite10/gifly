const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
const RESULTS_FETCH_SUCCEEDED = 'RESULTS_FETCH_SUCCEEDED'

export function requestApiData(search) {
  return {
    type: USER_FETCH_REQUESTED,
    search,
  }
}

export function recieveApiData(data) {
  return {
    type: RESULTS_FETCH_SUCCEEDED,
    data
  }
}