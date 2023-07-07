import {useState, useEffect} from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import getAllMovies from '../../api';
import movieData from '../../dummy';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  
  useEffect( () => {
    getAllMovies()
      .then(data => setMovies(data.movies))
    }, [])

  return (
    <div className="app">
      <Header/>
      <Movies className='Movies' movies={movies} setSelectedMovie={setSelectedMovie}/>
      {/* <SelectedMovie  selectedMovie={selectedMovie}/> */}
    </div>
  );
}

export default App;