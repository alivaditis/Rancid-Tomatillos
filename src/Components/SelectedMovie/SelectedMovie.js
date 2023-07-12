import React from 'react'
import { useState, useEffect } from 'react'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'
import {getTrailerKey, getMovie} from '../../api'
import './SelectedMovie.css'
import { useParams } from 'react-router-dom'

function SelectedMovie(){
  const [userMovie, setUserMovie] = useState({})
  const [trailerKey, setTrailerKey] = useState('')
  const {id} = useParams()
  // console.log(id)
  useEffect( () => {  
    getMovie(id)
    .then(data => {
      console.log(data.movie, "Data.movie")
      setUserMovie(data.movie)
      console.log(userMovie, "SelectedMovie")
    })
    }, [id])
      // if (!data) {
      //   setServerError(true)
      // } else {
        
      // }
    // })
    // .then(x => setMovieView(true))
  

  useEffect(() => {
    getTrailerKey(userMovie.id)
      .then(key => setTrailerKey(key))
  }, [])

  return (
    <div>
      {/* {userMovie && */}
      <div className='selectedMovie'>
      {trailerKey && <iframe className='trailer' src= {`https://www.youtube.com/embed/${trailerKey}`}></iframe>}
      {!trailerKey && <img className='backdrop' src={userMovie.backdrop_path}/>}
      <div className='container'>
        <img className='selectedPoster' src={userMovie.poster_path}/>
        <div className='information'>
          <h3 className='selectedTitle'>{userMovie.title}</h3>
          <p>
            <span>{userMovie.release_date.slice(0,4)}, </span>
            <span>{userMovie.genres.join(' / ')}, </span>
            <span>{Math.floor(userMovie.runtime/60)}h {userMovie.runtime % 60}m</span>
          </p>
          <div className='rating-container'>
            <img className='rating-img' src={userMovie.average_rating < 6 ? slime : tomato} />
            <span className='percentage'>{Math.floor(userMovie.average_rating*10)}%</span>
          </div>
        </div>
      </div>
      <p className='overview'>{userMovie.overview}</p>
      <button className='backButton' onClick={() => {
        // setSelectedMovie({})
        }}>Back</button>
      </div>
      {/* } */}
    </div>
  )
}

export default SelectedMovie