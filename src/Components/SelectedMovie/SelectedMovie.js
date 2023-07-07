import React from 'react'
import './SelectedMovie.css'


function SelectedMovie({selectedMovie}){
  return (
    <div className='selectedMovie'>
      <img className='selectedimg' src={selectedMovie.backdrop_path}></img>
      <h3 className='selectedTitle'>{selectedMovie.title}</h3>
      <p className='selectedReleaseDate'>Release date: {selectedMovie.release_date}</p>
    </div>
  )
}

export default SelectedMovie