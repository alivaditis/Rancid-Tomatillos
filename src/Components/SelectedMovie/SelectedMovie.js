import React from 'react'
import './SelectedMovie.css'

function SelectedMovie({selectedMovie, setMovieView, setSelectedMovie}){

  return (
  <div 
  className='selectedMovie'
  style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}
  >
    <h3 className='selectedTitle'>{selectedMovie.title}</h3>
    <p className='selectedReleaseDate'>Release date: {selectedMovie.release_date}</p>
    <button className='backButton' onClick={() => {
      setMovieView(false) 
      setSelectedMovie({})
      }}>Back</button>
  </div>
  )
}

export default SelectedMovie