import React from "react";
import Card from '../Card/Card'
import './Movies.css'

function Movies({movies, updateSelectedMovie, setMovieView}) {
  
  const movieCards = movies.map(movie => {
    return <Card
        key={movie.id}
        id={movie.id}
        posterSrc={movie.poster_path}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        title={movie.title}
        movies={movies}
        updateSelectedMovie={updateSelectedMovie}
        setMovieView={setMovieView}
      />
  })
  return(
    <section className="Movies">
      {movieCards}
    </section>
  )
}

export default Movies