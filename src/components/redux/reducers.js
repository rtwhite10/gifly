
const initialState = {

  message: '',
  results: [],
  loading: null
}

export function giphyApp(state = initialState, action) {
  switch(action.type) {
    case 'RESULTS_FETCH_SUCCEEDED': 
      return {
        ...state,
        results: action.data,
        loading: false
      }
    case 'RESULTS_FETCH_FAILED': 
      return {
        ...state,
        message: action.message,
        loading: false
      }
    default:
      return state
  }
}