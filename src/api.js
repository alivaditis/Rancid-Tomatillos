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

export default getAllMovies