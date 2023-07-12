import React from 'react'
import { useState, useEffect } from 'react'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'
import {getTrailerKey, getMovie} from '../../api'
import './SelectedMovie.css'
import { useParams } from 'react-router-dom'

function SelectedMovie(){
  const [userMovie, setUserMovie] = useState(null)
  const [trailerKey, setTrailerKey] = useState('')
  const {movieId} = useParams()
  // console.log(id)

    useEffect( () => {  
    getMovie(movieId)
      .then(data => setUserMovie(data.movie))
      .then(res => {
        getTrailerKey(movieId)
        .then(key => setTrailerKey(key))
      })
    }, [])
      // if (!data) {
      //   setServerError(true)
      // } else {
        
      // }
    // })
    // .then(x => setMovieView(true))


  return (
    // <div>
    //   {userMovie &&
    //   <div className='selectedMovie'>
    //   {trailerKey && <iframe className='trailer' src= {`https://www.youtube.com/embed/${trailerKey}`}></iframe>}
    //   {!trailerKey && <img className='backdrop' src={userMovie.backdrop_path}/>}
    //   <div className='container'>
    //     <img className='selectedPoster' src={userMovie.poster_path}/>
    //     <div className='information'>
    //       <h3 className='selectedTitle'>{userMovie.title}</h3>
    //       <p>
    //         <span>{userMovie.release_date.slice(0,4)}, </span>
    //         <span>{userMovie.genres.join(' / ')}, </span>
    //         <span>{Math.floor(userMovie.runtime/60)}h {userMovie.runtime % 60}m</span>
    //       </p>
    //       <div className='rating-container'>
    //         <img className='rating-img' src={userMovie.average_rating < 6 ? slime : tomato} />
    //         <span className='percentage'>{Math.floor(userMovie.average_rating*10)}%</span>
    //       </div>
    //     </div>
    //   </div>
    //   <p className='overview'>{userMovie.overview}</p>
    //   <button className='backButton' onClick={() => {
    //     // setSelectedMovie({})
    //     }}>Back</button>
    //   </div>
    //   } 
    // </div>

    <div>
      {userMovie ?
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
      </div>
      : <h2>Loading...</h2>
      }
      </div>
  )
}

export default SelectedMovie