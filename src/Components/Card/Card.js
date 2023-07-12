import React from "react";
import useEffect from 'react'
import {getMovie} from '../../api'
import './Card.css'
import slime from '../../imgs/green-slime.png'
import tomato from '../../imgs/tomato.png'
import { Link } from 'react-router-dom';

function Card({id, posterSrc, rating, title, updateSelectedMovie}) {

 
  
  return (
    <Link to={`/${id}`}>
      <div
        className='card'
        id={id}
        >
        <div 
          className='poster' 
          style={{ backgroundImage: `url(${posterSrc})` }}>
        </div>
        <div className='wrap'>
          <section className='rating'>
            <img className='tomato' src={rating < 6 ? slime : tomato} /> 
            <span>{Math.floor(rating*10)}%</span>
          </section>
          <p className="title">{title} </p>
        </div>
      </div>
    </Link>)
}

export default Card