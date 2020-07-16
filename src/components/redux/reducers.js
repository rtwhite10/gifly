
const initialState = {
  theme: 'light',
  error: '',
  results: [],
  loading: null
}

export function giphyApp(state = initialState, action) {
  switch(action.type) {
    case 'RESULTS_FETCH_SUCCEEDED': 
      return {
        ...state,
        results: action.results,
        loading: false
      }
    case 'REQUEST_ADDITIONAL_DATA': 
    return {
      ...state,
      results: state.results.concat(action.results),
      loading: false
    }
    case 'RESULTS_FETCH_FAILED': 
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case 'LOADING': 
      return {
        ...state,
        loading: true
      }
    case 'NOT_LOADING': 
    return {
      ...state,
      loading: false
    }
    case 'TOGGLE_THEME': 
    return {
      ...state,
      theme: action.theme
    }
    default:
      return state
  }
}

// export function loadingState(state = {}, action) {
//   switch(action.type) {
//     case 'LOADING': 
//       return {
//         loading: true
//       }
//     case 'NOT_LOADING': 
//       return {
//         loading: false
//       }
//     default:
//       return state
//   }
// }