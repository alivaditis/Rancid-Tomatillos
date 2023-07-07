import React from "react";
import './Card.css'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'

function Card({id, posterSrc, rating, releaseDate, title, setSelectedMovie, movies, setMovieView}){
  const updateSelectedMovie = (event) => {
    setMovieView(true)
    console.log(event.target.id)
    setSelectedMovie(movies.find(movie => movie.id === parseInt(event.target.id || event.target.parentNode.id || event.target.parentNode.parentNode.id)))
  } 
  
  return (
    <div
      className='card'
      id={id}
      onClick={updateSelectedMovie}
      >
      <div 
        className='poster' 
        style={{ backgroundImage: `url(${posterSrc})` }}
        onClick={updateSelectedMovie}>
      </div>
      <div className='wrap'>
        <section className='rating'>
          <img className='tomato' src={rating < 6 ? slime : tomato} onClick={updateSelectedMovie}/> 
          <span>{Math.floor(rating*10)}%</span>
        </section>
        <p className="title" onClick={updateSelectedMovie}>{title} </p>
      </div>
    </div>
  )
}

export default Card