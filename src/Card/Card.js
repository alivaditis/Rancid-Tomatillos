import React from "react";
import './Card.css'

function Card({id, posterSrc, rating, releaseDate, title}){
  return (
    <div className='card' id={id}>
      <div className='poster' style={{ backgroundImage: `url(${posterSrc})` }}></div>
      <section className='rating'>
        <img src={rating < 6 ? "../src/imgs/green-slime.png" : "../src/imgs/green-slime.png"}/> {Math.floor(rating*10)}%
      </section>
      <p className="title">{title}</p>
    </div>
  )
}

export default Card