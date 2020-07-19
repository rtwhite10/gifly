const API_KEY = 'TykgssY6bCKuoWx2YPz3zm2la8sz6jzm'

export const apiQuery = async (search) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=50&offset=0&rating=g&lang=en`)
    const { data } = await response.json()
    console.log(data)
    return data
  } catch (e) {
    return e
  } 
}

// export const loadMoreDataQuery = async (search) => {
//   try {
//     const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&limit=25&offset=0&rating=g&lang=en`)
//     const { data } = await response.json()
//     console.log(data)
//     return data
//   } catch (e) {
//     return e
//   } 
// }