import React from "react";
import useEffect from 'react'
import {getMovie} from '../../api'
import './Card.css'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'

function Card({id, posterSrc, rating, title, updateSelectedMovie}) {

 
  
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