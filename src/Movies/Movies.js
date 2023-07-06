import React from "react";
import Card from '../Card/Card'
import './Movies.css'

function Movies({movies}) {
  console.log(movies)
  const movieCards = movies.map(movie => {
    return <Card
        key={movie.id}
        id={movie.id}
        posterSrc={movie.poster_path}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        title={movie.title}
      />
  })
  return(
    <section className="Movies">
      {movieCards}
    </section>
  )
}

export default Movies