import React from "react";
import Card from '../Card/Card'

function Movies({movies}) {
  console.log(movies)
  const movieCards = movies.map(movie => {
    return <Card title={movie.title}/>
  })
  return(
    <div className="Movies">
      {movieCards}
    </div>
  )
}

export default Movies