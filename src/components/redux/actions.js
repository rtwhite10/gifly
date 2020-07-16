const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
const RESULTS_FETCH_SUCCEEDED = 'RESULTS_FETCH_SUCCEEDED'
const REQUEST_ADDITIONAL_DATA = 'REQUEST_ADDITIONAL_DATA'
const TOGGLE_THEME = 'TOGGLE_THEME'

export function requestApiData(text) {
  return {
    type: USER_FETCH_REQUESTED,
    text,
  }
}

export function requestAditionalData(data) {
  return {
    type: REQUEST_ADDITIONAL_DATA,
    data
  }
}

export function recieveApiData(text) {
  return {
    type: RESULTS_FETCH_SUCCEEDED,
    text
  }
}

export function toggleTheme(theme) {
  return {
    type: TOGGLE_THEME,
    theme
  }
}

