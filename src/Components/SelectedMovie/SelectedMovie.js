import React from 'react'
import { useState, useEffect } from 'react'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'
import {getTrailerKey, getMovie} from '../../api'
import './SelectedMovie.css'
import { useParams } from 'react-router-dom'

function SelectedMovie({setServerError}){
  const [selectedMovie, setSelectedMovie] = useState(false)
  const [trailerKey, setTrailerKey] = useState('')
  const {movieId} = useParams()

    useEffect( () => {  
    getMovie(movieId)
      .then(data => setSelectedMovie(data.movie))
      .catch(err => setServerError(err.message))
    }, [])

    useEffect( () => {  
      getTrailerKey(movieId)
        .then(key => setTrailerKey(key))
        .catch(e => setTrailerKey(''))
    }, [])

  return (
    <div>
      {selectedMovie &&
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
          <div className='rating-container'>
            <img className='rating-img' src={selectedMovie.average_rating < 6 ? slime : tomato} />
            <span className='percentage'>{Math.floor(selectedMovie.average_rating*10)}%</span>
          </div>
        </div>
      </div>
      <p className='overview'>{selectedMovie.overview}</p>
      </div>
      }
      </div>
  )
}

export default SelectedMovie