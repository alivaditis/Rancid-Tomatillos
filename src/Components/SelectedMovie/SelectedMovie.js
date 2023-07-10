import React from 'react'
import { useState, useEffect } from 'react'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'
import {getTrailerKey} from '../../api'
import './SelectedMovie.css'

function SelectedMovie({selectedMovie, setMovieView, setSelectedMovie}){

  const [trailerKey, setTrailerKey] = useState('')

  useEffect(() => {
    getTrailerKey(selectedMovie.id)
      .then(key => setTrailerKey(key))
  }, [])

  return (
  <div className='selectedMovie'>
    {trailerKey && <iframe className='trailer' src= {`https://www.youtube.com/embed/${trailerKey}`}></iframe>}
    {!trailerKey && <img className='backdrop' src={selectedMovie.backdrop_path}/>}
    <div className='container'>
      <img className='selectedPoster' src={selectedMovie.poster_path}/>
      <div className='information'>
        <h3 className='selectedTitle'>{selectedMovie.title}</h3>
        <p>
          <span>{selectedMovie.release_date.slice(0,4)}, </span>
          <span>{selectedMovie.genres.join(' / ')}, </span>
          <span>{Math.floor(selectedMovie.runtime/60)}h {selectedMovie.runtime % 60}m</span>
        </p>
        <div class='rating-container'>
          <img className='rating-img' src={selectedMovie.average_rating < 6 ? slime : tomato} />
          <span className='percentage'>{Math.floor(selectedMovie.average_rating*10)}%</span>
        </div>
      </div>
    </div>
    <p className='overview'>{selectedMovie.overview}</p>
    <button className='backButton' onClick={() => {
      setMovieView(false) 
      setSelectedMovie({})
      }}>Back</button>
  </div>
  )
}

export default SelectedMovie