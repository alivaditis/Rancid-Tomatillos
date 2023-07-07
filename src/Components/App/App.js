import {useState} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import movieData from '../../dummy';
import './App.css';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [selectedMovie, setSelectedMovie] = useState({})
  const [movieView, setMovieView] = useState(false)
  return (
    <div className="app">
      <Header/>
      {!movieView && <Movies className='Movies' movies={movies} setSelectedMovie={setSelectedMovie} setMovieView={setMovieView}/>}
      {movieView && <SelectedMovie  selectedMovie={selectedMovie}/>}
    </div>
  );
}

export default App