import React from "react";
import './Card.css'
import slime from '../imgs/green-slime.png'
import tomato from '../imgs/tomato.png'

function Card({id, posterSrc, rating, releaseDate, title, setSelectedMovie, movies}){
  const updateSelectedMovie = (event) => {
    console.log(event.target.id)
    setSelectedMovie(movies.find(movie => movie.id === parseInt(event.target.id)))
  } 
  
  return (
    <div
      className='card'
      
    >
      <div className='poster' style={{ backgroundImage: `url(${posterSrc})` }}></div>
      <section className='rating'>
        <img className='tomato' src={rating < 6 ? slime : tomato}/> {Math.floor(rating*10)}%
      </section>
      <p className="title" id={id} onClick={updateSelectedMovie}>{title} </p>
    </div>
  )
}

export default Card