const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'

export function requestDataSearch(search) {

  function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString();
  }

  return {
    type: USER_FETCH_REQUESTED,
    search,
    id: generateId()
  }
}