import React from "react";
import { useEffect } from "react";
import Card from '../Card/Card'
import './Movies.css'
import PropTypes from 'prop-types';

function Movies({movies, setServerError}) {
  
  useEffect(() => setServerError(false), [])

  const movieCards = movies.map(movie => {
    return <Card
        key={movie.id}
        id={movie.id}
        posterSrc={movie.poster_path}
        rating={movie.average_rating}
        title={movie.title}
      />
  })
  return(
    <div className='grid-container'>
      <section className="Movies">
        {movieCards}
      </section>
    </div>
  )
}

export default Movies

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  setServerError: PropTypes.func.isRequired
};