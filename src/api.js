function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error('Movies not found.')
      }
      return response.json()
    })
    .catch(err => console.log(err))
}

function getMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Movie not found.')
    }
    return response.json()
  })
  .catch(err => console.log(err))
}

function getTrailerKey(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(res => res.json())
    .then(data => data.videos.length ? data.videos.find(video => video.type === 'Trailer') : '')
    .then(video => video.key ? video.key : '')
}

export { getAllMovies, getMovie, getTrailerKey}