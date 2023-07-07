import React from "react";
import Card from '../Card/Card'
import './Movies.css'

function Movies({movies, setSelectedMovie}) {
  
  const movieCards = movies.map(movie => {
    return <Card
        key={movie.id}
        id={movie.id}
        posterSrc={movie.poster_path}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        title={movie.title}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
  })
  return(
    <section className="Movies">
      {movieCards}
    </section>
  )
}

export default Movies