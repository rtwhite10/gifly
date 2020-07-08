const API_KEY = 'TykgssY6bCKuoWx2YPz3zm2la8sz6jzm'

export function apiQuery(search) {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(json => {
      return json
    })
    .catch(err => console.log(err)) 
}