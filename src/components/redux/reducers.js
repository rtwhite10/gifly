
const initialState = {
  loading: null,
  message: '',
  results: []
}

export function giphyApp(state = initialState, action) {
  switch(action.type) {
    case 'RESULTS_FETCH_SUCCEEDED': 
      return {
        loading: false,
        results: action.results
      }
    case 'RESULTS_FETCH_FAILED': 
      return {
        ...state,
        loading: false,
        message: action.message
      }
    default:
      return state
  }
  return state
}